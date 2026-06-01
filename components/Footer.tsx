'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, Shield, Truck, CreditCard, RefreshCw } from 'lucide-react'

const footerLinks = {
  shop: [
    { name: 'All Products', href: '/shop' },
    { name: 'Best Sellers', href: '/shop?filter=bestseller' },
    { name: 'New Arrivals', href: '/shop?filter=new' },
    { name: 'On Sale', href: '/shop?filter=sale' },
  ],
  categories: [
    { name: 'Electronics', href: '/shop?category=electronics' },
    { name: 'Smart Gadgets', href: '/shop?category=smart-gadgets' },
    { name: 'Home & Kitchen', href: '/shop?category=home-kitchen' },
    { name: 'Office Accessories', href: '/shop?category=office-accessories' },
    { name: 'Travel Accessories', href: '/shop?category=travel-accessories' },
    { name: 'Fitness Equipment', href: '/shop?category=fitness-equipment' },
    { name: 'Lifestyle Products', href: '/shop?category=lifestyle-products' },
  ],
  support: [
    { name: 'FAQ', href: '/faq' },
    { name: 'Shipping Policy', href: '/shipping-policy' },
    { name: 'Return Policy', href: '/return-policy' },
    { name: 'Track Order', href: '/track-order' },
    { name: 'Contact Us', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms & Conditions', href: '/terms' },
  ],
}

const features = [
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'On orders over $50',
  },
  {
    icon: RefreshCw,
    title: 'Easy Returns',
    description: '30-day return policy',
  },
  {
    icon: Shield,
    title: 'Secure Payment',
    description: '100% secure checkout',
  },
  {
    icon: CreditCard,
    title: 'Multiple Payment Options',
    description: 'Card, UPI, COD & more',
  },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Features Bar */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary-foreground/10">
                  <feature.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-sm">{feature.title}</h4>
                  <p className="text-xs text-primary-foreground/70">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-4">
              <Image
                src="/images/swiserve-logo.jpg"
                alt="Swiserve"
                width={56}
                height={56}
                className="w-12 h-12 object-contain rounded-lg"
              />
              <div className="flex flex-col">
                <span 
                  className="text-xl font-bold tracking-wider"
                  style={{ fontFamily: 'var(--font-logo)' }}
                >
                  SWISERVE
                </span>
                <span className="text-[8px] text-primary-foreground/70 tracking-[0.15em]">
                  GLOBAL. TRUSTED. INNOVATIVE.
                </span>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/70 mb-6 max-w-sm">
              A United States-based global eCommerce company dedicated to delivering 
              premium-quality products at competitive prices worldwide.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-primary-foreground/70" />
                <span>United States</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-primary-foreground/70" />
                <a href="mailto:swiserve.global@gmail.com" className="hover:underline">
                  swiserve.global@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-medium mb-4">Shop</h4>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-medium mb-4">Categories</h4>
            <ul className="space-y-2">
              {footerLinks.categories.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-medium mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-medium mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/70">
              &copy; {new Date().getFullYear()} Swiserve. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs text-primary-foreground/50">We Accept:</span>
              <div className="flex items-center gap-2">
                {['Visa', 'Mastercard', 'UPI', 'PayPal'].map((method) => (
                  <span
                    key={method}
                    className="px-2 py-1 text-xs bg-primary-foreground/10 rounded"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
