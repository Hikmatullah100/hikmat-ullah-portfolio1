import React from 'react';
import { portfolioData } from '../../data/portfolioData';

export const FloatingWhatsApp: React.FC = () => {
  const { owner } = portfolioData;

  if (!owner.whatsappUrl) return null;

  return (
    <aside aria-label="WhatsApp Support">
      <a
        href={owner.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#22bf5b] text-white flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_35px_rgba(37,211,102,0.65)] hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 cursor-pointer group"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        style={{
          // Extra safe area support for mobile notches/home bars
          marginBottom: 'env(safe-area-inset-bottom, 0px)',
          marginRight: 'env(safe-area-inset-right, 0px)',
        }}
      >
        {/* Subtle breathing ripple glow */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 fill-current relative z-10 transition-transform duration-300 group-hover:rotate-6"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.276-.1-.477-.15-.678.15-.201.3-.778.98-.954 1.18-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.501-1.786-1.677-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.201-.301.301-.502.101-.2.05-.376-.025-.526-.075-.15-.678-1.634-.929-2.237-.245-.588-.493-.508-.678-.517-.175-.009-.376-.01-.577-.01-.201 0-.527.075-.803.376s-1.054 1.03-1.054 2.511 1.079 2.912 1.23 3.113c.15.201 2.124 3.243 5.146 4.55.719.311 1.281.497 1.719.636.723.23 1.381.197 1.901.12.58-.087 1.78-.727 2.031-1.431.251-.703.251-1.305.176-1.431-.076-.126-.277-.201-.578-.351zM12.042 21.688c-1.737 0-3.435-.466-4.93-1.349l-.353-.21-3.669.962.979-3.578-.231-.368A9.704 9.704 0 0 1 2.378 12.04c0-5.342 4.346-9.689 9.691-9.689 2.587 0 5.019 1.008 6.848 2.839a9.634 9.634 0 0 1 2.837 6.85c0 5.343-4.346 9.689-9.712 9.689zm8.268-17.957A11.637 11.637 0 0 0 12.042.44C5.64.44.436 5.644.436 12.046c0 2.045.534 4.043 1.549 5.807L0 24l6.326-1.66a11.603 11.603 0 0 0 5.716 1.492h.005c6.401 0 11.605-5.205 11.605-11.607a11.54 11.54 0 0 0-3.342-8.198z" />
        </svg>
      </a>
    </aside>
  );
};
