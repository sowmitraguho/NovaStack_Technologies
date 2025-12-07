import DesktopNav from "./components/DesktopNav/DesktopNav"
import MobileNav from "./components/MobileNav/MobileNav"


function App() {
  

  return (
     <div className="bg-slate-950 min-h-screen">
      <DesktopNav />
      <MobileNav />
      
      {/* Demo Content */}
      <div className="px-4 py-20 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
          Welcome to NovaStack Technologies
        </h1>
        <p className="text-slate-400 text-lg">
          Scroll to see the responsive navbar in action. Try resizing your window to see both desktop and mobile versions.
        </p>
      </div>
    </div>
  )
}

export default App
