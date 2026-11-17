import React from 'react';
import { X, FileText, Download, Mail, ExternalLink, CheckCircle } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

interface CvDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const CvDownloadModal: React.FC<CvDownloadModalProps> = ({ isOpen, onClose, onOpenContact }) => {
  if (!isOpen) return null;

  const { owner } = portfolioData;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#07152B] border border-[#12DDF5]/30 rounded-3xl p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#0B1C35] text-[#A8B6CA] hover:text-white hover:border-[#12DDF5]/40 border border-transparent transition-all cursor-pointer"
          aria-label="Close CV Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3.5 mb-5">
          <div className="w-11 h-11 rounded-2xl bg-[#12DDF5]/15 border border-[#12DDF5]/35 flex items-center justify-center text-[#12DDF5]">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight">Curriculum Vitae</h3>
            <p className="text-xs text-[#12DDF5] font-mono">{owner.name} • {owner.title}</p>
          </div>
        </div>

        {/* Modal Body */}
        {owner.hasCvFile && owner.cvPath ? (
          <div className="space-y-4">
            <p className="text-sm text-[#A8B6CA] leading-relaxed">
              Download the official curriculum vitae of {owner.name} featuring verified project highlights, technical skill proficiencies, and direct contact details.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={owner.cvPath}
                download="Hikmat-Ullah-Web-Developer-CV.pdf"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#12DDF5] to-[#278BFF] text-[#030B1B] font-bold text-sm shadow-md hover:shadow-[0_0_20px_rgba(18,221,245,0.4)] transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF Resume</span>
              </a>
              <a
                href={owner.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0B1C35] hover:bg-[#030B1B] border border-[#12DDF5]/25 hover:border-[#12DDF5] text-white font-semibold text-xs transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#12DDF5]" />
                <span>View in Tab</span>
              </a>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-[#0B1C35]/60 border border-[#12DDF5]/20 space-y-2">
              <div className="text-xs font-semibold text-[#12DDF5] flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Direct CV Request</span>
              </div>
              <p className="text-xs sm:text-sm text-[#A8B6CA] leading-relaxed">
                Hikmat Ullah's verified CV is provided directly for specific job openings, client contracts, and engineering roles to ensure you receive the most up-to-date document.
              </p>
            </div>

            <div className="space-y-2 text-xs text-[#A8B6CA]">
              <p>You can request an updated copy instantly via email or our contact form:</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#12DDF5] to-[#278BFF] text-[#030B1B] font-bold text-xs shadow-md cursor-pointer hover:opacity-95"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send Request Message</span>
              </button>

              <a
                href={`mailto:${owner.email}?subject=CV%20Request%20-%20Hikmat%20Ullah`}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#0B1C35] hover:bg-[#030B1B] border border-[#12DDF5]/25 text-white text-xs font-semibold transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#12DDF5]" />
                <span>Direct Email</span>
              </a>
            </div>

            <div className="text-[11px] text-[#A8B6CA]/60 pt-3 border-t border-[#12DDF5]/10 text-center font-mono">
              Note: To link a static PDF, place it in /public/documents/ and set cvPath in src/data/portfolioData.ts
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
