export default function CTAFooter() {
  return (
    <footer id="contact" className="relative bg-black pt-24 pb-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#00D4AA] opacity-[0.04] blur-[120px] rounded-full pointer-events-none" />

      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00D4AA]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Main CTA Card */}
        <div className="relative rounded-3xl overflow-hidden mb-20">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00D4AA]/10 via-transparent to-transparent" />
          <div className="absolute inset-0 border border-[#00D4AA]/15 rounded-3xl" />

          <div className="relative z-10 text-center py-20 px-6">
            <span className="inline-block text-[#00D4AA] text-xs font-semibold tracking-widest uppercase mb-6">
              Ready to Automate?
            </span>
            <h2 className="font-display font-black text-4xl md:text-6xl text-white mb-6 leading-tight max-w-3xl mx-auto">
              Let machines do the{' '}
              <span className="text-gradient-teal">heavy lifting</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
              Book a free 30-minute consultation. We'll map out your automation
              opportunities and show you the exact ROI to expect.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://cal.com"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-cta-btn"
                className="group px-10 py-4 rounded-xl bg-[#00D4AA] text-black font-bold text-base hover:bg-[#00A888] transition-all duration-300 glow-teal flex items-center gap-2 justify-center"
              >
                Book Free Consultation
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="mailto:hello@orbitflow.ai"
                className="px-10 py-4 rounded-xl border border-white/10 text-white font-medium text-base hover:border-[#00D4AA]/40 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hello@orbitflow.ai
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex items-center justify-center gap-6 mt-12 text-gray-600 text-xs">
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-[#00D4AA]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>
                No commitment required
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-[#00D4AA]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>
                Free 30-min call
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-[#00D4AA]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>
                Response within 24h
              </span>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <div className="w-7 h-7 rounded-lg bg-[#00D4AA] flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
                <path d="M9 2L15 6V12L9 16L3 12V6L9 2Z" fill="black" />
              </svg>
            </div>
            <span className="font-display font-700 text-base text-white">
              Orbit<span className="text-[#00D4AA]">flow</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-xs text-gray-600">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Upwork</a>
          </div>

          <p className="text-gray-700 text-xs mt-4 md:mt-0">
            © 2025 Orbitflow AI. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}
