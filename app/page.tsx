import dynamic from "next/dynamic"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Marquee from "@/components/Marquee"
import Services from "@/components/Services"
import WhyWeb from "@/components/WhyWeb"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import { portfolio } from "@/data/portfolio"

// Code-split below-fold components — JS chunk loads separately, SSR keeps HTML intact
const StyleExamples = dynamic(() => import("@/components/StyleExamples"))
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"))

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
