import { internshipsList } from '../data/portfolioData'

function InternshipCard({ intern, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 150}
      className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-[1.02] transition-transform duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Top Row: Duration & Badge */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <span className="font-mono text-white/40 uppercase text-xs tracking-wider">
            {intern.duration}
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white text-[10px] font-semibold uppercase tracking-wider">
            Internship
          </span>
        </div>

        {/* Role & Organization */}
        <h3 className="text-2xl font-black text-white mt-2 mb-1 tracking-tight">
          {intern.role}
        </h3>
        <p className="uppercase text-red-200 text-xs font-bold tracking-wider mb-6">
          {intern.organization}
        </p>

        {/* Skills Gained List */}
        {intern.skills && intern.skills.length > 0 && (
          <div className="mb-6">
            <p className="text-xs font-bold text-white/80 uppercase tracking-wider mb-2">
              Skills Gained:
            </p>
            <ul className="space-y-1.5 text-xs text-red-50/80 list-disc list-inside">
              {intern.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Technologies Row */}
      {intern.tech && intern.tech.length > 0 && (
        <div className="border-t border-white/10 pt-4 mt-auto">
          <p className="text-xs font-bold text-white/80 uppercase tracking-wider mb-2">
            Technologies:
          </p>
          <div className="flex flex-wrap gap-2">
            {intern.tech.map((technology, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 font-mono text-[10px] text-white/70"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function Internships() {
  const hasInternships = internshipsList && internshipsList.length > 0

  return (
    <section
      id="experience"
      className="bg-[#ff2a2a] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Top Edge Inverted Torn-paper SVG Divider */}
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

      {/* Decorative Pulsing Black Star (Bottom-Left) */}
      <svg
        viewBox="0 0 24 24"
        className="absolute bottom-12 left-10 w-12 h-12 fill-black opacity-20 animate-pulse pointer-events-none"
        aria-hidden="true"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      {/* Header */}
      <div
        className="text-center max-w-3xl mx-auto mb-16 md:mb-20 relative z-10"
        data-aos="fade-up"
      >
        <h2 className="uppercase font-black text-black text-4xl md:text-5xl tracking-tight mb-4">
          Work Experience
        </h2>
        <p className="text-red-100 text-base md:text-lg leading-relaxed">
          Professional experience, industry internships, and practical exposure
          in software development.
        </p>
      </div>

      {/* Internships Grid or Seeking Opportunity Card */}
      <div className="max-w-7xl mx-auto relative z-10">
        {hasInternships ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {internshipsList.map((intern, index) => (
              <InternshipCard
                key={`${intern.organization}-${index}`}
                intern={intern}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div
            className="max-w-md mx-auto text-center bg-black/20 backdrop-blur-md rounded-3xl p-8 border border-white/10"
            data-aos="fade-up"
          >
            <p className="text-white font-bold text-lg mb-2">
              Ready for New Opportunities
            </p>
            <p className="text-red-100 text-sm leading-relaxed">
              Currently completing intensive placement training at TAP Academy
              and actively looking for entry-level and internship roles in
              Python full-stack development.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
