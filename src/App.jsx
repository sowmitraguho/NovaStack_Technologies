import DesktopNav from "./components/DesktopNav/DesktopNav"
import MobileNav from "./components/MobileNav/MobileNav"
import HeroSection from "./components/HeroSection/HeroSection"
import ServicesSection from "./components/ServicesSection/ServicesSection"
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection"
import CTASection from "./components/CTASection/CTASection"
import FooterSection from "./components/FooterSection/FooterSection"

function App() {
  
  return (
     <div className="bg-slate-950 min-h-screen">
      <DesktopNav />
      <MobileNav />
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
      <FooterSection />
    </div>
  )
}

export default App
