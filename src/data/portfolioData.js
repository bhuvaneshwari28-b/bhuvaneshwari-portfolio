// ============================================================
// portfolioData.js
// This file controls ALL the text and links on the website.
// ============================================================

export const personalInfo = {
  name: "bhuvaneshwari",
  firstName: "bhuvaneshwari",
  brandName: "bhuvaneshwari", // shown in the preloader, navbar and footer
  title: "Python Full Stack Developer",
  location: "Bellary, India",
  phone: "8867210100",
  emails: {
    primary: "bhuvaneshwari43433@gmail.com",
    secondary: "",
  },
  summary: "I'm a BCA graduate currently learning Python Full Stack Development at TAP Academy. I enjoy learning new technologies and building creative web applications.",
  resumeUrl: "/resume.pdf", // put the PDF inside /public
};

// TAP Academy — the academy you trained with. Used in the footer credit.
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

export const socialLinks = {
  github: "https://github.com/bhuvaneshwari28-b",
  linkedin: "https://linkedin.com/in/bhuvaneshwari-b-a030543a1",
  instagram: "",
};

export const heroContent = {
  greeting: "Hi, I'm bhuvaneshwari",
  titleHighlight: "Python Full Stack Developer",
  subtitle: "BCA graduate and aspiring developer passionate about building scalable, responsive web applications with Python, React, and MySQL.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:bhuvaneshwari43433@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  // HTML is allowed here (it is rendered with dangerouslySetInnerHTML)
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">bhuvaneshwari</span>, a BCA graduate passionate about web technologies and software development, currently sharpening my skills through the placement training program at TAP Academy. I enjoy improving my programming capabilities, learning modern stacks, and building practical web applications. My goal is to start my career in the IT industry and grow as a software developer.`,
  techStack: ["Python", "JavaScript", "React", "HTML & CSS", "MySQL"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world products",
  description: "A structured approach to transforming requirements into functional and reliable applications.",
  cards: [
    { number: "01", title: "Research", text: "Analyzing user requirements, understanding project goals, and researching suitable tools and technologies." },
    { number: "02", title: "Design", text: "Planning database schemas, UI layouts, and application flow for a seamless user experience." },
    { number: "03", title: "Develop", text: "Writing clean, modular code with Python, React, and MySQL, integrating backend logic with interactive frontends." },
    { number: "04", title: "Deploy", text: "Testing functionality, optimizing performance, and deploying responsive web applications." },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming",
      skills: [{ name: "Python" }, { name: "JavaScript" }],
    },
    {
      title: "Web Development",
      skills: [{ name: "HTML & CSS" }, { name: "React" }],
    },
    {
      title: "Databases",
      skills: [{ name: "MySQL" }],
    },
    {
      title: "Tools",
      skills: [{ name: "Git & GitHub" }, { name: "VS Code" }],
    },
  ],
};

export const leadershipList = [];

export const internshipsList = [];

export const softSkillsList = [
  { name: "Team Collaboration", icon: "🤝", desc: "Collaborating effectively with peers to achieve shared development goals." },
  { name: "Communication", icon: "💬", desc: "Expressing ideas clearly and actively listening to ensure smooth project execution." },
  { name: "Adaptability", icon: "🔄", desc: "Quickly learning new technologies, frameworks, and methodologies as project needs evolve." },
  { name: "Time Management", icon: "⏱️", desc: "Organizing tasks and prioritizing deliverables to meet deadlines consistently." },
];

export const projects = [
  {
    id: "online-e-voting-system",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "Online E-Voting System",
    description: "A web-based application developed to make the voting process simple and convenient with live voting results and automated vote tallying.",
    techTags: ["PHP", "JavaScript", "HTML & CSS", "MySQL"],
    links: { github: "https://github.com/bhuvaneshwari28-b", demo: "" },
    isFlagship: true,
  },
];

// Used only by the optional Certificates component
export const certificates = {
  featured: [],
  viewAllUrl: "https://linkedin.com/in/bhuvaneshwari-b-a030543a1",
};

export const education = {
  degree: "BCA",
  institution: "Smt Gaali Rukminamma changaready Govt commerce and management degree college,ballary",
  cgpa: "2025 - 2026",
  graduation: "2026",
  twelfth: "",
  tenth: "",
};

export const footerContent = {
  taglines: ["Python Full Stack Developer", "Python · React · MySQL", "Building practical web applications"],
  credential: "BCA",
  copyright: `© ${new Date().getFullYear()} bhuvaneshwari | Built with React`,
};

// EmailJS — read from .env.local (variables must start with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
