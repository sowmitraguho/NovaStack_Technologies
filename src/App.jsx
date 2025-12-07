import DesktopNav from "./components/DesktopNav/DesktopNav"
import MobileNav from "./components/MobileNav/MobileNav"
import HeroSection from "./components/HeroSection/HeroSection"
import ServicesSection from "./components/ServicesSection/ServicesSection"
function App() {
  

  return (
     <div className="bg-slate-950 min-h-screen">
      <DesktopNav />
      <MobileNav />
      <HeroSection />
      <ServicesSection />
    </div>
  )
}

export default App
