import About from "../components/About"
import Hero from "../components/Hero"

function Homepage() {
  return (

    <main className="relative  min-h-screen w-screen overflow-x-hidden">
        <Hero/>
        <About/>
    </main>
  )
}

export default Homepage