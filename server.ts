import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));

// In-memory store for contact submissions with timestamps and duplicate prevention
interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  receivedAt: string;
  ip?: string;
}

const contactSubmissions: ContactSubmission[] = [];
const recentSubmissionTimes = new Map<string, number>();

// Contact API Endpoint
app.post('/api/contact', (req: Request, res: Response) => {
  try {
    const { name, email, subject, message, honeypot } = req.body;

    // Spam honeypot check - bots tend to populate hidden fields
    if (honeypot && String(honeypot).trim().length > 0) {
      return res.status(400).json({
        success: false,
        error: 'Automated submission rejected.',
      });
    }

    // Validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return res.status(400).json({
        success: false,
        error: 'Please provide your full name (minimum 2 characters).',
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address.',
      });
    }

    if (!subject || typeof subject !== 'string' || subject.trim().length < 3) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a subject for your message (minimum 3 characters).',
      });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a message with at least 10 characters.',
      });
    }

    // Rate-limiting check by email (prevent duplicate submissions within 15 seconds)
    const normalizedEmail = email.trim().toLowerCase();
    const lastSubmission = recentSubmissionTimes.get(normalizedEmail);
    const now = Date.now();

    if (lastSubmission && now - lastSubmission < 15000) {
      return res.status(429).json({
        success: false,
        error: 'Please wait a few seconds before sending another message.',
      });
    }

    recentSubmissionTimes.set(normalizedEmail, now);

    const submission: ContactSubmission = {
      id: `msg_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      name: name.trim(),
      email: normalizedEmail,
      subject: subject.trim(),
      message: message.trim(),
      receivedAt: new Date().toISOString(),
      ip: req.ip,
    };

    contactSubmissions.push(submission);

    console.log(`[Contact Form] New message from ${submission.name} (${submission.email}): "${submission.subject}"`);

    return res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully! Hikmat Ullah will review it and get back to you shortly.',
      id: submission.id,
      timestamp: submission.receivedAt,
    });
  } catch (error) {
    console.error('[Contact Form Error]:', error);
    return res.status(500).json({
      success: false,
      error: 'An internal server error occurred while processing your message. Please try again or email directly.',
    });
  }
});

// Health check and portfolio status endpoint
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    portfolioOwner: 'Hikmat Ullah',
    timestamp: new Date().toISOString(),
    messagesCount: contactSubmissions.length,
  });
});

// Vite integration
async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: process.env.DISABLE_HMR !== 'true',
        watch: process.env.DISABLE_HMR === 'true' ? null : {},
      },
      appType: 'spa',
    });

    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`🚀 Portfolio server running on http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
