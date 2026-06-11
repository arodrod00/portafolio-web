import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Marquee from "@/components/Marquee"
import Services from "@/components/Services"
import StyleExamples from "@/components/StyleExamples"
import WhyWeb from "@/components/WhyWeb"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import { portfolio } from "@/data/portfolio"

export default function Page() {
  return (
    <>
      <Navbar name={portfolio.name} />
      <main>
        <Hero />
        <Marquee />
        <Services />
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
