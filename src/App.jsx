import About from './components/About'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Internships from './components/Internships'
import Leadership from './components/Leadership'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import SoftSkills from './components/SoftSkills'
import TechnicalSkills from './components/TechnicalSkills'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-500 selection:text-white flex flex-col justify-between">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <TechnicalSkills />
        <Projects />
        <Internships />
        <Leadership />
        <SoftSkills />
      </main>
      <Footer />
    </div>
  )
}
