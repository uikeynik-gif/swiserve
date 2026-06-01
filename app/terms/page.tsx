'use client'

import { motion } from 'framer-motion'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 1, 2024</p>

            <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-xl font-semibold mb-4">1. Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using Swiserve, you agree to be bound by these Terms of Service 
                  and all applicable laws and regulations. If you do not agree with any of these 
                  terms, you are prohibited from using or accessing this site.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">2. Use License</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Permission is granted to temporarily access the materials on Swiserve for 
                  personal, non-commercial transitory viewing only. This license does not include:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Modifying or copying the materials</li>
                  <li>Using the materials for any commercial purpose</li>
                  <li>Attempting to decompile or reverse engineer any software</li>
                  <li>Removing any copyright or proprietary notations</li>
                  <li>Transferring the materials to another person</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">3. Product Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We strive to provide accurate product descriptions, images, and pricing. 
                  However, we do not warrant that product descriptions or other content is 
                  accurate, complete, reliable, current, or error-free. If a product offered 
                  by Swiserve is not as described, your sole remedy is to return it in unused 
                  condition.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">4. Pricing and Payment</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All prices are displayed in US dollars unless otherwise noted. We reserve 
                  the right to change prices at any time without notice. Payment must be 
                  received in full before orders are processed. We accept major credit cards 
                  and other payment methods as displayed at checkout.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">5. Shipping and Delivery</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Shipping times are estimates and not guaranteed. Swiserve is not responsible 
                  for delays caused by shipping carriers, customs, or other factors beyond our 
                  control. Risk of loss and title for items pass to you upon delivery to the carrier.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">6. Returns and Refunds</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We offer a 30-day return policy for most items. Products must be returned 
                  in their original condition and packaging. Refunds will be processed within 
                  5-10 business days after we receive the returned item. Original shipping 
                  costs are non-refundable.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">7. Account Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You are responsible for maintaining the confidentiality of your account and 
                  password. You agree to accept responsibility for all activities that occur 
                  under your account. You must notify us immediately of any unauthorized use 
                  of your account.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">8. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Swiserve shall not be liable for any indirect, incidental, special, 
                  consequential, or punitive damages resulting from your use of or inability 
                  to use the service. Our total liability shall not exceed the amount paid 
                  by you for the product giving rise to the claim.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">9. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws 
                  of the State of California, without regard to its conflict of law provisions. 
                  Any disputes shall be resolved in the courts of San Francisco County, California.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">10. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these terms at any time. Changes will be 
                  effective immediately upon posting. Your continued use of Swiserve after 
                  changes constitutes acceptance of the modified terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">11. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Questions about the Terms of Service should be sent to us at legal@swiserve.com 
                  or through our Contact page.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
