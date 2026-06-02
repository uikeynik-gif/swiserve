'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  CheckCircle, 
  Package, 
  Truck, 
  MapPin, 
  Calendar, 
  CreditCard, 
  ArrowRight,
  Copy,
  Check
} from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

interface OrderItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

interface OrderData {
  orderId: string
  customerName: string
  email: string
  phone: string
  items: OrderItem[]
  shippingAddress: {
    address: string
    city: string
    state: string
    postalCode: string
    country: string
  }
  paymentMethod: string
  shippingMethod: string
  subtotal: number
  shipping: number
  tax: number
  total: number
  orderDate: string
  estimatedDelivery: string
}

export default function OrderSuccessPage() {
  const [mounted, setMounted] = useState(false)
  const [orderData, setOrderData] = useState<OrderData | null>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Retrieve order data from sessionStorage
    const savedOrder = sessionStorage.getItem('lastOrder')
    if (savedOrder) {
      setOrderData(JSON.parse(savedOrder))
    }
  }, [])

  const copyOrderId = () => {
    if (orderData?.orderId) {
      navigator.clipboard.writeText(orderData.orderId)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (!mounted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    )
  }

  // Fallback order data if none exists
  const order: OrderData = orderData || {
    orderId: `SW${Date.now().toString().slice(-8)}`,
    customerName: 'Valued Customer',
    email: 'customer@example.com',
    phone: '+1 (555) 000-0000',
    items: [],
    shippingAddress: {
      address: '123 Main Street',
      city: 'New York',
      state: 'NY',
      postalCode: '10001',
      country: 'United States'
    },
    paymentMethod: 'Credit/Debit Card',
    shippingMethod: 'Standard Shipping',
    subtotal: 0,
    shipping: 0,
    tax: 0,
    total: 0,
    orderDate: new Date().toISOString(),
    estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
  }

  const totalQuantity = order.items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 lg:py-16">
        {/* Success Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
            className="w-28 h-28 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-16 h-16 text-green-600" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-3xl lg:text-4xl font-bold mb-3">Order Confirmed!</h1>
            <p className="text-lg text-muted-foreground">
              Thank you for shopping with Swiserve, {order.customerName.split(' ')[0]}!
            </p>
          </motion.div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Order ID Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-card rounded-2xl p-6 shadow-premium mb-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Order Number</p>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold font-mono">{order.orderId}</span>
                  <button
                    onClick={copyOrderId}
                    className="p-2 hover:bg-secondary rounded-lg transition-colors"
                    title="Copy order ID"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-green-600" />
                    ) : (
                      <Copy className="w-4 h-4 text-muted-foreground" />
                    )}
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(order.orderDate)}</span>
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Product Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-card rounded-2xl p-6 shadow-premium"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Package className="w-5 h-5 text-accent" />
                  <h2 className="text-lg font-semibold">Order Details</h2>
                </div>
                
                {order.items.length > 0 ? (
                  <div className="space-y-4">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
                        <div className="relative w-16 h-16 bg-secondary/30 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate">{item.name}</p>
                          <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                        </div>
                        <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    ))}
                    
                    <div className="pt-4 space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Subtotal ({totalQuantity} items)</span>
                        <span>${order.subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Shipping</span>
                        <span>{order.shipping === 0 ? 'Free' : `$${order.shipping.toFixed(2)}`}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Tax</span>
                        <span>${order.tax.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-lg font-bold pt-2 border-t border-border">
                        <span>Total</span>
                        <span>${order.total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-muted-foreground text-center py-4">
                    Your order details will appear here
                  </p>
                )}
              </motion.div>

              {/* Payment Method */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                className="bg-card rounded-2xl p-6 shadow-premium"
              >
                <div className="flex items-center gap-2 mb-4">
                  <CreditCard className="w-5 h-5 text-accent" />
                  <h2 className="text-lg font-semibold">Payment Method</h2>
                </div>
                <p className="text-foreground">{order.paymentMethod}</p>
                <p className="text-sm text-muted-foreground mt-1">Payment processed successfully</p>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Shipping Address */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-card rounded-2xl p-6 shadow-premium"
              >
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-accent" />
                  <h2 className="text-lg font-semibold">Shipping Address</h2>
                </div>
                <div className="space-y-1">
                  <p className="font-medium">{order.customerName}</p>
                  <p className="text-muted-foreground">{order.shippingAddress.address}</p>
                  <p className="text-muted-foreground">
                    {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.postalCode}
                  </p>
                  <p className="text-muted-foreground">{order.shippingAddress.country}</p>
                </div>
              </motion.div>

              {/* Delivery Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 }}
                className="bg-card rounded-2xl p-6 shadow-premium"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Truck className="w-5 h-5 text-accent" />
                  <h2 className="text-lg font-semibold">Delivery Information</h2>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground">Shipping Method</p>
                    <p className="font-medium">{order.shippingMethod}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Estimated Delivery</p>
                    <p className="font-medium text-green-600">{formatDate(order.estimatedDelivery)}</p>
                  </div>
                </div>
              </motion.div>

              {/* What Happens Next */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-accent/5 border border-accent/20 rounded-2xl p-6"
              >
                <h3 className="font-semibold mb-4">What happens next?</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-accent">1</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      A confirmation email has been sent to <span className="font-medium text-foreground">{order.email}</span>
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-accent">2</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Your order will be processed and shipped within 1-2 business days
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-accent">3</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      You will receive tracking information once your order ships
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
          >
            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Continue Shopping
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors"
            >
              Back to Home
            </Link>
          </motion.div>

          {/* Support */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-sm text-center text-muted-foreground mt-8"
          >
            Questions about your order?{' '}
            <Link href="/contact" className="text-accent hover:underline">
              Contact our support team
            </Link>
          </motion.p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
