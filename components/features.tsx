"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { BarChart3, Search, Mail, Share2, TrendingUp, LineChart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const features = [
  {
    icon: <Search className="h-10 w-10 text-primary" />,
    title: "SEO Optimization",
    description: "Improve your search engine rankings and drive organic traffic to your website.",
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
    title: "PPC Advertising",
    description: "Create targeted ad campaigns that deliver results and maximize your ROI.",
  },
  {
    icon: <Share2 className="h-10 w-10 text-primary" />,
    title: "Social Media Marketing",
    description: "Engage with your audience and build brand awareness across social platforms.",
  },
  {
    icon: <Mail className="h-10 w-10 text-primary" />,
    title: "Email Marketing",
    description: "Nurture leads and drive conversions with personalized email campaigns.",
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    title: "Content Marketing",
    description: "Create valuable content that attracts and engages your target audience.",
  },
  {
    icon: <LineChart className="h-10 w-10 text-primary" />,
    title: "Analytics & Reporting",
    description: "Track performance and gain insights to optimize your marketing strategies.",
  },
]

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="features" className="w-full py-20 bg-muted/50 relative">
      <div className="absolute inset-0 z-0 opacity-5">
        <Image
          src="https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?auto=format&fit=crop&w=1920&q=80"
          alt="Features background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-muted/80" />
      </div>
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-primary font-medium mb-2"
            >
              Our Services
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Comprehensive Digital Marketing Solutions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-foreground/70 max-w-2xl mx-auto"
            >
              We offer a full range of digital marketing services to help your business grow and succeed online.
            </motion.p>
          </div>

          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow h-full">
                  <CardHeader>
                    <div className="mb-4">{feature.icon}</div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-foreground/70">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

