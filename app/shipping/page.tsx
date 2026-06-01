'use client'

import { motion } from 'framer-motion'
import { Truck, RotateCcw, Clock, Globe, Package, CreditCard } from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const shippingOptions = [
  {
    icon: Truck,
    title: 'Standard Shipping',
    price: 'Free',
    time: '5-7 business days',
    description: 'Free standard shipping on all orders over $50. Orders under $50 have a flat rate of $5.99.',
  },
  {
    icon: Clock,
    title: 'Express Shipping',
    price: '$14.99',
    time: '2-3 business days',
    description: 'Need it faster? Our express shipping ensures your order arrives within 2-3 business days.',
  },
  {
    icon: Package,
    title: 'Overnight Shipping',
    price: '$29.99',
    time: 'Next business day',
    description: 'Order by 2 PM EST and receive your package the next business day (excluding weekends and holidays).',
  },
]

const internationalZones = [
  { zone: 'Canada & Mexico', time: '5-10 business days', price: 'From $14.99' },
  { zone: 'Europe', time: '7-14 business days', price: 'From $24.99' },
  { zone: 'Asia Pacific', time: '10-21 business days', price: 'From $29.99' },
  { zone: 'Rest of World', time: '14-28 business days', price: 'From $34.99' },
]

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl mx-auto text-center"
            >
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
                Delivery Information
              </span>
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 text-balance">
                Shipping & Returns
              </h1>
              <p className="text-lg text-muted-foreground">
                Fast, reliable shipping worldwide with hassle-free returns.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Domestic Shipping */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">Domestic Shipping (US)</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose the shipping speed that works best for you.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {shippingOptions.map((option, index) => (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 shadow-premium"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                    <option.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{option.title}</h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-2xl font-bold text-accent">{option.price}</span>
                    <span className="text-sm text-muted-foreground">· {option.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* International Shipping */}
        <section className="py-12 lg:py-20 bg-card">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">International Shipping</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We ship to over 50 countries worldwide. Delivery times and costs vary by destination.
              </p>
            </motion.div>

            <div className="max-w-2xl mx-auto">
              <div className="bg-background rounded-2xl overflow-hidden shadow-premium">
                <div className="grid grid-cols-3 gap-4 p-4 bg-secondary/50 font-medium text-sm">
                  <span>Region</span>
                  <span>Delivery Time</span>
                  <span>Starting Price</span>
                </div>
                {internationalZones.map((zone, index) => (
                  <motion.div
                    key={zone.zone}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="grid grid-cols-3 gap-4 p-4 border-b border-border last:border-0"
                  >
                    <span className="font-medium">{zone.zone}</span>
                    <span className="text-muted-foreground">{zone.time}</span>
                    <span className="text-accent font-medium">{zone.price}</span>
                  </motion.div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground text-center mt-4">
                International orders may be subject to customs duties and taxes, which are the responsibility of the recipient.
              </p>
            </div>
          </div>
        </section>

        {/* Returns Policy */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <RotateCcw className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4">Easy Returns</h2>
                <p className="text-muted-foreground mb-6">
                  Not satisfied with your purchase? No problem. We offer a hassle-free 30-day 
                  return policy on most items.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Initiate Return</h4>
                      <p className="text-sm text-muted-foreground">
                        Log into your account or contact our support team to start a return.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Ship It Back</h4>
                      <p className="text-sm text-muted-foreground">
                        Use the prepaid shipping label (US orders) or ship using your preferred carrier.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Get Refunded</h4>
                      <p className="text-sm text-muted-foreground">
                        Receive your refund within 5-10 business days after we receive the item.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6 shadow-premium"
              >
                <h3 className="text-lg font-semibold mb-4">Return Policy Details</h3>
                <div className="space-y-4 text-sm">
                  <div className="pb-4 border-b border-border">
                    <h4 className="font-medium mb-1">Return Window</h4>
                    <p className="text-muted-foreground">
                      Items must be returned within 30 days of delivery date.
                    </p>
                  </div>
                  <div className="pb-4 border-b border-border">
                    <h4 className="font-medium mb-1">Condition</h4>
                    <p className="text-muted-foreground">
                      Items must be unused and in original packaging with all tags attached.
                    </p>
                  </div>
                  <div className="pb-4 border-b border-border">
                    <h4 className="font-medium mb-1">Non-Returnable Items</h4>
                    <p className="text-muted-foreground">
                      Personal care items, customized products, and clearance items marked final sale.
                    </p>
                  </div>
                  <div className="pb-4 border-b border-border">
                    <h4 className="font-medium mb-1">Refund Method</h4>
                    <p className="text-muted-foreground">
                      Refunds are issued to the original payment method.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Exchanges</h4>
                    <p className="text-muted-foreground">
                      For exchanges, please return the item and place a new order.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="py-12 lg:py-20 bg-card">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">Secure Payment</h2>
              <p className="text-muted-foreground mb-8">
                We accept all major payment methods and your transactions are protected 
                with industry-leading encryption.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay', 'Google Pay'].map((method) => (
                  <div
                    key={method}
                    className="px-6 py-3 bg-background rounded-lg shadow-sm text-sm font-medium"
                  >
                    {method}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
