import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="page-shell">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
