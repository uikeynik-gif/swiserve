'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Globe, 
  Users, 
  Award, 
  Leaf,
  Target,
  Heart,
  Zap,
  Shield
} from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const stats = [
  { label: 'Happy Customers', value: '2M+' },
  { label: 'Products Sold', value: '10M+' },
  { label: 'Countries Served', value: '50+' },
  { label: 'Team Members', value: '500+' },
]

const values = [
  {
    icon: Target,
    title: 'Quality First',
    description: 'We meticulously curate every product in our catalog, ensuring only the finest quality reaches our customers.',
  },
  {
    icon: Heart,
    title: 'Customer Obsessed',
    description: 'Your satisfaction drives everything we do. From browsing to delivery, we craft experiences that delight.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We constantly push boundaries to bring you the latest products and most seamless shopping experience.',
  },
  {
    icon: Shield,
    title: 'Trust & Security',
    description: 'Your data and transactions are protected by industry-leading security measures.',
  },
]

const team = [
  {
    name: 'Sarah Chen',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
  },
  {
    name: 'Michael Roberts',
    role: 'Chief Product Officer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
  },
  {
    name: 'Emily Watson',
    role: 'Head of Design',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
  },
  {
    name: 'David Kim',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
                Our Story
              </span>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-balance">
                Redefining Online Shopping for the Modern World
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground text-pretty">
                Since 2018, Swiserve has been on a mission to bring the world&apos;s best products 
                to your doorstep with unparalleled convenience and care.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
                  Our Mission
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Making Premium Products Accessible to Everyone
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  At Swiserve, we believe that everyone deserves access to high-quality products 
                  without compromising on price or convenience. Our global network of suppliers 
                  and logistics partners enables us to deliver exceptional value to customers 
                  in over 50 countries.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  From cutting-edge electronics to everyday essentials, we curate a diverse 
                  catalog that meets the evolving needs of modern consumers. Every product 
                  in our store is carefully vetted to ensure it meets our rigorous quality standards.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-premium"
              >
                <Image
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop"
                  alt="Swiserve team at work"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 lg:py-28 bg-card">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
                Our Values
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                What Drives Us Forward
              </h2>
              <p className="text-muted-foreground">
                Our core values shape every decision we make and every interaction we have.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-background rounded-2xl p-6 shadow-premium"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Reach Section */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-premium"
              >
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop"
                  alt="Global operations"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
                  Global Reach
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Connecting the World Through Commerce
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Worldwide Shipping</h3>
                      <p className="text-sm text-muted-foreground">
                        Fast and reliable delivery to over 50 countries with real-time tracking.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Local Support Teams</h3>
                      <p className="text-sm text-muted-foreground">
                        Native-speaking customer service representatives in major markets.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Quality Guaranteed</h3>
                      <p className="text-sm text-muted-foreground">
                        Every product backed by our satisfaction guarantee and easy returns.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Leaf className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Sustainable Practices</h3>
                      <p className="text-sm text-muted-foreground">
                        Committed to reducing our environmental footprint with eco-friendly packaging.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 lg:py-28 bg-card">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
                Our Team
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Meet the People Behind Swiserve
              </h2>
              <p className="text-muted-foreground">
                Our diverse team of passionate professionals works tirelessly to deliver 
                the best shopping experience.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-background rounded-2xl overflow-hidden shadow-premium group"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary to-accent rounded-3xl p-8 lg:p-16 text-center text-white"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Start Shopping?
              </h2>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">
                Join millions of satisfied customers and discover why Swiserve is the 
                preferred destination for online shopping.
              </p>
              <Link
                href="/shop"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-xl font-semibold hover:bg-white/90 transition-colors"
              >
                Explore Our Products
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
