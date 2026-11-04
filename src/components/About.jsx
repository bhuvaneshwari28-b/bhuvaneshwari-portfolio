import { motion } from 'framer-motion'
import { useState } from 'react'
import QRCode from 'react-qr-code'
import stackImage from '../assets/about/profile.png'
import { aboutContent, personalInfo, socialLinks } from '../data/portfolioData'

export default function About() {
  const [flipped, setFlipped] = useState(false)

  return (
    <section
      id="about"
      className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Decorative 4-point Star SVGs */}
      <svg
        viewBox="0 0 24 24"
        className="absolute top-10 right-10 w-8 h-8 fill-black opacity-30 animate-pulse pointer-events-none"
        aria-hidden="true"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>
      <svg
        viewBox="0 0 24 24"
        className="absolute bottom-32 left-10 w-10 h-10 fill-black opacity-30 animate-pulse pointer-events-none"
        style={{ animationDelay: '1s' }}
        aria-hidden="true"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      {/* Main Content Layout */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        {/* Left: ID Badge on a Lanyard */}
        <div className="md:w-[350px] shrink-0 w-full flex flex-col items-center">
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              type: 'spring',
              stiffness: 110,
              damping: 9,
              mass: 1.1,
            }}
            className="relative pt-8 w-full flex flex-col items-center"
          >
            {/* Black lanyard string */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-3 h-40 bg-black pointer-events-none" />

            {/* Grey clip rectangle */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-5 bg-gray-400 rounded-sm z-20 shadow-md border border-gray-500 pointer-events-none" />

            {/* Flip Card Wrapper Button */}
            <button
              type="button"
              aria-label="Flip ID card"
              onClick={() => setFlipped((prev) => !prev)}
              className="relative w-full max-w-[280px] -rotate-3 hover:rotate-0 transition-transform duration-500 [perspective:1200px] focus:outline-none cursor-pointer block text-left"
            >
              <div
                className="relative w-full aspect-[3/4] transition-transform duration-700 [transform-style:preserve-3d]"
                style={{
                  transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                {/* FRONT Face */}
                <div className="absolute inset-0 [backface-visibility:hidden] bg-gray-900 rounded-2xl p-3 shadow-2xl flex flex-col justify-between">
                  {/* Slot cutout */}
                  <div className="w-12 h-2.5 bg-black rounded-full mx-auto mb-2 border border-gray-800 shrink-0" />
                  {/* Photo */}
                  <img
                    src={stackImage}
                    alt={personalInfo.name}
                    className="rounded-xl object-cover object-top w-full h-[calc(100%-18px)] shadow-inner"
                  />
                </div>

                {/* BACK Face (Visiting Card) */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl bg-gradient-to-br from-[#141414] to-[#1f1f1f] shadow-2xl p-5 text-white flex flex-col justify-between overflow-hidden text-left border border-white/10">
                  {/* 6px Red Accent Bar */}
                  <div className="absolute top-0 left-0 w-full h-[6px] bg-[#ff2a2a]" />

                  {/* Identity Header */}
                  <div className="mt-1">
                    <div className="text-xl font-black tracking-tight text-white">
                      {personalInfo.brandName}
                      <span className="text-[#ff2a2a]">.</span>
                    </div>
                    <div className="text-[11px] uppercase tracking-widest text-red-400 font-semibold mt-0.5">
                      {personalInfo.title}
                    </div>
                    <div className="border-t border-white/10 my-2.5" />

                    {/* Contact Rows */}
                    <div className="space-y-2 text-xs text-white/85">
                      {personalInfo.emails.primary && (
                        <a
                          href={`mailto:${personalInfo.emails.primary}`}
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center space-x-2 hover:text-white transition-colors truncate"
                        >
                          <svg
                            className="w-4 h-4 text-red-400 shrink-0 fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                          </svg>
                          <span className="truncate">
                            {personalInfo.emails.primary}
                          </span>
                        </a>
                      )}

                      {personalInfo.phone && (
                        <a
                          href={`tel:${personalInfo.phone}`}
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center space-x-2 hover:text-white transition-colors"
                        >
                          <svg
                            className="w-4 h-4 text-red-400 shrink-0 fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                          </svg>
                          <span>{personalInfo.phone}</span>
                        </a>
                      )}

                      {personalInfo.location && (
                        <div className="flex items-center space-x-2">
                          <svg
                            className="w-4 h-4 text-red-400 shrink-0 fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                          </svg>
                          <span className="truncate">
                            {personalInfo.location}
                          </span>
                        </div>
                      )}

                      <div className="flex items-center space-x-4 pt-1">
                        {socialLinks.linkedin && (
                          <a
                            href={socialLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center space-x-1.5 hover:text-white transition-colors"
                          >
                            <svg
                              className="w-4 h-4 text-red-400 shrink-0 fill-current"
                              viewBox="0 0 24 24"
                            >
                              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.54a1.63 1.63 0 1 0 0 3.25 1.63 1.63 0 0 0 0-3.25z" />
                            </svg>
                            <span className="text-[11px] font-semibold underline">
                              LinkedIn
                            </span>
                          </a>
                        )}

                        {socialLinks.github && (
                          <a
                            href={socialLinks.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center space-x-1.5 hover:text-white transition-colors"
                          >
                            <svg
                              className="w-4 h-4 text-red-400 shrink-0 fill-current"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                              />
                            </svg>
                            <span className="text-[11px] font-semibold underline">
                              GitHub
                            </span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* QR Code Block */}
                  <div className="flex items-center space-x-3 pt-2 border-t border-white/10">
                    <div className="bg-white rounded-lg p-1.5 shrink-0 shadow">
                      <QRCode
                        value={
                          socialLinks.linkedin ||
                          `mailto:${personalInfo.emails.primary}`
                        }
                        size={76}
                      />
                    </div>
                    <div className="text-[10px] text-white/60 leading-tight">
                      <p className="font-semibold text-white/80">
                        Scan to connect
                      </p>
                      <p className="mt-0.5">Quick access to LinkedIn</p>
                    </div>
                  </div>
                </div>
              </div>
            </button>

            {/* Tap to flip hint */}
            <p className="text-xs font-bold text-black/60 mt-4 text-center select-none">
              Tap the card to flip ↻
            </p>
          </motion.div>
        </div>

        {/* Right: Bio & Content */}
        <div className="flex-1" data-aos="fade-left">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6 tracking-tight">
            {aboutContent.heading}
          </h2>
          <div
            className="text-lg font-bold leading-relaxed text-red-50 space-y-4"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />
        </div>
      </div>

      {/* Torn-paper SVG Divider */}
      <svg
        className="absolute bottom-0 left-0 w-full h-12 md:h-20 fill-white pointer-events-none z-10"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
      </svg>
    </section>
  )
}
