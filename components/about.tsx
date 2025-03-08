"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80"
                alt="About Us"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Decorative elements */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -z-10 -bottom-6 -left-6 w-24 h-24 rounded-lg bg-primary/20"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -z-10 -top-6 -right-6 w-32 h-32 rounded-full bg-purple-500/20"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <p className="text-primary font-medium">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold">We Help Businesses Grow Through Digital Marketing</h2>
            <p className="text-foreground/70">
              With over 10 years of experience, we've helped hundreds of businesses increase their online presence and
              drive more revenue through strategic digital marketing solutions.
            </p>

            <div className="grid gap-4 mt-2">
              {[
                "Data-driven strategies tailored to your business goals",
                "Experienced team of marketing professionals",
                "Transparent reporting and communication",
                "Proven track record of success across industries",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <p>{item}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-4">
              {[
                { number: "500+", label: "Clients" },
                { number: "1000+", label: "Projects" },
                { number: "150%", label: "Avg. ROI" },
                { number: "10+", label: "Years" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-3xl font-bold text-primary">{stat.number}</p>
                  <p className="text-foreground/70">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

