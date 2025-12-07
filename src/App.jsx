import DesktopNav from "./components/DesktopNav/DesktopNav"
import MobileNav from "./components/MobileNav/MobileNav"
import HeroSection from "./components/HeroSection/HeroSection"
import ServicesSection from "./components/ServicesSection/ServicesSection"
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection"
import CTASection from "./components/CTASection/CTASection"
import FooterSection from "./components/FooterSection/FooterSection"
import { RouterProvider } from "react-router";
import routes from "./Router/PubilcRoute";
function App() {
  
  return (
     <div className="bg-slate-950 min-h-screen">
      <RouterProvider router={routes} />
      
    </div>
  )
}

export default App
