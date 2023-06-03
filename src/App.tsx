import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import SocialLinks from "./components/SocialLinks"

const App = () => {
  return (
    <main className=" bg-secondary-light">
      <Header />
      <Hero />
      <Projects />
      <SocialLinks />
    </main>
  )
}

export default App