import About from '../components/About'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Hero from '../components/Hero'
import Leadership from '../components/Leadership'
import Process from '../components/Process'
import Projects from '../components/Projects'
import Services from '../components/Services'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Services />
      <Process />
      <Leadership />
      <Contact />
    </>
  )
}
