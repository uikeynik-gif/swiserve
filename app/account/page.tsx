'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { User, Mail, ShoppingBag, Heart, MapPin, Package, ChevronRight, LogOut, UserCircle } from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { useGuestStore } from '@/lib/guest'
import { useCart, useWishlist } from '@/lib/store'
import Link from 'next/link'

export default function AccountPage() {
  const { guest, isLoggedIn, continueAsGuest, updateGuestInfo, logout } = useGuestStore()
  const { cart } = useCart()
  const { wishlist } = useWishlist()
  const [mounted, setMounted] = useState(false)
  const [guestName, setGuestName] = useState('')
  const [guestEmail, setGuestEmail] = useState('')
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (guest) {
      setGuestName(guest.name)
      setGuestEmail(guest.email)
    }
  }, [guest])

  const handleContinueAsGuest = () => {
    continueAsGuest(guestName || 'Guest User', guestEmail)
  }

  const handleUpdateProfile = () => {
    if (guestName.trim()) {
      updateGuestInfo(guestName, guestEmail)
      setIsEditing(false)
    }
  }

  if (!mounted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="animate-pulse">
              <div className="h-8 bg-muted rounded w-1/3 mb-8" />
              <div className="h-64 bg-muted rounded-2xl" />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 md:pt-36 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {!isLoggedIn ? (
            // Guest Login Form
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-md mx-auto"
            >
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserCircle className="w-10 h-10 text-primary" />
                </div>
                <h1 className="text-3xl font-bold mb-2">Welcome to Swiserve</h1>
                <p className="text-muted-foreground">
                  Continue as a guest to start shopping. No account required!
                </p>
              </div>

              <div className="glass rounded-2xl p-6 shadow-premium">
                <h2 className="text-lg font-semibold mb-4">Continue as Guest</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Enter your details to save your preferences and track orders.
                </p>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                      Name (Optional)
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="text"
                        id="name"
                        value={guestName}
                        onChange={(e) => setGuestName(e.target.value)}
                        placeholder="Enter your name"
                        className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                      Email (Optional)
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="email"
                        id="email"
                        value={guestEmail}
                        onChange={(e) => setGuestEmail(e.target.value)}
                        placeholder="Enter your email for order updates"
                        className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleContinueAsGuest}
                    className="w-full py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors"
                  >
                    Continue as Guest
                  </button>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-xs text-muted-foreground text-center">
                    By continuing, you agree to our{' '}
                    <Link href="/terms" className="text-primary hover:underline">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link href="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground">
                  Want a full account?{' '}
                  <span className="text-primary">Coming soon!</span>
                </p>
              </div>
            </motion.div>
          ) : (
            // Account Dashboard
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {/* Welcome Header */}
              <div className="glass rounded-2xl p-6 shadow-premium mb-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Welcome back,</p>
                    <h1 className="text-2xl font-bold">{guest?.name || 'Guest User'}</h1>
                    {guest?.email && (
                      <p className="text-sm text-muted-foreground">{guest.email}</p>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setIsEditing(true)}
                      className="px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10 rounded-lg transition-colors"
                    >
                      Edit Profile
                    </button>
                    <button
                      onClick={logout}
                      className="px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-2"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>

              {/* Edit Profile Modal */}
              {isEditing && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
                  onClick={() => setIsEditing(false)}
                >
                  <motion.div
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    className="bg-card rounded-2xl p-6 w-full max-w-md shadow-premium-lg"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-1.5">Name</label>
                        <input
                          type="text"
                          value={guestName}
                          onChange={(e) => setGuestName(e.target.value)}
                          className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1.5">Email</label>
                        <input
                          type="email"
                          value={guestEmail}
                          onChange={(e) => setGuestEmail(e.target.value)}
                          className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                      <div className="flex gap-3 pt-2">
                        <button
                          onClick={() => setIsEditing(false)}
                          className="flex-1 py-3 border border-border rounded-xl font-medium hover:bg-secondary/50 transition-colors"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleUpdateProfile}
                          className="flex-1 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors"
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="glass rounded-xl p-4 text-center">
                  <ShoppingBag className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <p className="text-2xl font-bold">{cart.length}</p>
                  <p className="text-sm text-muted-foreground">Cart Items</p>
                </div>
                <div className="glass rounded-xl p-4 text-center">
                  <Heart className="w-6 h-6 mx-auto mb-2 text-red-500" />
                  <p className="text-2xl font-bold">{wishlist.length}</p>
                  <p className="text-sm text-muted-foreground">Wishlist</p>
                </div>
                <div className="glass rounded-xl p-4 text-center">
                  <Package className="w-6 h-6 mx-auto mb-2 text-accent" />
                  <p className="text-2xl font-bold">0</p>
                  <p className="text-sm text-muted-foreground">Orders</p>
                </div>
                <div className="glass rounded-xl p-4 text-center">
                  <MapPin className="w-6 h-6 mx-auto mb-2 text-green-500" />
                  <p className="text-2xl font-bold">0</p>
                  <p className="text-sm text-muted-foreground">Addresses</p>
                </div>
              </div>

              {/* Quick Links */}
              <div className="glass rounded-2xl shadow-premium overflow-hidden">
                <div className="p-4 border-b border-border">
                  <h2 className="font-semibold">Quick Actions</h2>
                </div>
                <div className="divide-y divide-border">
                  <Link
                    href="/cart"
                    className="flex items-center gap-4 p-4 hover:bg-secondary/30 transition-colors"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <ShoppingBag className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">View Cart</p>
                      <p className="text-sm text-muted-foreground">{cart.length} items in your cart</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </Link>
                  <Link
                    href="/wishlist"
                    className="flex items-center gap-4 p-4 hover:bg-secondary/30 transition-colors"
                  >
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                      <Heart className="w-5 h-5 text-red-500" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">View Wishlist</p>
                      <p className="text-sm text-muted-foreground">{wishlist.length} saved items</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </Link>
                  <Link
                    href="/shop"
                    className="flex items-center gap-4 p-4 hover:bg-secondary/30 transition-colors"
                  >
                    <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                      <Package className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Continue Shopping</p>
                      <p className="text-sm text-muted-foreground">Browse our products</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </Link>
                </div>
              </div>

              {/* Guest Notice */}
              <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-xl">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Guest Account:</span> Your data is stored locally on this device. 
                  For a persistent experience across devices, full accounts are coming soon!
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
