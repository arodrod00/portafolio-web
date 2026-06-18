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

// Code-split heavy below-fold components — JS chunk loads separately from initial bundle
const StyleExamples = dynamic(() => import("@/components/StyleExamples"), {
  loading: () => <div className="py-24" aria-hidden="true" />,
})
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
