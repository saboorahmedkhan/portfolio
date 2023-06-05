import Image from 'next/image'
import Hero from './components/hero'
import Contact from './components/contact'
import Projects from './components/projects'
import About from './components/about'
import Skills from './components/skills'



export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      
      
    </div>
  )
}
