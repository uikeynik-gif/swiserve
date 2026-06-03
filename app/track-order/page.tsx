'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Package, Search, Truck, CheckCircle, Clock, MapPin, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { cn } from '@/lib/utils'

type OrderStatus = 'processing' | 'shipped' | 'in-transit' | 'delivered' | null

interface TrackingResult {
  orderNumber: string
  status: OrderStatus
  estimatedDelivery: string
  lastUpdate: string
  location: string
  timeline: Array<{
    status: string
    date: string
    location: string
    completed: boolean
  }>
}

export default function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState('')
  const [email, setEmail] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [trackingResult, setTrackingResult] = useState<TrackingResult | null>(null)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSearching(true)
    setError('')
    setTrackingResult(null)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    // For demo purposes, show a sample result if order number starts with "SW"
    if (orderNumber.toUpperCase().startsWith('SW')) {
      setTrackingResult({
        orderNumber: orderNumber.toUpperCase(),
        status: 'in-transit',
        estimatedDelivery: 'June 8, 2026',
        lastUpdate: 'June 4, 2026, 2:45 PM',
        location: 'Distribution Center, Los Angeles, CA',
        timeline: [
          {
            status: 'Order Placed',
            date: 'June 1, 2026, 10:30 AM',
            location: 'Online',
            completed: true,
          },
          {
            status: 'Order Confirmed',
            date: 'June 1, 2026, 10:35 AM',
            location: 'Swiserve Fulfillment',
            completed: true,
          },
          {
            status: 'Processing',
            date: 'June 2, 2026, 9:00 AM',
            location: 'Warehouse',
            completed: true,
          },
          {
            status: 'Shipped',
            date: 'June 3, 2026, 3:15 PM',
            location: 'Shipped from Warehouse',
            completed: true,
          },
          {
            status: 'In Transit',
            date: 'June 4, 2026, 2:45 PM',
            location: 'Distribution Center, Los Angeles, CA',
            completed: true,
          },
          {
            status: 'Out for Delivery',
            date: 'Pending',
            location: 'Local Carrier',
            completed: false,
          },
          {
            status: 'Delivered',
            date: 'Pending',
            location: 'Your Address',
            completed: false,
          },
        ],
      })
    } else {
      setError('Order not found. Please check your order number and email address.')
    }

    setIsSearching(false)
  }

  const getStatusIcon = (status: OrderStatus) => {
    switch (status) {
      case 'processing':
        return <Clock className="w-6 h-6 text-yellow-500" />
      case 'shipped':
        return <Package className="w-6 h-6 text-blue-500" />
      case 'in-transit':
        return <Truck className="w-6 h-6 text-accent" />
      case 'delivered':
        return <CheckCircle className="w-6 h-6 text-green-500" />
      default:
        return <Package className="w-6 h-6 text-muted-foreground" />
    }
  }

  const getStatusLabel = (status: OrderStatus) => {
    switch (status) {
      case 'processing':
        return 'Processing'
      case 'shipped':
        return 'Shipped'
      case 'in-transit':
        return 'In Transit'
      case 'delivered':
        return 'Delivered'
      default:
        return 'Unknown'
    }
  }

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
                <Package className="w-8 h-8 text-accent" />
              </div>
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 text-balance">
                Track Your Order
              </h1>
              <p className="text-lg text-muted-foreground">
                Enter your order number and email to track your shipment in real-time.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search Form */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6 lg:p-8 shadow-premium"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="orderNumber" className="block text-sm font-medium mb-1.5">
                      Order Number
                    </label>
                    <input
                      type="text"
                      id="orderNumber"
                      value={orderNumber}
                      onChange={(e) => setOrderNumber(e.target.value)}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-shadow"
                      placeholder="e.g., SW-12345678"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      You can find this in your order confirmation email.
                    </p>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-shadow"
                      placeholder="Email used for the order"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSearching}
                    className={cn(
                      "w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium flex items-center justify-center gap-2 transition-all",
                      isSearching
                        ? "opacity-70 cursor-not-allowed"
                        : "hover:bg-primary/90"
                    )}
                  >
                    {isSearching ? (
                      <>
                        <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Searching...
                      </>
                    ) : (
                      <>
                        <Search className="w-4 h-4" />
                        Track Order
                      </>
                    )}
                  </button>
                </form>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-red-700">{error}</p>
                      <p className="text-xs text-red-600 mt-1">
                        Need help? <Link href="/contact" className="underline">Contact Support</Link>
                      </p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tracking Results */}
        {trackingResult && (
          <section className="py-12 lg:py-20 bg-card">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                {/* Status Overview */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-background rounded-2xl p-6 lg:p-8 shadow-premium mb-8"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center">
                        {getStatusIcon(trackingResult.status)}
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Order Status</p>
                        <p className="text-2xl font-bold">{getStatusLabel(trackingResult.status)}</p>
                        <p className="text-sm text-muted-foreground">Order #{trackingResult.orderNumber}</p>
                      </div>
                    </div>
                    <div className="md:text-right">
                      <p className="text-sm text-muted-foreground">Estimated Delivery</p>
                      <p className="text-lg font-semibold text-accent">{trackingResult.estimatedDelivery}</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      <div>
                        <p className="text-sm text-muted-foreground">Last Update</p>
                        <p className="font-medium">{trackingResult.location}</p>
                        <p className="text-sm text-muted-foreground">{trackingResult.lastUpdate}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Timeline */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-background rounded-2xl p-6 lg:p-8 shadow-premium"
                >
                  <h2 className="text-lg font-semibold mb-6">Tracking History</h2>
                  <div className="space-y-6">
                    {trackingResult.timeline.map((item, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div
                            className={cn(
                              "w-4 h-4 rounded-full border-2 flex-shrink-0",
                              item.completed
                                ? "bg-accent border-accent"
                                : "bg-background border-border"
                            )}
                          />
                          {index < trackingResult.timeline.length - 1 && (
                            <div
                              className={cn(
                                "w-0.5 flex-1 mt-2",
                                item.completed ? "bg-accent" : "bg-border"
                              )}
                            />
                          )}
                        </div>
                        <div className={cn("pb-6", !item.completed && "opacity-50")}>
                          <p className="font-medium">{item.status}</p>
                          <p className="text-sm text-muted-foreground">{item.location}</p>
                          <p className="text-xs text-muted-foreground mt-1">{item.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        )}

        {/* Help Section */}
        <section className={cn("py-12 lg:py-20", trackingResult ? "" : "bg-card")}>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card rounded-xl p-6 shadow-premium">
                  <h3 className="font-semibold mb-2">Where is my order number?</h3>
                  <p className="text-sm text-muted-foreground">
                    Your order number can be found in your order confirmation email, 
                    or in your account under Order History. It typically starts with &quot;SW-&quot;.
                  </p>
                </div>
                
                <div className="bg-card rounded-xl p-6 shadow-premium">
                  <h3 className="font-semibold mb-2">When will my tracking update?</h3>
                  <p className="text-sm text-muted-foreground">
                    Tracking information is typically updated within 24-48 hours after 
                    your order ships. Updates may take longer during high volume periods.
                  </p>
                </div>
                
                <div className="bg-card rounded-xl p-6 shadow-premium">
                  <h3 className="font-semibold mb-2">My tracking shows delivered but I did not receive it?</h3>
                  <p className="text-sm text-muted-foreground">
                    Please check with neighbors and secure locations. If not found, 
                    contact our support team within 48 hours of the delivery date.
                  </p>
                </div>
                
                <div className="bg-card rounded-xl p-6 shadow-premium">
                  <h3 className="font-semibold mb-2">Can I change my delivery address?</h3>
                  <p className="text-sm text-muted-foreground">
                    Address changes can only be made within 1 hour of placing your order. 
                    Contact our support team immediately for assistance.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className={cn("py-12 lg:py-20", trackingResult ? "bg-card" : "")}>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Need Help With Your Order?
              </h2>
              <p className="text-muted-foreground mb-8">
                Our customer support team is available to help with any delivery questions or concerns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Contact Support
                </Link>
                <Link
                  href="/faq"
                  className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors"
                >
                  View FAQ
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
