"use client"

import { useEffect } from "react"
import Hero from "@/components/hero"
import Features from "@/components/features"
import About from "@/components/about"
import Services from "@/components/services"
import Testimonials from "@/components/testimonials"
import Cta from "@/components/cta"
import Image from "next/image"

export default function Home() {
  // Handle hash links on page load
  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      // Get the hash without the '#'
      const id = window.location.hash.substring(1)
      const element = document.getElementById(id)

      if (element) {
        // Wait a bit for the page to fully load
        setTimeout(() => {
          // Get navbar height
          const navbar = document.querySelector("header")
          const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 0

          // Calculate position
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight - 20

          // Smooth scroll to element
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }, 100)
      }
    }
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      {/* Global background pattern */}
      <div className="fixed inset-0 z-[-1] opacity-5 pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1920&q=80"
          alt="Background pattern"
          fill
          className="object-cover"
          priority
        />
      </div>
      <Hero />
      <Features />
      <About />
      <Services />
      <Testimonials />
      <Cta />
    </main>
  )
}

