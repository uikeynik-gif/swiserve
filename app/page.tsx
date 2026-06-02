'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight, Star, Quote, Send } from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ProductGrid } from '@/components/ProductCard'
import { getBestSellers, getNewArrivals, getTrendingProducts, categories } from '@/lib/products'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const reviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'New York, USA',
    rating: 5,
    text: 'Absolutely love my purchase! The quality exceeded my expectations and shipping was incredibly fast. Will definitely be ordering again.',
    product: 'Premium Wireless Headphones',
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'Los Angeles, USA',
    rating: 5,
    text: 'Swiserve has become my go-to for premium products. Their customer service is outstanding and the products are always top-notch.',
    product: 'Smart Fitness Watch Pro',
  },
  {
    id: 3,
    name: 'Emma Williams',
    location: 'Chicago, USA',
    rating: 5,
    text: 'The espresso machine I ordered is incredible. Makes coffee shop quality drinks at home. Highly recommend Swiserve!',
    product: 'Premium Espresso Machine',
  },
  {
    id: 4,
    name: 'David Martinez',
    location: 'Miami, USA',
    rating: 5,
    text: 'Great selection of products at competitive prices. The website is easy to navigate and checkout was smooth.',
    product: 'Ergonomic Office Chair',
  },
]

export default function HomePage() {
  const bestSellers = getBestSellers()
  const newArrivals = getNewArrivals()
  const trending = getTrendingProducts()
  const [currentReview, setCurrentReview] = useState(0)
  const [email, setEmail] = useState('')

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center pt-32 md:pt-36">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1.5 bg-secondary text-secondary-foreground text-sm font-medium rounded-full mb-6">
                  Premium Quality Products
                </span>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-balance">
                  Discover Premium Products for Modern Living
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                  Shop the finest selection of electronics, smart gadgets, home essentials, 
                  and lifestyle products. Quality meets affordability at Swiserve.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/shop">
                    <Button size="lg" className="gap-2">
                      Shop Now
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Link href="/categories">
                    <Button size="lg" variant="outline">
                      Browse Categories
                    </Button>
                  </Link>
                </div>

                {/* Trust Badges */}
                <div className="flex items-center gap-8 mt-12 pt-8 border-t border-border">
                  <div>
                    <p className="text-2xl font-bold">40+</p>
                    <p className="text-sm text-muted-foreground">Premium Products</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">15K+</p>
                    <p className="text-sm text-muted-foreground">Happy Customers</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">4.8</p>
                    <p className="text-sm text-muted-foreground">Average Rating</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative hidden lg:block"
              >
                <div className="relative aspect-square max-w-lg mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary rounded-3xl rotate-6" />
                  <div className="relative bg-card rounded-3xl overflow-hidden shadow-premium-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80"
                      alt="Premium headphones"
                      width={600}
                      height={600}
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* Floating Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-premium-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                        <Star className="w-6 h-6 text-accent fill-accent" />
                      </div>
                      <div>
                        <p className="font-medium">Best Seller</p>
                        <p className="text-sm text-muted-foreground">Premium Headphones</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Price Tag */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="absolute -top-4 -right-4 glass rounded-2xl p-4 shadow-premium-lg"
                  >
                    <p className="text-sm text-muted-foreground">Starting from</p>
                    <p className="text-2xl font-bold">$149.99</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2">
                  Shop by Category
                </h2>
                <p className="text-muted-foreground">
                  Explore our curated collection of premium products
                </p>
              </div>
              <Link href="/categories" className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors">
                View All
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {categories.slice(0, 8).map((category, index) => (
                <motion.div
                  key={category.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link
                    href={`/shop?category=${category.slug}`}
                    className="group relative block aspect-[4/5] rounded-2xl overflow-hidden shadow-premium hover-lift"
                  >
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                      <h3 className="text-white font-medium text-lg md:text-xl mb-1">
                        {category.name}
                      </h3>
                      <p className="text-white/70 text-sm hidden md:block">
                        {category.productCount} Products
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Best Sellers Section */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-3">
                  Most Popular
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2">
                  Best Sellers
                </h2>
                <p className="text-muted-foreground">
                  Our customers&apos; top picks
                </p>
              </div>
              <Link href="/shop?filter=bestseller" className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors">
                View All
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <ProductGrid products={bestSellers.slice(0, 4)} />
          </div>
        </section>

        {/* New Arrivals Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-600 text-sm font-medium rounded-full mb-3">
                  Just Landed
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2">
                  New Arrivals
                </h2>
                <p className="text-muted-foreground">
                  Fresh additions to our collection
                </p>
              </div>
              <Link href="/shop?filter=new" className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors">
                View All
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <ProductGrid products={newArrivals.slice(0, 4)} />
          </div>
        </section>

        {/* Trending Section */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <span className="inline-block px-3 py-1 bg-orange-500/10 text-orange-600 text-sm font-medium rounded-full mb-3">
                  Hot Right Now
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2">
                  Trending Products
                </h2>
                <p className="text-muted-foreground">
                  What everyone is talking about
                </p>
              </div>
              <Link href="/shop?filter=trending" className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors">
                View All
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <ProductGrid products={trending.slice(0, 4)} />
          </div>
        </section>

        {/* Customer Reviews Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2">
                What Our Customers Say
              </h2>
              <p className="text-muted-foreground">
                Real reviews from real customers
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <motion.div
                key={currentReview}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-3xl p-8 md:p-12"
              >
                <Quote className="w-12 h-12 text-accent/30 mb-6" />
                <p className="text-xl md:text-2xl leading-relaxed mb-8">
                  {`"${reviews[currentReview].text}"`}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < reviews[currentReview].rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'fill-gray-200 text-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="font-medium">{reviews[currentReview].name}</p>
                    <p className="text-sm text-muted-foreground">
                      {reviews[currentReview].location}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground hidden md:block">
                    Purchased: {reviews[currentReview].product}
                  </p>
                </div>
              </motion.div>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={prevReview}
                  className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex gap-2">
                  {reviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentReview(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentReview
                          ? 'bg-accent w-6'
                          : 'bg-border hover:bg-muted-foreground'
                      }`}
                      aria-label={`Go to review ${index + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextReview}
                  className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Stay in the Loop
              </h2>
              <p className="text-primary-foreground/70 mb-8">
                Subscribe to our newsletter for exclusive deals, new arrivals, 
                and insider-only discounts.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setEmail('')
                  alert('Thank you for subscribing!')
                }}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
                <Button type="submit" variant="secondary" className="gap-2">
                  Subscribe
                  <Send className="w-4 h-4" />
                </Button>
              </form>
              <p className="text-sm text-primary-foreground/50 mt-4">
                No spam, unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
