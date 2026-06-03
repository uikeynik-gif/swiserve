'use client'

import { motion } from 'framer-motion'
import { Truck, Clock, Globe, Package, MapPin, AlertCircle } from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const domesticShipping = [
  {
    method: 'Standard Shipping',
    time: '5-7 business days',
    price: 'Free on orders over $50 (otherwise $5.99)',
  },
  {
    method: 'Express Shipping',
    time: '2-3 business days',
    price: '$14.99',
  },
  {
    method: 'Overnight Shipping',
    time: 'Next business day',
    price: '$29.99',
  },
]

const internationalShipping = [
  {
    region: 'Canada & Mexico',
    time: '5-10 business days',
    price: 'From $14.99',
  },
  {
    region: 'Europe',
    time: '7-14 business days',
    price: 'From $24.99',
  },
  {
    region: 'Asia Pacific',
    time: '10-21 business days',
    price: 'From $29.99',
  },
  {
    region: 'Rest of World',
    time: '14-28 business days',
    price: 'From $34.99',
  },
]

export default function ShippingPolicyPage() {
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
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Truck className="w-8 h-8 text-accent" />
              </div>
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 text-balance">
                Shipping Policy
              </h1>
              <p className="text-lg text-muted-foreground">
                Fast, reliable shipping worldwide. Learn about our delivery options and timelines.
              </p>
              <p className="text-sm text-muted-foreground mt-4">Last updated: January 1, 2026</p>
            </motion.div>
          </div>
        </section>

        {/* Processing Time */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6 lg:p-8 shadow-premium mb-8"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-3">Processing Time</h2>
                    <p className="text-muted-foreground mb-4">
                      All orders are processed within 1-2 business days (excluding weekends and holidays) 
                      after receiving your order confirmation email. You will receive another notification 
                      when your order has shipped.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>Orders placed before 2:00 PM EST on business days are typically processed the same day.</li>
                      <li>Orders placed after 2:00 PM EST or on weekends/holidays will be processed the next business day.</li>
                      <li>During peak seasons (holidays, sales events), processing may take an additional 1-2 business days.</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Domestic Shipping */}
        <section className="py-12 lg:py-20 bg-card">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">Domestic Shipping (United States)</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We offer multiple shipping options to meet your needs within the continental United States.
              </p>
            </motion.div>

            <div className="max-w-2xl mx-auto">
              <div className="bg-background rounded-2xl overflow-hidden shadow-premium">
                <div className="grid grid-cols-3 gap-4 p-4 bg-secondary/50 font-medium text-sm">
                  <span>Shipping Method</span>
                  <span>Delivery Time</span>
                  <span>Cost</span>
                </div>
                {domesticShipping.map((option, index) => (
                  <motion.div
                    key={option.method}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="grid grid-cols-3 gap-4 p-4 border-b border-border last:border-0"
                  >
                    <span className="font-medium">{option.method}</span>
                    <span className="text-muted-foreground">{option.time}</span>
                    <span className="text-accent font-medium">{option.price}</span>
                  </motion.div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground text-center mt-4">
                Shipping to Alaska, Hawaii, and U.S. territories may require additional time and fees.
              </p>
            </div>
          </div>
        </section>

        {/* International Shipping */}
        <section className="py-12 lg:py-20">
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
              <div className="bg-card rounded-2xl overflow-hidden shadow-premium">
                <div className="grid grid-cols-3 gap-4 p-4 bg-secondary/50 font-medium text-sm">
                  <span>Region</span>
                  <span>Delivery Time</span>
                  <span>Starting Price</span>
                </div>
                {internationalShipping.map((zone, index) => (
                  <motion.div
                    key={zone.region}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="grid grid-cols-3 gap-4 p-4 border-b border-border last:border-0"
                  >
                    <span className="font-medium">{zone.region}</span>
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

        {/* Tracking Information */}
        <section className="py-12 lg:py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-background rounded-2xl p-6 lg:p-8 shadow-premium"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Package className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-3">Tracking Your Order</h2>
                    <p className="text-muted-foreground mb-4">
                      Once your order has shipped, you will receive a shipping confirmation email containing:
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                      <li>Your tracking number</li>
                      <li>A link to track your package</li>
                      <li>Estimated delivery date</li>
                      <li>Carrier information</li>
                    </ul>
                    <p className="text-muted-foreground">
                      You can also track your order by logging into your Swiserve account and viewing your order history. 
                      Please allow 24-48 hours for tracking information to become active after receiving your shipping confirmation.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Delivery Issues */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6 lg:p-8 shadow-premium"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-3">Delivery Issues</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <div>
                        <h3 className="font-medium text-foreground mb-1">Lost or Stolen Packages</h3>
                        <p className="text-sm">
                          If your package is marked as delivered but you have not received it, please check with 
                          neighbors and any secure locations at your address. If still not found, contact our 
                          support team within 48 hours of the delivery date.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground mb-1">Damaged Packages</h3>
                        <p className="text-sm">
                          If your package arrives damaged, please take photos of the packaging and contents, 
                          then contact us immediately. We will arrange for a replacement or refund at no additional cost.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground mb-1">Incorrect Address</h3>
                        <p className="text-sm">
                          Please ensure your shipping address is correct before placing your order. 
                          Address changes can only be made within 1 hour of placing your order. 
                          After that, please contact our support team immediately.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground mb-1">Shipping Delays</h3>
                        <p className="text-sm">
                          While we strive to meet estimated delivery times, delays may occur due to weather, 
                          carrier issues, or high volume periods. We appreciate your patience and will keep 
                          you informed of any significant delays.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 lg:py-20 bg-card">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Questions About Shipping?
              </h2>
              <p className="text-muted-foreground mb-8">
                Our customer support team is here to help with any shipping-related questions or concerns.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Contact Support
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
