import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import About from './Components/About'
import Services from './Components/Services'
import Gallary from './Components/Gallary'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {

  return (
    <>
    <div className="font-sans">
      <Header />
      <Hero />
      <About />
      <Services />
      <Gallary />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
    </>
  )
}

export default App
