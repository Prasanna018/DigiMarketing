"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  // Smooth scroll function for hero CTA buttons
  const handleScroll = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, targetId: string) => {
    e.preventDefault()

    const element = document.getElementById(targetId)

    if (element) {
      // Get navbar height to offset scroll position
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
    }
  }

  return (
    <section className="w-full min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background gradient with image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1920&q=80"
          alt="Background"
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/50" />
      </div>

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-r from-primary/30 to-purple-500/30 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute -bottom-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-r from-blue-500/30 to-primary/30 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-block">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
            >
              Digital Marketing Solutions
            </motion.span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Grow Your Business With{" "}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Digital Marketing
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-foreground/70 text-lg md:text-xl max-w-lg"
          >
            Boost your online presence and drive more conversions with our data-driven digital marketing strategies
            tailored for your business.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <Button size="lg" className="font-medium" onClick={(e) => handleScroll(e, "contact")}>
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="font-medium" onClick={(e) => handleScroll(e, "features")}>
              Learn More
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex items-center gap-4 mt-6"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=40&width=40`}
                    alt={`User ${i}`}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-sm text-foreground/70">
              <span className="font-semibold text-foreground">500+</span> happy clients
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative"
        >
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
              alt="Digital Marketing"
              width={600}
              height={600}
              className="object-contain"
              priority
            />
          </div>

          {/* Floating elements */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: [0, -10, 0], opacity: 1 }}
            transition={{
              y: { repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" },
              opacity: { duration: 0.5, delay: 1 },
            }}
            className="absolute top-10 -left-10 bg-background rounded-lg shadow-lg p-4 z-10"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold">+</span>
              </div>
              <div>
                <p className="font-semibold">Conversion Rate</p>
                <p className="text-green-500 font-bold">+150%</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: [0, 10, 0], opacity: 1 }}
            transition={{
              y: { repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut" },
              opacity: { duration: 0.5, delay: 1.2 },
            }}
            className="absolute bottom-10 -right-10 bg-background rounded-lg shadow-lg p-4 z-10"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                <span className="text-purple-500 font-bold">+</span>
              </div>
              <div>
                <p className="font-semibold">ROI</p>
                <p className="text-green-500 font-bold">+200%</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

