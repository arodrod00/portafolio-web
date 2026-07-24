import dynamic from "next/dynamic"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import { portfolio } from "@/data/portfolio"

// Below-fold: code-split so the initial JS bundle only covers the hero viewport
const Marquee      = dynamic(() => import("@/components/Marquee"))
const Services     = dynamic(() => import("@/components/Services"))
const Projects     = dynamic(() => import("@/components/Projects"))
const AboutRelift  = dynamic(() => import("@/components/AboutRelift"))
const Towme        = dynamic(() => import("@/components/Towme"))
const StyleExamples = dynamic(() => import("@/components/StyleExamples"))
const WhyWeb       = dynamic(() => import("@/components/WhyWeb"))
const Skills       = dynamic(() => import("@/components/Skills"))
const Contact      = dynamic(() => import("@/components/Contact"))
const Footer       = dynamic(() => import("@/components/Footer"))
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"))

export default function Page() {
  return (
    <>
      <Navbar name={portfolio.name} />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Projects />
        <AboutRelift />
        <Towme />
        <StyleExamples />
        <WhyWeb />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
