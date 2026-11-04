import About from './components/About'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import TechnicalSkills from './components/TechnicalSkills'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-500 selection:text-white flex flex-col justify-between">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <TechnicalSkills />
      </main>
      <Footer />
    </div>
  )
}
