'use client'

import { Header } from "./Header"
import { Hero } from "./sections/Hero"
import { Skills } from "./sections/Skills"
import { Terminal } from "./sections/Terminal"
import { Projects } from "./sections/Projects"
import { ContactForm } from "./sections/ContactForm"
import { Footer } from "./Footer"

export function PortfolioLanding() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100 max-w-screen-xl mx-auto">
      <Header />
      <main className="flex-1">
        <Hero />
        <Terminal />
        <Skills />
        <Projects />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
