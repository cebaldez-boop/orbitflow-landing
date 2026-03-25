export default function CaseStudy() {
  const metrics = [
    { value: '73%', label: 'Reduction in manual tasks' },
    { value: '3.2x', label: 'More leads per month' },
    { value: '18 days', label: 'Time to full deployment' },
    { value: '$84k', label: 'Revenue unlocked in Q1' },
  ]

  return (
    <section id="results" className="relative py-32 bg-black">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#00D4AA] opacity-[0.025] blur-[160px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent">
          {/* Top gradient bar */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#00D4AA]/40 to-transparent" />

          <div className="p-10 md:p-16">
            <div className="flex flex-col lg:flex-row gap-16 items-center">

              {/* Left: Story */}
              <div className="lg:w-1/2">
                <span className="inline-block text-[#00D4AA] text-xs font-semibold tracking-widest uppercase mb-4">
                  Case Study
                </span>
                <h2 className="font-display font-black text-4xl md:text-5xl text-white mb-6 leading-tight">
                  From 12 hours/week<br />
                  to{' '}
                  <span className="text-gradient-teal">fully automated</span>
                </h2>
                <p className="text-gray-400 text-base leading-relaxed mb-6">
                  A B2B SaaS startup was spending 12+ hours per week manually qualifying leads,
                  sending follow-ups, and updating their CRM. They came to us burned out.
                </p>
                <p className="text-gray-400 text-base leading-relaxed mb-8">
                  In 18 days, we deployed a full n8n automation stack: AI-powered lead scoring,
                  personalized email sequences, and a Slack-integrated reporting dashboard.
                  Their team now reviews results — they don't produce them.
                </p>

                {/* Quote */}
                <div className="relative pl-5 border-l-2 border-[#00D4AA]/40">
                  <blockquote className="text-white/80 text-base italic leading-relaxed">
                    "Orbitflow didn't just automate our workflow — they changed how we think about growth."
                  </blockquote>
                  <div className="flex items-center gap-3 mt-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00D4AA]/30 to-[#00D4AA]/10 flex items-center justify-center text-[#00D4AA] text-xs font-bold">
                      MK
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">Marco K.</p>
                      <p className="text-gray-500 text-xs">CEO, Velocitize SaaS</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Metrics */}
              <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                {metrics.map((m, i) => (
                  <div
                    key={i}
                    className="rounded-2xl p-6 bg-[#00D4AA]/[0.04] border border-[#00D4AA]/10 hover:border-[#00D4AA]/30 transition-all duration-300 hover:bg-[#00D4AA]/[0.07]"
                  >
                    <p className="font-display font-black text-4xl text-[#00D4AA] mb-2">
                      {m.value}
                    </p>
                    <p className="text-gray-400 text-sm">{m.label}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
