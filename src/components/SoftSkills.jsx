import { softSkillsList } from '../data/portfolioData'

function SoftSkillCard({ skill, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="bg-[#f8f8f8] border border-gray-200 rounded-3xl p-6 min-h-[220px] text-center flex flex-col items-center justify-center group hover:scale-[1.03] hover:border-red-300 hover:shadow-[0_10px_30px_rgba(255,42,42,0.12)] transition-all duration-300"
    >
      {/* Emoji in Rounded Square */}
      <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-2xl mb-4 group-hover:scale-110 group-hover:bg-red-50 group-hover:border-red-200 transition-all duration-300 select-none">
        <span>{skill.icon}</span>
      </div>

      {/* Uppercase Name */}
      <h3 className="text-base font-black uppercase text-gray-900 mb-2 tracking-tight group-hover:text-[#ff2a2a] transition-colors">
        {skill.name}
      </h3>

      {/* Description */}
      <p className="text-xs text-gray-500 leading-relaxed">{skill.desc}</p>
    </div>
  )
}

export default function SoftSkills() {
  return (
    <section
      id="strengths"
      className="bg-white pt-24 pb-32 px-6 md:px-12 relative overflow-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:60px_60px]"
    >
      {/* Torn-paper SVG Divider at the top (flows from previous dark section) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          className="w-full h-12 md:h-20 fill-[#0a0a0a] rotate-180 -translate-y-[1px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      {/* Header */}
      <div
        className="text-center max-w-3xl mx-auto mb-16 md:mb-20 relative z-10"
        data-aos="fade-up"
      >
        <span className="px-4 py-1.5 rounded-full bg-red-100 border border-red-200 text-[#ff2a2a] text-xs font-mono uppercase tracking-widest inline-block mb-4">
          Core Competencies
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 uppercase tracking-tight mb-4">
          Professional Soft Skills
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          Essential interpersonal strengths, communication habits, and work
          ethics that drive effective team collaboration.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {softSkillsList.map((skill, index) => (
          <SoftSkillCard
            key={skill.name}
            skill={skill}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}
