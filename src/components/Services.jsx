const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3L25 9V19L14 25L3 19V9L14 3Z" stroke="#00D4AA" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="14" cy="14" r="4" fill="#00D4AA" opacity="0.3"/>
        <circle cx="14" cy="14" r="2" fill="#00D4AA"/>
      </svg>
    ),
    title: 'AI Workflow Automation',
    description:
      'Custom n8n pipelines that connect your CRM, email, calendar, and databases — eliminating repetitive tasks permanently.',
    features: ['Lead nurturing', 'Data sync', 'Auto-reporting'],
    tag: 'Most popular',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="4" width="20" height="20" rx="4" stroke="#00D4AA" strokeWidth="1.5"/>
        <path d="M9 14h10M9 10h6M9 18h8" stroke="#00D4AA" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'AI Agents & Assistants',
    description:
      'Deploy intelligent agents that qualify leads, answer questions, book appointments — around the clock without human intervention.',
    features: ['Voice AI callers', 'Chat assistants', 'Email responders'],
    tag: 'High ROI',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4C8.48 4 4 8.48 4 14s4.48 10 10 10 10-4.48 10-10S19.52 4 14 4z" stroke="#00D4AA" strokeWidth="1.5"/>
        <path d="M14 8v6l4 4" stroke="#00D4AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Revenue Automation',
    description:
      'End-to-end sales pipelines — from cold outreach to proposal delivery — automated with Claude, GPT-4, and custom models.',
    features: ['Outreach sequences', 'Proposal generation', 'Follow-up flows'],
    tag: 'Enterprise',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-32 bg-black">
      {/* Subtle top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00D4AA]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="inline-block text-[#00D4AA] text-xs font-semibold tracking-widest uppercase mb-4">
            What We Build
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl text-white mb-5 leading-tight">
            Systems that run{' '}
            <span className="text-gradient-teal">themselves</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We don't just consult — we ship production-ready automations in weeks, not months.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl p-8 card-glass card-glass-hover group"
            >
              {/* Tag */}
              {service.tag && (
                <span className="absolute top-6 right-6 text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#00D4AA]/10 text-[#00D4AA] border border-[#00D4AA]/20">
                  {service.tag}
                </span>
              )}

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-[#00D4AA]/5 border border-[#00D4AA]/15 flex items-center justify-center mb-6 group-hover:border-[#00D4AA]/40 transition-colors">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="font-display font-bold text-xl text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Feature list */}
              <ul className="space-y-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-gray-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00D4AA] flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Bottom arrow link */}
              <div className="mt-8 flex items-center gap-2 text-[#00D4AA] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Learn more</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
