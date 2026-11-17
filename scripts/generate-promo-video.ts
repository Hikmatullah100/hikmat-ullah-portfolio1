import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const FONT_BOLD = '/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf';
const FONT_REG = '/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf';

const OUTPUT_DIR = path.resolve(process.cwd(), 'public');
const TMP_DIR = path.resolve(process.cwd(), 'temp_video_render');
const FINAL_MP4 = path.join(OUTPUT_DIR, 'Hikmat-Ullah-Web-Developer-Promo.mp4');

// Ensure directories
if (!fs.existsSync(TMP_DIR)) fs.mkdirSync(TMP_DIR, { recursive: true });
if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

console.log('🎬 Starting 15-second promo video rendering (1080x1920, 9:16)...');

// 1. Prepare Keyframe Master Assets (1080x1920)
const scene1Base = path.join(TMP_DIR, 'scene1_base.png');
const scene2Base = path.join(TMP_DIR, 'scene2_base.png');
const scene3Base = path.join(TMP_DIR, 'scene3_base.png');
const scene4Base = path.join(TMP_DIR, 'scene4_base.png');

// --- SCENE 1: Hero Introduction (0 - 3s) ---
// Dark navy canvas, glowing badges, Hikmat Ullah, Web Developer, Portrait
console.log('🎨 Generating Scene 1 asset...');
execSync(`
convert -size 1080x1920 xc:"#030B1B" \\
  -fill "#07152B" -draw "roundrectangle 80,180 1000,1740 40,40" \\
  -fill none -stroke "#12DDF5" -strokewidth 3 -draw "roundrectangle 80,180 1000,1740 40,40" \\
  \\( -size 300x70 xc:"#0B1C35" -fill none -stroke "#12DDF5" -strokewidth 2 -draw "roundrectangle 0,0 300,70 35,35" \\
     -font "${FONT_BOLD}" -pointsize 26 -fill "#12DDF5" -gravity center -annotate +0+0 "• OPEN TO WORK" \\) \\
     -gravity north -geometry +0+250 -composite \\
  -font "${FONT_BOLD}" -pointsize 84 -fill "#FFFFFF" -gravity north -annotate +0+370 "HIKMAT ULLAH" \\
  -font "${FONT_BOLD}" -pointsize 42 -fill "#12DDF5" -gravity north -annotate +0+470 "PROFESSIONAL WEB DEVELOPER" \\
  \\( public/assets/aistudio/WhatsApp_Image_2026-10-29_at_9.07.07_AM_9f852017.jpeg -resize 440x440^ -gravity center -extent 440x440 \\
     \\( -size 440x440 xc:none -fill white -draw "circle 220,220 220,5" \\) -alpha set -compose DstIn -composite \\
     \\( -size 456x456 xc:none -stroke "#12DDF5" -strokewidth 6 -fill none -draw "circle 228,228 228,6" \\) -gravity center -composite \\) \\
     -gravity north -geometry +0+570 -composite \\
  -font "${FONT_BOLD}" -pointsize 46 -fill "#FFFFFF" -gravity north -annotate +0+1090 "Building Modern Web Apps" \\
  -font "${FONT_REG}" -pointsize 32 -fill "#A8B6CA" -gravity north -annotate +0+1160 "High Performance • Clean UI • Responsive Architecture" \\
  \\( -size 560x90 xc:"#12DDF5" -font "${FONT_BOLD}" -pointsize 34 -fill "#030B1B" -gravity center -annotate +0+0 "EXPLORE PORTFOLIO ➔" \\) \\
     -gravity north -geometry +0+1280 -composite \\
  -font "${FONT_REG}" -pointsize 26 -fill "#64748B" -gravity north -annotate +0+1440 "hikmatgul75@gmail.com • Pakistan" \\
  "${scene1Base}"
`);

// --- SCENE 2: Skills (3 - 6s) ---
// HTML, CSS, JavaScript, React.js, Tailwind CSS
console.log('🎨 Generating Scene 2 asset...');
execSync(`
convert -size 1080x1920 xc:"#030B1B" \\
  -fill "#07152B" -draw "roundrectangle 80,180 1000,1740 40,40" \\
  -fill none -stroke "#12DDF5" -strokewidth 3 -draw "roundrectangle 80,180 1000,1740 40,40" \\
  -font "${FONT_BOLD}" -pointsize 30 -fill "#12DDF5" -gravity north -annotate +0+250 "CORE TECHNICAL STACK" \\
  -font "${FONT_BOLD}" -pointsize 72 -fill "#FFFFFF" -gravity north -annotate +0+310 "Modern Web Skills" \\
  -font "${FONT_REG}" -pointsize 30 -fill "#A8B6CA" -gravity north -annotate +0+400 "Engineering fast, reactive & accessible applications" \\
  \\( -size 800x120 xc:"#0B1C35" -stroke "#12DDF5" -strokewidth 2 -draw "roundrectangle 0,0 800,120 24,24" \\
     -font "${FONT_BOLD}" -pointsize 40 -fill "#12DDF5" -gravity west -annotate +50+0 "⚛  React.js" \\
     -font "${FONT_REG}" -pointsize 28 -fill "#FFFFFF" -gravity east -annotate +50+0 "Hooks • SPA • State" \\) \\
     -gravity north -geometry +0+520 -composite \\
  \\( -size 800x120 xc:"#0B1C35" -stroke "#38BDF8" -strokewidth 2 -draw "roundrectangle 0,0 800,120 24,24" \\
     -font "${FONT_BOLD}" -pointsize 40 -fill "#38BDF8" -gravity west -annotate +50+0 "🌊  Tailwind CSS" \\
     -font "${FONT_REG}" -pointsize 28 -fill "#FFFFFF" -gravity east -annotate +50+0 "Utility-First • Modern UI" \\) \\
     -gravity north -geometry +0+680 -composite \\
  \\( -size 800x120 xc:"#0B1C35" -stroke "#F7DF1E" -strokewidth 2 -draw "roundrectangle 0,0 800,120 24,24" \\
     -font "${FONT_BOLD}" -pointsize 40 -fill "#F7DF1E" -gravity west -annotate +50+0 "⚡  JavaScript & TypeScript" \\
     -font "${FONT_REG}" -pointsize 28 -fill "#FFFFFF" -gravity east -annotate +50+0 "ES6+ • Strict Typing" \\) \\
     -gravity north -geometry +0+840 -composite \\
  \\( -size 800x120 xc:"#0B1C35" -stroke "#E34F26" -strokewidth 2 -draw "roundrectangle 0,0 800,120 24,24" \\
     -font "${FONT_BOLD}" -pointsize 40 -fill "#E34F26" -gravity west -annotate +50+0 "🌐  HTML5 & CSS3" \\
     -font "${FONT_REG}" -pointsize 28 -fill "#FFFFFF" -gravity east -annotate +50+0 "Semantic • Animations" \\) \\
     -gravity north -geometry +0+1000 -composite \\
  \\( -size 800x120 xc:"#0B1C35" -stroke "#10B981" -strokewidth 2 -draw "roundrectangle 0,0 800,120 24,24" \\
     -font "${FONT_BOLD}" -pointsize 40 -fill "#10B981" -gravity west -annotate +50+0 "🚀  Node.js & Express" \\
     -font "${FONT_REG}" -pointsize 28 -fill "#FFFFFF" -gravity east -annotate +50+0 "APIs • Backend Services" \\) \\
     -gravity north -geometry +0+1160 -composite \\
  \\( -size 600x80 xc:"#12DDF5" -font "${FONT_BOLD}" -pointsize 30 -fill "#030B1B" -gravity center -annotate +0+0 "100% RESPONSIVE CODE" \\) \\
     -gravity north -geometry +0+1370 -composite \\
  "${scene2Base}"
`);

// --- SCENE 3: Featured Project Gem Academy (6 - 11s) ---
// Actual showcase screenshot of Gem Academy
console.log('🎨 Generating Scene 3 asset...');
execSync(`
convert -size 1080x1920 xc:"#030B1B" \\
  -fill "#07152B" -draw "roundrectangle 80,120 1000,1800 40,40" \\
  -fill none -stroke "#12DDF5" -strokewidth 3 -draw "roundrectangle 80,120 1000,1800 40,40" \\
  -font "${FONT_BOLD}" -pointsize 28 -fill "#12DDF5" -gravity north -annotate +0+180 "FEATURED REAL PROJECT" \\
  -font "${FONT_BOLD}" -pointsize 64 -fill "#FFFFFF" -gravity north -annotate +0+230 "Gem Academy" \\
  -font "${FONT_BOLD}" -pointsize 34 -fill "#FBBF24" -gravity north -annotate +0+310 "Online Tutoring & Learning Platform" \\
  -font "${FONT_REG}" -pointsize 26 -fill "#A8B6CA" -gravity north -annotate +0+360 "Courses • Subject Curricula • Verified Teachers • Demo Booking" \\
  \\( public/images/projects/gem-academy.png -resize 860x580^ -gravity center -extent 860x580 \\
     -stroke "#12DDF5" -strokewidth 4 -draw "rectangle 0,0 859,579" \\) \\
     -gravity north -geometry +0+430 -composite \\
  \\( -size 860x180 xc:"#0B1C35" -stroke "#12DDF5" -strokewidth 2 -draw "roundrectangle 0,0 860,180 20,20" \\
     -font "${FONT_BOLD}" -pointsize 30 -fill "#12DDF5" -gravity north -annotate +0+25 "Live Deployment on GitHub Pages" \\
     -font "${FONT_REG}" -pointsize 26 -fill "#FFFFFF" -gravity north -annotate +0+75 "hikmatullah100.github.io/gem-Acadmey/" \\
     -font "${FONT_REG}" -pointsize 24 -fill "#A8B6CA" -gravity north -annotate +0+120 "O Level • IGCSE • A Level Student Portal" \\) \\
     -gravity north -geometry +0+1060 -composite \\
  \\( -size 860x220 xc:"#07152B" -stroke "#10B981" -strokewidth 2 -draw "roundrectangle 0,0 860,220 20,20" \\
     -font "${FONT_REG}" -pointsize 24 -fill "#E2E8F0" -gravity north -annotate +0+25 "'Hikmat Ullah did a great job developing Gem Academy...'" \\
     -font "${FONT_REG}" -pointsize 22 -fill "#A8B6CA" -gravity north -annotate +0+70 "Clean, professional, and user-friendly with responsive layout." \\
     -font "${FONT_BOLD}" -pointsize 26 -fill "#10B981" -gravity north -annotate +0+130 "★ ★ ★ ★ ★  Client Endorsement: Munawar Hussain" \\) \\
     -gravity north -geometry +0+1280 -composite \\
  \\( -size 520x80 xc:"#12DDF5" -font "${FONT_BOLD}" -pointsize 32 -fill "#030B1B" -gravity center -annotate +0+0 "LIVE WEB PROJECT" \\) \\
     -gravity north -geometry +0+1560 -composite \\
  "${scene3Base}"
`);

// --- SCENE 4: Contact & Closing (11 - 15s) ---
// "Let's Build Something Great", Hikmat Ullah | Web Developer, Contact Channels
console.log('🎨 Generating Scene 4 asset...');
execSync(`
convert -size 1080x1920 xc:"#030B1B" \\
  -fill "#07152B" -draw "roundrectangle 80,180 1000,1740 40,40" \\
  -fill none -stroke "#12DDF5" -strokewidth 3 -draw "roundrectangle 80,180 1000,1740 40,40" \\
  -font "${FONT_BOLD}" -pointsize 32 -fill "#12DDF5" -gravity north -annotate +0+260 "GET IN TOUCH" \\
  -font "${FONT_BOLD}" -pointsize 68 -fill "#FFFFFF" -gravity north -annotate +0+330 "Let's Build Something Great" \\
  -font "${FONT_BOLD}" -pointsize 42 -fill "#278BFF" -gravity north -annotate +0+430 "Hikmat Ullah | Web Developer" \\
  \\( -size 840x120 xc:"#0B1C35" -stroke "#25D366" -strokewidth 3 -draw "roundrectangle 0,0 840,120 24,24" \\
     -font "${FONT_BOLD}" -pointsize 36 -fill "#25D366" -gravity west -annotate +60+0 "💬 WhatsApp Chat" \\
     -font "${FONT_BOLD}" -pointsize 34 -fill "#FFFFFF" -gravity east -annotate +60+0 "+92 308 4447392" \\) \\
     -gravity north -geometry +0+560 -composite \\
  \\( -size 840x120 xc:"#0B1C35" -stroke "#12DDF5" -strokewidth 2 -draw "roundrectangle 0,0 840,120 24,24" \\
     -font "${FONT_BOLD}" -pointsize 36 -fill "#12DDF5" -gravity west -annotate +60+0 "✉  Email Contact" \\
     -font "${FONT_BOLD}" -pointsize 34 -fill "#FFFFFF" -gravity east -annotate +60+0 "hikmatgul75@gmail.com" \\) \\
     -gravity north -geometry +0+720 -composite \\
  \\( -size 840x120 xc:"#0B1C35" -stroke "#0A66C2" -strokewidth 2 -draw "roundrectangle 0,0 840,120 24,24" \\
     -font "${FONT_BOLD}" -pointsize 36 -fill "#0A66C2" -gravity west -annotate +60+0 "in  LinkedIn Network" \\
     -font "${FONT_BOLD}" -pointsize 30 -fill "#FFFFFF" -gravity east -annotate +60+0 "hikmat-ullah-b8b871277" \\) \\
     -gravity north -geometry +0+880 -composite \\
  \\( -size 840x120 xc:"#0B1C35" -stroke "#FFFFFF" -strokewidth 2 -draw "roundrectangle 0,0 840,120 24,24" \\
     -font "${FONT_BOLD}" -pointsize 36 -fill "#FFFFFF" -gravity west -annotate +60+0 "🐙  GitHub Code" \\
     -font "${FONT_BOLD}" -pointsize 34 -fill "#A8B6CA" -gravity east -annotate +60+0 "Hikmatullah100" \\) \\
     -gravity north -geometry +0+1040 -composite \\
  \\( -size 840x120 xc:"#0B1C35" -stroke "#E1306C" -strokewidth 2 -draw "roundrectangle 0,0 840,120 24,24" \\
     -font "${FONT_BOLD}" -pointsize 36 -fill "#E1306C" -gravity west -annotate +60+0 "📷  Instagram Profile" \\
     -font "${FONT_BOLD}" -pointsize 34 -fill "#FFFFFF" -gravity east -annotate +60+0 "@hikmat_ullah_75" \\) \\
     -gravity north -geometry +0+1200 -composite \\
  \\( -size 680x90 xc:"#12DDF5" -font "${FONT_BOLD}" -pointsize 36 -fill "#030B1B" -gravity center -annotate +0+0 "AVAILABLE FOR HIRE NOW" \\) \\
     -gravity north -geometry +0+1420 -composite \\
  "${scene4Base}"
`);

// 2. Render Animated Video Clips with FFmpeg Zoom/Pan filters
console.log('🎥 Rendering dynamic video clips with smooth motion transitions...');

const clip1 = path.join(TMP_DIR, 'clip1.mp4');
const clip2 = path.join(TMP_DIR, 'clip2.mp4');
const clip3 = path.join(TMP_DIR, 'clip3.mp4');
const clip4 = path.join(TMP_DIR, 'clip4.mp4');

// Clip 1: 0 to 3s (3 seconds, 90 frames @ 30fps) - Gentle cinematic zoom-in
execSync(`
ffmpeg -y -loop 1 -i "${scene1Base}" -t 3 \\
  -vf "zoompan=z='min(zoom+0.0015,1.08)':d=90:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1080x1920:fps=30" \\
  -c:v libx264 -pix_fmt yuv420p "${clip1}"
`);

// Clip 2: 3 to 6s (3 seconds, 90 frames @ 30fps) - Smooth downward pan over skills
execSync(`
ffmpeg -y -loop 1 -i "${scene2Base}" -t 3 \\
  -vf "zoompan=z=1.04:d=90:x='iw/2-(iw/zoom/2)':y='(in/90)*(ih-ih/zoom)':s=1080x1920:fps=30" \\
  -c:v libx264 -pix_fmt yuv420p "${clip2}"
`);

// Clip 3: 6 to 11s (5 seconds, 150 frames @ 30fps) - Slow focus on Gem Academy showcase
execSync(`
ffmpeg -y -loop 1 -i "${scene3Base}" -t 5 \\
  -vf "zoompan=z='min(zoom+0.0012,1.10)':d=150:x='iw/2-(iw/zoom/2)':y='ih/3-(ih/zoom/3)':s=1080x1920:fps=30" \\
  -c:v libx264 -pix_fmt yuv420p "${clip3}"
`);

// Clip 4: 11 to 15s (4 seconds, 120 frames @ 30fps) - Subtle zoom-out to closing call
execSync(`
ffmpeg -y -loop 1 -i "${scene4Base}" -t 4 \\
  -vf "zoompan=z='max(1.08-0.0018*in,1.0)':d=120:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1080x1920:fps=30" \\
  -c:v libx264 -pix_fmt yuv420p "${clip4}"
`);

// 3. Concatenate video clips into a single 15-second stream
console.log('🔗 Concatenating video clips...');
const concatList = path.join(TMP_DIR, 'concat.txt');
fs.writeFileSync(concatList, `file '${clip1}'\nfile '${clip2}'\nfile '${clip3}'\nfile '${clip4}'\n`);

const videoRaw = path.join(TMP_DIR, 'video_raw.mp4');
execSync(`ffmpeg -y -f concat -safe 0 -i "${concatList}" -c copy "${videoRaw}"`);

// 4. Synthesize professional technology-themed ambient soundtrack (15.0 seconds exactly)
console.log('🎵 Generating ambient tech soundtrack...');
const audioTrack = path.join(TMP_DIR, 'soundtrack.wav');
// Harmonic layered synthesizer chords with smooth 1.5s intro and outro fades
execSync(`
ffmpeg -y -f lavfi -i "
  anoisesrc=d=15:c=pink:r=44100:a=0.012 [noise];
  sine=frequency=110:duration=15 [bass];
  sine=frequency=220:duration=15 [mid];
  sine=frequency=440:duration=15 [high];
  sine=frequency=330:duration=15 [harmonic];
  [bass][mid][high][harmonic][noise] amix=inputs=5:weights='1.2 0.8 0.5 0.6 0.3',
  lowpass=f=800,
  volume=1.8,
  afade=t=in:ss=0:d=1.5,
  afade=t=out:st=13.5:d=1.5
" -c:a pcm_s16le "${audioTrack}"
`);

// 5. Mux Video + Audio into final compliant MP4
console.log('📦 Muxing final H.264 / AAC MP4 file...');
execSync(`
ffmpeg -y -i "${videoRaw}" -i "${audioTrack}" \\
  -c:v libx264 -preset fast -profile:v high -level 4.2 -pix_fmt yuv420p -b:v 4500k \\
  -c:a aac -b:a 192k -ar 44100 \\
  -movflags +faststart \\
  "${FINAL_MP4}"
`);

// Cleanup temporary files
fs.rmSync(TMP_DIR, { recursive: true, force: true });

const stats = fs.statSync(FINAL_MP4);
console.log(`🎉 SUCCESS! 15s MP4 video generated at: ${FINAL_MP4} (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);
