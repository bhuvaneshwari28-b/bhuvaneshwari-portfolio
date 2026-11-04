import { leadershipList } from '../data/portfolioData'

function LeadershipItem({ item, index }) {
  const isEven = index % 2 === 0

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between w-full my-6">
      {/* Red Glowing Node on the Timeline */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#ff2a2a] border-4 border-[#0a0a0a] shadow-[0_0_15px_rgba(255,42,42,0.9)] z-10" />

      {/* Even Index Card (Left on md+) */}
      <div
        className={`w-full md:w-[45%] pl-12 md:pl-0 ${
          isEven ? 'md:text-right' : 'md:order-last md:text-left'
        }`}
        data-aos={isEven ? 'fade-right' : 'fade-left'}
      >
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-red-500/30 transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,42,42,0.15)] group">
          {item.badge && (
            <div
              className={`mb-3 flex ${
                isEven ? 'md:justify-end' : 'md:justify-start'
              }`}
            >
              <span className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[#ff2a2a] text-xs font-mono uppercase tracking-widest inline-block">
                {item.badge}
              </span>
            </div>
          )}
          <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-[#ff2a2a] transition-colors mb-2 tracking-tight">
            {item.title}
          </h3>
          <p className="font-mono uppercase text-red-400 text-xs tracking-wider font-semibold mb-3">
            {item.role}
          </p>
          <p className="text-white/60 text-sm leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>

      {/* Spacer for the other side on desktop */}
      <div className="hidden md:block md:w-[45%]" />
    </div>
  )
}

export default function Leadership() {
  const hasLeadership = leadershipList && leadershipList.length > 0

  return (
    <section
      id="activities"
      className="bg-[#0a0a0a] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Torn-paper SVG Divider at the top (flows from the red section) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          className="w-full h-12 md:h-20 fill-[#ff2a2a] rotate-180 -translate-y-[1px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      {/* Header */}
      <div
        className="text-center max-w-3xl mx-auto mb-16 md:mb-24 relative z-10"
        data-aos="fade-up"
      >
        <span className="px-4 py-1.5 rounded-full bg-red-600/10 border border-red-500/20 text-[#ff2a2a] text-xs font-mono uppercase tracking-widest inline-block mb-4">
          Activities
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-4">
          Leadership & Engagement
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          Community participation, extracurricular leadership, collaborative
          workshops, and team initiatives.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="max-w-5xl mx-auto relative z-10">
        {hasLeadership ? (
          <div className="relative">
            {/* 2px Gradient Center / Left Line */}
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#ff2a2a] via-red-500/50 to-white/10 pointer-events-none" />

            {/* Timeline Items */}
            <div className="flex flex-col space-y-6">
              {leadershipList.map((item, index) => (
                <LeadershipItem
                  key={`${item.title}-${index}`}
                  item={item}
                  index={index}
                />
              ))}
            </div>
          </div>
        ) : (
          <div
            className="max-w-md mx-auto text-center bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
            data-aos="fade-up"
          >
            <p className="text-white font-bold text-lg mb-2">
              Community & Collaboration
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              Actively participating in technical seminars, coding challenges,
              and collaborative peer-learning sessions at TAP Academy.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
