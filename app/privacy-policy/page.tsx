'use client'

import { motion } from 'framer-motion'
import { Shield, Database, Cookie, Lock, Users, Mail } from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function PrivacyPolicyPage() {
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
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 text-balance">
                Privacy Policy
              </h1>
              <p className="text-lg text-muted-foreground">
                Your privacy is important to us. Learn how we collect, use, and protect your information.
              </p>
              <p className="text-sm text-muted-foreground mt-4">Last updated: January 1, 2026</p>
            </motion.div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-neutral dark:prose-invert">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6 lg:p-8 shadow-premium mb-8"
              >
                <h2 className="text-xl font-semibold mb-4">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Welcome to Swiserve (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). We are committed to 
                  protecting your personal information and your right to privacy. This Privacy Policy 
                  explains how we collect, use, disclose, and safeguard your information when you visit 
                  our website swiserve.com and use our services.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Please read this privacy policy carefully. If you do not agree with the terms of this 
                  privacy policy, please do not access the site.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Data Collection */}
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
                    <Database className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Information We Collect</h2>
                    
                    <div className="space-y-6 text-muted-foreground">
                      <div>
                        <h3 className="font-medium text-foreground mb-2">Personal Information You Provide</h3>
                        <p className="text-sm mb-2">We collect information that you voluntarily provide when you:</p>
                        <ul className="list-disc list-inside text-sm space-y-1 ml-2">
                          <li>Register for an account</li>
                          <li>Place an order or make a purchase</li>
                          <li>Subscribe to our newsletter</li>
                          <li>Contact our customer support</li>
                          <li>Participate in surveys or promotions</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-medium text-foreground mb-2">Types of Data Collected</h3>
                        <ul className="list-disc list-inside text-sm space-y-1 ml-2">
                          <li>Name and contact information (email, phone, address)</li>
                          <li>Billing and shipping addresses</li>
                          <li>Payment information (processed securely through our payment providers)</li>
                          <li>Order history and preferences</li>
                          <li>Account credentials</li>
                          <li>Communications with our customer service team</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-medium text-foreground mb-2">Automatically Collected Information</h3>
                        <p className="text-sm mb-2">When you visit our website, we automatically collect:</p>
                        <ul className="list-disc list-inside text-sm space-y-1 ml-2">
                          <li>Device information (browser type, operating system)</li>
                          <li>IP address and location data</li>
                          <li>Pages visited and time spent on our site</li>
                          <li>Referring website addresses</li>
                          <li>Click patterns and interactions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How We Use Information */}
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
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-4">How We Use Your Information</h2>
                    <p className="text-muted-foreground mb-4">
                      We use the information we collect for various purposes, including:
                    </p>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full mt-1.5 flex-shrink-0"></span>
                        <span><strong>Order Processing:</strong> To process and fulfill your orders, send order confirmations, and provide shipping updates.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full mt-1.5 flex-shrink-0"></span>
                        <span><strong>Customer Support:</strong> To respond to your inquiries, resolve issues, and provide assistance.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full mt-1.5 flex-shrink-0"></span>
                        <span><strong>Marketing:</strong> To send promotional communications, newsletters, and special offers (with your consent).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full mt-1.5 flex-shrink-0"></span>
                        <span><strong>Personalization:</strong> To personalize your shopping experience and show relevant products.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full mt-1.5 flex-shrink-0"></span>
                        <span><strong>Analytics:</strong> To improve our website, products, and services based on user behavior.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full mt-1.5 flex-shrink-0"></span>
                        <span><strong>Legal Compliance:</strong> To comply with legal obligations and protect our rights.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Cookies */}
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
                    <Cookie className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Cookies and Tracking Technologies</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        We use cookies and similar tracking technologies to enhance your browsing experience, 
                        analyze site traffic, and personalize content.
                      </p>
                      
                      <div>
                        <h3 className="font-medium text-foreground mb-2">Types of Cookies We Use:</h3>
                        <ul className="list-disc list-inside text-sm space-y-2 ml-2">
                          <li><strong>Essential Cookies:</strong> Required for the website to function properly (e.g., shopping cart, checkout).</li>
                          <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website.</li>
                          <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and track campaign performance.</li>
                          <li><strong>Preference Cookies:</strong> Remember your settings and preferences for a better experience.</li>
                        </ul>
                      </div>

                      <p className="text-sm">
                        You can manage your cookie preferences through your browser settings. Please note that 
                        disabling certain cookies may affect the functionality of our website.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Data Security */}
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
                    <Lock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Payment Security & Data Protection</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        We take the security of your personal information seriously and implement 
                        appropriate technical and organizational measures to protect your data.
                      </p>
                      
                      <div>
                        <h3 className="font-medium text-foreground mb-2">Security Measures:</h3>
                        <ul className="list-disc list-inside text-sm space-y-2 ml-2">
                          <li>SSL encryption for all data transmissions</li>
                          <li>PCI DSS compliance for payment processing</li>
                          <li>Regular security audits and assessments</li>
                          <li>Access controls and authentication measures</li>
                          <li>Secure data storage and backup procedures</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-medium text-foreground mb-2">Payment Information:</h3>
                        <p className="text-sm">
                          We do not store your complete credit card information on our servers. All payment 
                          processing is handled by trusted third-party payment processors who are PCI DSS compliant.
                        </p>
                      </div>

                      <p className="text-sm">
                        While we implement safeguards designed to protect your information, no security system 
                        is impenetrable. We cannot guarantee the security of our databases or that information 
                        you supply will not be intercepted while being transmitted over the Internet.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Third-Party Services */}
        <section className="py-12 lg:py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-background rounded-2xl p-6 lg:p-8 shadow-premium"
              >
                <h2 className="text-xl font-semibold mb-4">Third-Party Services</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We do not sell your personal information. We may share your information with third-party 
                    service providers who assist us in operating our business:
                  </p>
                  
                  <ul className="list-disc list-inside text-sm space-y-2 ml-2">
                    <li><strong>Payment Processors:</strong> To process your payments securely</li>
                    <li><strong>Shipping Carriers:</strong> To deliver your orders</li>
                    <li><strong>Analytics Providers:</strong> To help us understand website usage</li>
                    <li><strong>Marketing Services:</strong> To deliver relevant advertisements</li>
                    <li><strong>Customer Support Tools:</strong> To help us respond to your inquiries</li>
                  </ul>

                  <p className="text-sm">
                    These service providers are contractually obligated to protect your information and 
                    may only use it for the specific purposes for which we share it.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6 lg:p-8 shadow-premium"
              >
                <h2 className="text-xl font-semibold mb-4">Your Privacy Rights</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Depending on your location, you may have certain rights regarding your personal information:
                  </p>
                  
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full mt-1.5 flex-shrink-0"></span>
                      <span><strong>Access:</strong> Request access to the personal information we hold about you.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full mt-1.5 flex-shrink-0"></span>
                      <span><strong>Correction:</strong> Request correction of inaccurate or incomplete information.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full mt-1.5 flex-shrink-0"></span>
                      <span><strong>Deletion:</strong> Request deletion of your personal information (subject to certain exceptions).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full mt-1.5 flex-shrink-0"></span>
                      <span><strong>Opt-Out:</strong> Opt-out of marketing communications at any time.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full mt-1.5 flex-shrink-0"></span>
                      <span><strong>Data Portability:</strong> Request a copy of your data in a portable format.</span>
                    </li>
                  </ul>

                  <p className="text-sm">
                    To exercise any of these rights, please contact us using the information provided below.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
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
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
                    <p className="text-muted-foreground mb-4">
                      If you have any questions about this Privacy Policy or our data practices, 
                      please contact us:
                    </p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p><strong>Email:</strong> privacy@swiserve.com</p>
                      <p><strong>General Inquiries:</strong> swiserve.global@gmail.com</p>
                      <p><strong>Address:</strong> United States</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Questions About Privacy?
              </h2>
              <p className="text-muted-foreground mb-8">
                We are committed to protecting your privacy. If you have any concerns, please reach out.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
