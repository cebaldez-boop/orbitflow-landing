import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import CaseStudy from './components/CaseStudy'
import CTAFooter from './components/CTAFooter'

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <CaseStudy />
      <CTAFooter />
    </div>
  )
}

export default App
