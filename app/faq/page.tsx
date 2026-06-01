'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Search, HelpCircle } from 'lucide-react'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { cn } from '@/lib/utils'

const faqCategories = [
  {
    name: 'Orders & Shipping',
    faqs: [
      {
        question: 'How can I track my order?',
        answer: 'Once your order ships, you will receive an email with tracking information. You can also track your order by logging into your account and viewing your order history. Click on any order to see detailed tracking information.',
      },
      {
        question: 'How long does shipping take?',
        answer: 'Standard shipping takes 5-7 business days within the US. Express shipping delivers in 2-3 business days, and overnight shipping delivers the next business day (orders placed before 2 PM EST). International shipping varies by destination.',
      },
      {
        question: 'Do you ship internationally?',
        answer: 'Yes! We ship to over 50 countries worldwide. International shipping times typically range from 7-28 business days depending on the destination. Please note that international orders may be subject to customs duties and taxes.',
      },
      {
        question: 'Can I change my shipping address after placing an order?',
        answer: 'You can change your shipping address within 1 hour of placing your order. After that, please contact our customer service team immediately. Once an order has shipped, the address cannot be changed.',
      },
    ],
  },
  {
    name: 'Returns & Refunds',
    faqs: [
      {
        question: 'What is your return policy?',
        answer: 'We offer a 30-day return policy for most items. Products must be returned in their original, unused condition with all tags and packaging intact. Some items like personal care products and customized items are non-returnable.',
      },
      {
        question: 'How do I start a return?',
        answer: 'To initiate a return, log into your account and go to your order history. Select the order containing the item you wish to return and click "Start Return." You can also contact our customer service team for assistance.',
      },
      {
        question: 'How long does it take to receive a refund?',
        answer: 'Once we receive your returned item, refunds are typically processed within 5-10 business days. The refund will be credited to your original payment method. Please note that your bank may take additional time to post the refund to your account.',
      },
      {
        question: 'Do I have to pay for return shipping?',
        answer: 'For US orders, we provide free prepaid return shipping labels for most returns. For international orders, customers are responsible for return shipping costs unless the item was defective or we made an error.',
      },
    ],
  },
  {
    name: 'Products',
    faqs: [
      {
        question: 'Are your products authentic?',
        answer: 'Yes, all products sold on Swiserve are 100% authentic. We source directly from manufacturers and authorized distributors. Every product goes through our quality verification process before being shipped.',
      },
      {
        question: 'What if I receive a damaged product?',
        answer: 'If you receive a damaged product, please contact us immediately with photos of the damage. We will arrange for a replacement or full refund at no additional cost to you.',
      },
      {
        question: 'Do products come with a warranty?',
        answer: 'Most electronics and appliances come with the manufacturer\'s warranty. Warranty details are listed on each product page. For warranty claims, you can contact us or reach out directly to the manufacturer.',
      },
      {
        question: 'Can I get product recommendations?',
        answer: 'Absolutely! Our customer service team is happy to help you find the right product. You can also use our product comparison feature and read customer reviews to help make your decision.',
      },
    ],
  },
  {
    name: 'Account & Payment',
    faqs: [
      {
        question: 'How do I create an account?',
        answer: 'Click the "Sign Up" button in the header and enter your email address and create a password. You can also sign up during checkout. Having an account lets you track orders, save favorites, and checkout faster.',
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept Visa, Mastercard, American Express, Discover, PayPal, Apple Pay, Google Pay, and Shop Pay. All transactions are secured with industry-standard encryption.',
      },
      {
        question: 'Is my payment information secure?',
        answer: 'Yes, your security is our top priority. We use SSL encryption and are PCI DSS compliant. We never store your full credit card information on our servers.',
      },
      {
        question: 'Can I save multiple shipping addresses?',
        answer: 'Yes! You can save multiple shipping addresses in your account for easier checkout. Go to your account settings and select "Address Book" to add, edit, or delete addresses.',
      },
    ],
  },
]

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    )
  }

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(
      faq =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter(category => category.faqs.length > 0)

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
                <HelpCircle className="w-8 h-8 text-accent" />
              </div>
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 text-balance">
                How Can We Help?
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Find answers to frequently asked questions about orders, shipping, returns, and more.
              </p>
              
              {/* Search */}
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for answers..."
                  className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition-shadow"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-12">
              {filteredCategories.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground mb-4">
                    No results found for &quot;{searchQuery}&quot;
                  </p>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="text-accent hover:underline"
                  >
                    Clear search
                  </button>
                </div>
              ) : (
                filteredCategories.map((category, categoryIndex) => (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 }}
                  >
                    <h2 className="text-xl font-semibold mb-4">{category.name}</h2>
                    <div className="space-y-3">
                      {category.faqs.map((faq, faqIndex) => {
                        const itemId = `${category.name}-${faqIndex}`
                        const isOpen = openItems.includes(itemId)
                        
                        return (
                          <div
                            key={itemId}
                            className="bg-card rounded-xl overflow-hidden shadow-premium"
                          >
                            <button
                              onClick={() => toggleItem(itemId)}
                              className="w-full flex items-center justify-between p-4 text-left hover:bg-secondary/30 transition-colors"
                            >
                              <span className="font-medium pr-4">{faq.question}</span>
                              <ChevronDown
                                className={cn(
                                  "w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform",
                                  isOpen && "rotate-180"
                                )}
                              />
                            </button>
                            <AnimatePresence>
                              {isOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <div className="px-4 pb-4">
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                      {faq.answer}
                                    </p>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        )
                      })}
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-12 lg:py-20 bg-card">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Still Have Questions?
              </h2>
              <p className="text-muted-foreground mb-8">
                Our customer support team is here to help you with anything you need.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Contact Support
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
