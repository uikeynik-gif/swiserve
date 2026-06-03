'use client'

import { motion } from 'framer-motion'
import { RotateCcw, CheckCircle, XCircle, Clock, CreditCard, Package } from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const returnSteps = [
  {
    step: 1,
    title: 'Initiate Return',
    description: 'Log into your account and go to Order History. Select the order containing the item you wish to return and click "Start Return." You can also contact our customer service team.',
  },
  {
    step: 2,
    title: 'Print Return Label',
    description: 'For US orders, we provide a prepaid return shipping label. Download and print the label, then attach it to your package securely.',
  },
  {
    step: 3,
    title: 'Pack Your Item',
    description: 'Place the item in its original packaging with all tags, accessories, and documentation. Ensure the package is securely sealed.',
  },
  {
    step: 4,
    title: 'Ship Your Return',
    description: 'Drop off your package at any authorized carrier location. Keep your tracking receipt for your records.',
  },
  {
    step: 5,
    title: 'Receive Refund',
    description: 'Once we receive and inspect your return, your refund will be processed within 5-10 business days to your original payment method.',
  },
]

const eligibleItems = [
  'Unused items in original packaging',
  'Items with all tags attached',
  'Items returned within 30 days of delivery',
  'Items that are not damaged by the customer',
  'Electronics in unopened packaging',
  'Clothing that has not been worn or washed',
]

const nonReturnableItems = [
  'Personal care items (for hygiene reasons)',
  'Customized or personalized products',
  'Items marked as "Final Sale" or "Non-Returnable"',
  'Downloadable software or digital products',
  'Gift cards',
  'Items damaged due to customer misuse',
  'Items without original packaging or tags',
  'Items returned after 30 days',
]

export default function ReturnPolicyPage() {
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
                <RotateCcw className="w-8 h-8 text-accent" />
              </div>
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 text-balance">
                Return & Refund Policy
              </h1>
              <p className="text-lg text-muted-foreground">
                Easy, hassle-free returns within 30 days. Your satisfaction is our priority.
              </p>
              <p className="text-sm text-muted-foreground mt-4">Last updated: January 1, 2026</p>
            </motion.div>
          </div>
        </section>

        {/* Return Overview */}
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
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-3">30-Day Return Window</h2>
                    <p className="text-muted-foreground mb-4">
                      At Swiserve, we want you to be completely satisfied with your purchase. 
                      If you are not happy with your order for any reason, you may return most 
                      items within 30 days of delivery for a full refund of the purchase price.
                    </p>
                    <p className="text-muted-foreground">
                      Items must be returned in their original condition, unused, and with all 
                      original packaging, tags, and accessories included.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Return Process */}
        <section className="py-12 lg:py-20 bg-card">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">How to Return an Item</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Follow these simple steps to return your item and receive your refund.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {returnSteps.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 bg-background rounded-2xl p-6 shadow-premium"
                  >
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-accent-foreground font-semibold">{step.step}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Eligible vs Non-Returnable */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Eligible Items */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6 lg:p-8 shadow-premium"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <h2 className="text-xl font-semibold">Return Eligibility</h2>
                </div>
                <ul className="space-y-3">
                  {eligibleItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Non-Returnable Items */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6 lg:p-8 shadow-premium"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-red-500/10 rounded-xl flex items-center justify-center">
                    <XCircle className="w-5 h-5 text-red-500" />
                  </div>
                  <h2 className="text-xl font-semibold">Non-Returnable Items</h2>
                </div>
                <ul className="space-y-3">
                  {nonReturnableItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Refund Process */}
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
                    <CreditCard className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-3">Refund Process</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        Once we receive and inspect your returned item, you will be notified via email 
                        regarding the status of your refund.
                      </p>
                      <div>
                        <h3 className="font-medium text-foreground mb-2">Refund Timeline:</h3>
                        <ul className="space-y-2 text-sm">
                          <li>Processing time: 5-10 business days after we receive your return</li>
                          <li>Credit card refunds: May take an additional 5-10 business days to appear on your statement</li>
                          <li>PayPal refunds: Typically processed within 3-5 business days</li>
                          <li>Store credit: Available immediately upon approval</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground mb-2">Refund Amount:</h3>
                        <ul className="space-y-2 text-sm">
                          <li>Full product price will be refunded for eligible returns</li>
                          <li>Original shipping costs are non-refundable unless the return is due to our error</li>
                          <li>Return shipping costs are the responsibility of the customer for standard returns</li>
                          <li>Free return shipping for defective or incorrectly shipped items</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Damaged Products */}
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
                    <Package className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-3">Damaged or Defective Products</h2>
                    <p className="text-muted-foreground mb-4">
                      If you receive a damaged or defective product, please contact us immediately. 
                      We will arrange for a replacement or full refund at no additional cost to you.
                    </p>
                    <div className="bg-secondary/30 rounded-xl p-4">
                      <h3 className="font-medium mb-2">What to do:</h3>
                      <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                        <li>Do not discard the packaging or product</li>
                        <li>Take clear photos of the damage (product and packaging)</li>
                        <li>Contact our support team within 48 hours of delivery</li>
                        <li>Provide your order number and photos when contacting us</li>
                        <li>We will provide a prepaid return label and arrange replacement or refund</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Exchanges */}
        <section className="py-12 lg:py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-background rounded-2xl p-6 lg:p-8 shadow-premium"
              >
                <h2 className="text-xl font-semibold mb-4">Exchanges</h2>
                <p className="text-muted-foreground mb-4">
                  We currently do not offer direct exchanges. If you would like a different item 
                  or size, please follow our return process and place a new order for the desired item.
                </p>
                <p className="text-muted-foreground">
                  This ensures you receive your new item as quickly as possible without having to 
                  wait for the return to be processed first.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Need Help with a Return?
              </h2>
              <p className="text-muted-foreground mb-8">
                Our customer support team is available to assist you with any return-related questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Contact Support
                </a>
                <a
                  href="/faq"
                  className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors"
                >
                  View FAQ
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
