'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ShoppingBag, Heart, Menu, X, User, ChevronDown, Globe, Check, LogOut } from 'lucide-react'
import { useCart, useWishlist } from '@/lib/store'
import { categories } from '@/lib/products'
import { useLocale, countries, Country } from '@/lib/locale'
import { useGuestStore } from '@/lib/guest'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/shop' },
  { name: 'Categories', href: '/categories', hasDropdown: true },
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isCountryModalOpen, setIsCountryModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false)

  const { getCartCount } = useCart()
  const { wishlist } = useWishlist()
  const { selectedCountry, setCountry } = useLocale()
  const { guest, isLoggedIn, logout } = useGuestStore()
  const [mounted, setMounted] = useState(false)
  const [showAccountMenu, setShowAccountMenu] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const cartCount = mounted ? getCartCount() : 0
  const wishlistCount = mounted ? wishlist.length : 0
  const currentCountry = mounted ? selectedCountry : countries[0]

  const handleCountrySelect = (country: Country) => {
    setCountry(country)
    setIsCountryModalOpen(false)
  }

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-center text-xs md:text-sm">
        <div className="container mx-auto px-4 flex items-center justify-center gap-2">
          <span className="hidden sm:inline">Global. Trusted. Innovative.</span>
          <span className="hidden sm:inline">|</span>
          <span>Free Worldwide Shipping on Orders $50+</span>
        </div>
      </div>

      <header
        className={`fixed top-8 md:top-9 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass shadow-premium py-2'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/swiserve-logo.jpg"
                alt="Swiserve"
                width={56}
                height={56}
                className="w-12 h-12 md:w-14 md:h-14 object-contain rounded-lg"
                priority
              />
              <div className="flex flex-col">
                <span 
                  className="text-xl md:text-2xl font-bold tracking-wider text-foreground"
                  style={{ fontFamily: 'var(--font-logo)' }}
                >
                  SWISERVE
                </span>
                <span className="text-[8px] md:text-[9px] text-muted-foreground tracking-[0.15em] hidden sm:block">
                  GLOBAL. TRUSTED. INNOVATIVE.
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setShowCategoriesDropdown(true)}
                  onMouseLeave={() => link.hasDropdown && setShowCategoriesDropdown(false)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </Link>

                  {/* Categories Dropdown */}
                  {link.hasDropdown && (
                    <AnimatePresence>
                      {showCategoriesDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 pt-4"
                        >
                          <div className="glass rounded-xl shadow-premium-lg p-4 min-w-[240px]">
                            {categories.map((category) => (
                              <Link
                                key={category.slug}
                                href={`/shop?category=${category.slug}`}
                                className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
                              >
                                {category.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2 md:gap-3">
              {/* Country/Currency Selector */}
              <button
                onClick={() => setIsCountryModalOpen(true)}
                className="flex items-center gap-1.5 px-2 py-1.5 rounded-full hover:bg-secondary/50 transition-colors text-sm"
                aria-label="Select country and currency"
              >
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline font-medium">{currentCountry.flag} {currentCountry.currency}</span>
                <ChevronDown className="w-3 h-3 hidden sm:block" />
              </button>

              {/* Search */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 rounded-full hover:bg-secondary/50 transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist */}
              <Link
                href="/wishlist"
                className="relative p-2 rounded-full hover:bg-secondary/50 transition-colors hidden sm:block"
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-accent-foreground text-xs font-medium rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Cart */}
              <Link
                href="/cart"
                className="relative p-2 rounded-full hover:bg-secondary/50 transition-colors"
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-accent-foreground text-xs font-medium rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* Account */}
              <div 
                className="relative hidden sm:block"
                onMouseEnter={() => setShowAccountMenu(true)}
                onMouseLeave={() => setShowAccountMenu(false)}
              >
                <Link
                  href="/account"
                  className="p-2 rounded-full hover:bg-secondary/50 transition-colors flex items-center gap-2"
                  aria-label="Account"
                >
                  <User className="w-5 h-5" />
                  {mounted && isLoggedIn && guest && (
                    <span className="text-sm font-medium hidden md:inline max-w-[100px] truncate">
                      {guest.name}
                    </span>
                  )}
                </Link>

                {/* Account Dropdown */}
                <AnimatePresence>
                  {showAccountMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 pt-2"
                    >
                      <div className="glass rounded-xl shadow-premium-lg p-2 min-w-[180px]">
                        {mounted && isLoggedIn && guest ? (
                          <>
                            <div className="px-3 py-2 border-b border-border mb-1">
                              <p className="text-sm font-medium truncate">{guest.name}</p>
                              <p className="text-xs text-muted-foreground truncate">{guest.email || 'Guest User'}</p>
                            </div>
                            <Link
                              href="/account"
                              className="flex items-center gap-2 px-3 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
                            >
                              <User className="w-4 h-4" />
                              My Account
                            </Link>
                            <Link
                              href="/orders"
                              className="flex items-center gap-2 px-3 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
                            >
                              <ShoppingBag className="w-4 h-4" />
                              Orders
                            </Link>
                            <button
                              onClick={() => {
                                logout()
                                setShowAccountMenu(false)
                              }}
                              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              <LogOut className="w-4 h-4" />
                              Sign Out
                            </button>
                          </>
                        ) : (
                          <>
                            <Link
                              href="/account"
                              className="flex items-center gap-2 px-3 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
                            >
                              <User className="w-4 h-4" />
                              Sign In / Guest
                            </Link>
                          </>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 rounded-full hover:bg-secondary/50 transition-colors lg:hidden"
                aria-label="Menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Country/Currency Modal */}
      <AnimatePresence>
        {isCountryModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/50 flex items-center justify-center p-4"
            onClick={() => setIsCountryModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-card rounded-2xl shadow-premium-lg w-full max-w-md max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <div>
                  <h2 className="text-lg font-semibold">Select Your Region</h2>
                  <p className="text-sm text-muted-foreground">Choose your country and currency</p>
                </div>
                <button
                  onClick={() => setIsCountryModalOpen(false)}
                  className="p-2 hover:bg-secondary/50 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Country List */}
              <div className="p-2 overflow-y-auto max-h-[60vh]">
                {countries.map((country) => (
                  <button
                    key={country.code}
                    onClick={() => handleCountrySelect(country)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                      currentCountry.code === country.code
                        ? 'bg-primary/10 border border-primary/20'
                        : 'hover:bg-secondary/50'
                    }`}
                  >
                    <span className="text-2xl">{country.flag}</span>
                    <div className="flex-1 text-left">
                      <p className="font-medium">{country.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {country.currency} ({country.currencySymbol})
                      </p>
                    </div>
                    {currentCountry.code === country.code && (
                      <Check className="w-5 h-5 text-primary" />
                    )}
                  </button>
                ))}
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-border bg-muted/30">
                <p className="text-xs text-muted-foreground text-center">
                  Prices and shipping rates may vary based on your selected region
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/50 flex items-start justify-center pt-20 md:pt-32 px-4"
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="glass rounded-2xl shadow-premium-lg w-full max-w-2xl p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <form
                action="/shop"
                method="GET"
                className="flex items-center gap-3"
              >
                <Search className="w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  name="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground text-lg"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="p-2 hover:bg-secondary/50 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/50 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-background shadow-premium-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-border">
                <div className="flex items-center gap-2">
                <span 
                  className="text-lg font-bold tracking-wider"
                  style={{ fontFamily: 'var(--font-logo)' }}
                >
                  SWISERVE
                </span>
              </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-secondary/50 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Country Selector */}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  setIsCountryModalOpen(true)
                }}
                className="w-full flex items-center gap-3 px-6 py-4 border-b border-border hover:bg-secondary/30 transition-colors"
              >
                <Globe className="w-5 h-5" />
                <div className="flex-1 text-left">
                  <p className="text-sm text-muted-foreground">Shipping to</p>
                  <p className="font-medium">{currentCountry.flag} {currentCountry.name} ({currentCountry.currency})</p>
                </div>
                <ChevronDown className="w-4 h-4" />
              </button>

              <nav className="p-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="pt-4 border-t border-border mt-4">
                  <Link
                    href="/wishlist"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
                  >
                    <Heart className="w-5 h-5" />
                    Wishlist
                    {wishlistCount > 0 && (
                      <span className="ml-auto bg-accent text-accent-foreground text-xs font-medium px-2 py-0.5 rounded-full">
                        {wishlistCount}
                      </span>
                    )}
                  </Link>
                  <Link
                    href="/account"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
                  >
                    <User className="w-5 h-5" />
                    Account
                  </Link>
                </div>

                <div className="pt-4 border-t border-border mt-4 space-y-1">
                  <Link
                    href="/faq"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    FAQ
                  </Link>
                  <Link
                    href="/shipping"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Shipping Policy
                  </Link>
                  <Link
                    href="/terms"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                </div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
