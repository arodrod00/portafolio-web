import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { portfolio } from "@/data/portfolio"
import { LanguageProvider } from "@/contexts/LanguageContext"
import { HtmlLangSync } from "@/components/HtmlLangSync"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })

export const metadata: Metadata = {
  title: `${portfolio.name} — ${portfolio.role}`,
  description: portfolio.tagline,
  openGraph: {
    title: `${portfolio.name} — ${portfolio.role}`,
    description: portfolio.tagline,
    type: "website",
    locale: "es_US",
    siteName: portfolio.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolio.name} — ${portfolio.role}`,
    description: portfolio.tagline,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <LanguageProvider>
          <HtmlLangSync />
          {children}
        </LanguageProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
