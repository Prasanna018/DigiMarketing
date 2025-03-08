"use client"

import type React from "react"

import { motion } from "framer-motion"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  // Smooth scroll function
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    // Only handle # links
    if (!href.startsWith("#")) return

    e.preventDefault()

    const targetId = href.substring(1)
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
    <footer className="w-full bg-muted/50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <Link href="/" className="flex items-center gap-2">
              <span className="font-bold text-2xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                DigiMarket
              </span>
            </Link>
            <p className="text-foreground/70">
              We help businesses grow through strategic digital marketing solutions tailored to their unique needs.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="h-10 w-10 rounded-full bg-background flex items-center justify-center shadow-sm hover:bg-primary/10 transition-colors"
              >
                <Facebook className="h-5 w-5 text-foreground/70" />
              </Link>
              <Link
                href="#"
                className="h-10 w-10 rounded-full bg-background flex items-center justify-center shadow-sm hover:bg-primary/10 transition-colors"
              >
                <Twitter className="h-5 w-5 text-foreground/70" />
              </Link>
              <Link
                href="#"
                className="h-10 w-10 rounded-full bg-background flex items-center justify-center shadow-sm hover:bg-primary/10 transition-colors"
              >
                <Instagram className="h-5 w-5 text-foreground/70" />
              </Link>
              <Link
                href="#"
                className="h-10 w-10 rounded-full bg-background flex items-center justify-center shadow-sm hover:bg-primary/10 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-foreground/70" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="font-semibold text-lg">Services</h3>
            <ul className="space-y-3">
              {[
                "SEO Optimization",
                "Social Media Marketing",
                "Content Marketing",
                "PPC Advertising",
                "Email Marketing",
                "Analytics & Reporting",
              ].map((item, index) => (
                <li key={index}>
                  <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="font-semibold text-lg">Company</h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "#about" },
                { name: "Our Team", href: "#" },
                { name: "Careers", href: "#" },
                { name: "Blog", href: "#" },
                { name: "Case Studies", href: "#" },
                { name: "FAQ", href: "#" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-foreground/70 hover:text-primary transition-colors"
                    onClick={(e) => handleScroll(e, item.href)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="font-semibold text-lg">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground/70">123 Marketing St, Digital City</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-foreground/70">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-foreground/70">hello@digimarket.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-foreground/70">© {currentYear} DigiMarket. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

