import { Suspense, lazy, useState } from 'react'

// Lazy-load Spline to prevent blocking initial page render
const Spline = lazy(() => import('@splinetool/react-spline'))

function SplineLoader() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      {/* Loading placeholder matches orb aesthetic */}
      <div className="relative flex items-center justify-center">
        <div className="absolute w-48 h-48 rounded-full border border-[#00D4AA]/20 animate-pulse" />
        <div className="absolute w-32 h-32 rounded-full border border-[#00D4AA]/10 animate-pulse" style={{ animationDelay: '0.3s' }} />
        <div className="w-16 h-16 rounded-full bg-[#00D4AA]/10 blur-xl animate-pulse" />
      </div>
    </div>
  )
}

export default function Hero() {
  const [splineLoaded, setSplineLoaded] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden pt-20">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-100" />

      {/* Radial gradient overlays */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-[#00D4AA] opacity-5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#00D4AA] opacity-[0.03] blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center min-h-[80vh] gap-8">

          {/* LEFT: Text content — 55% */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center py-12 lg:py-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00D4AA]/30 bg-[#00D4AA]/5 w-fit mb-8">
              <span className="w-2 h-2 rounded-full bg-[#00D4AA] animate-pulse" />
              <span className="text-[#00D4AA] text-xs font-medium tracking-wider uppercase">
                AI Automation Agency
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-black text-5xl md:text-6xl xl:text-7xl leading-[1.05] tracking-tight mb-6">
              <span className="text-white">Automation That</span>
              <br />
              <span className="text-white">Works While</span>
              <br />
              <span className="text-gradient-teal">You Sleep.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              <span className="text-white font-medium">n8n + AI agents + zero manual work.</span>
              {' '}We build automation pipelines that replace repetitive tasks,
              generate leads 24/7, and scale your revenue — without adding headcount.
            </p>

            {/* CTA Row */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                id="hero-cta"
                className="group relative px-8 py-4 rounded-xl bg-[#00D4AA] text-black font-bold text-base hover:bg-[#00A888] transition-all duration-300 glow-teal text-center"
              >
                <span className="flex items-center justify-center gap-2">
                  Book Free Consultation
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: '16px', height: '16px', flexShrink: 0 }}
                  >
                    <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
              <a
                href="#services"
                className="px-8 py-4 rounded-xl border border-white/10 text-white text-base font-medium hover:border-[#00D4AA]/50 hover:bg-[#00D4AA]/5 transition-all duration-300 text-center"
              >
                See What We Build
              </a>
            </div>

            {/* Social proof strip */}
            <div className="flex items-center gap-6 mt-12 pt-12 border-t border-white/5">
              {[
                { value: '47+', label: 'Automations Deployed' },
                { value: '10x', label: 'Avg ROI in 90 Days' },
                { value: '24/7', label: 'Always Running' },
              ].map((stat) => (
                <div key={stat.value} className="text-center">
                  <p className="font-display font-bold text-2xl text-[#00D4AA]">{stat.value}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: 3D Spline — 45% | Hidden on mobile, shown on desktop */}
          <div
            id="hero-3d-container"
            className="w-full lg:w-[45%] h-[400px] lg:h-[600px] relative overflow-hidden"
          >
            {/* ── MOBILE FALLBACK: teal gradient background (only shows below lg) ── */}
            <div
              className="lg:hidden absolute inset-0 rounded-2xl overflow-hidden"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00D4AA]/20 via-[#00D4AA]/5 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              {/* decorative rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-[#00D4AA]/20 animate-pulse" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-[#00D4AA]/30 animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-[#00D4AA]/20 blur-xl" />
            </div>

            {/* ── DESKTOP: Spline 3D (hidden on mobile via hidden lg:block) ── */}
            <div className="hidden lg:block absolute inset-0 overflow-hidden">
              {/*
                The Spline scene contains text on its left portion and the sphere on
                its right. We render the canvas at 170% width and push it left by
                ~40% so only the sphere region is visible inside the clipped container.
              */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  overflow: 'hidden',
                }}
              >
                <Suspense fallback={<SplineLoader />}>
                  <Spline
                    scene="https://prod.spline.design/t8yjDNYpFn6I1pg7/scene.splinecode"
                    onLoad={() => setSplineLoaded(true)}
                    style={{
                      width: '220%',
                      height: '110%',
                      marginLeft: '-120%',
                      marginTop: '-5%',
                    }}
                  />
                </Suspense>
              </div>

              {/* Loading overlay — dissolves once Spline loads */}
              {!splineLoaded && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <SplineLoader />
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs text-gray-500 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#00D4AA] to-transparent" />
      </div>
    </section>
  )
}
