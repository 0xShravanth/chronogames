import About from "../components/About"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Features from "../components/Features";
import Story from "../components/Story";

function Homepage() {
  return (

    <main className="relative  min-h-screen w-screen overflow-x-hidden bg-zinc-600">
        <Navbar/>
        <Hero/>
        <About/>
        <Features/>
        <Story/>
    </main>
  )
}

export default Homepage