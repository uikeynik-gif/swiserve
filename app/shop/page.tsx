'use client'

import { useState, useEffect, useMemo, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Filter, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ProductGrid } from '@/components/ProductCard'
import { products, categories, filterProducts, searchProducts } from '@/lib/products'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

function ShopContent() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get('category')
  const filterParam = searchParams.get('filter')
  const searchParam = searchParams.get('search')

  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam)
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000])
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'rating' | 'newest'>('rating')
  const [showFilters, setShowFilters] = useState(false)
  const [searchQuery, setSearchQuery] = useState(searchParam || '')

  useEffect(() => {
    setSelectedCategory(categoryParam)
  }, [categoryParam])

  useEffect(() => {
    setSearchQuery(searchParam || '')
  }, [searchParam])

  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Apply search
    if (searchQuery) {
      result = searchProducts(searchQuery)
    }

    // Apply filter param (bestseller, new, trending, sale)
    if (filterParam) {
      result = result.filter((p) => p.badge === filterParam)
    }

    // Apply category
    if (selectedCategory) {
      result = result.filter(
        (p) => p.category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '').replace(/--/g, '-') === selectedCategory.toLowerCase()
      )
    }

    // Apply price range
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])

    // Apply sorting
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
        result = result.filter((p) => p.badge === 'new').concat(result.filter((p) => p.badge !== 'new'))
        break
    }

    return result
  }, [selectedCategory, priceRange, sortBy, filterParam, searchQuery])

  const clearFilters = () => {
    setSelectedCategory(null)
    setPriceRange([0, 1000])
    setSortBy('rating')
    setSearchQuery('')
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2">
              {filterParam === 'bestseller' && 'Best Sellers'}
              {filterParam === 'new' && 'New Arrivals'}
              {filterParam === 'trending' && 'Trending Products'}
              {filterParam === 'sale' && 'On Sale'}
              {!filterParam && selectedCategory
                ? categories.find((c) => c.slug === selectedCategory)?.name || 'Shop'
                : !filterParam && 'All Products'}
            </h1>
            <p className="text-muted-foreground">
              {searchQuery
                ? `Showing results for "${searchQuery}"`
                : `Showing ${filteredProducts.length} products`}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters - Desktop */}
            <aside className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-28 space-y-6">
                {/* Search */}
                <div>
                  <h3 className="font-medium mb-3">Search</h3>
                  <Input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                {/* Categories */}
                <div>
                  <h3 className="font-medium mb-3">Categories</h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => setSelectedCategory(null)}
                      className={cn(
                        'block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors',
                        !selectedCategory
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-secondary'
                      )}
                    >
                      All Products
                    </button>
                    {categories.map((category) => (
                      <button
                        key={category.slug}
                        onClick={() => setSelectedCategory(category.slug)}
                        className={cn(
                          'block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors',
                          selectedCategory === category.slug
                            ? 'bg-primary text-primary-foreground'
                            : 'hover:bg-secondary'
                        )}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="font-medium mb-3">Price Range</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Input
                        type="number"
                        placeholder="Min"
                        value={priceRange[0]}
                        onChange={(e) =>
                          setPriceRange([Number(e.target.value), priceRange[1]])
                        }
                        className="w-full"
                      />
                      <span className="text-muted-foreground">-</span>
                      <Input
                        type="number"
                        placeholder="Max"
                        value={priceRange[1]}
                        onChange={(e) =>
                          setPriceRange([priceRange[0], Number(e.target.value)])
                        }
                        className="w-full"
                      />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {[
                        [0, 50],
                        [50, 100],
                        [100, 250],
                        [250, 500],
                        [500, 1000],
                      ].map(([min, max]) => (
                        <button
                          key={`${min}-${max}`}
                          onClick={() => setPriceRange([min, max])}
                          className={cn(
                            'px-3 py-1 text-xs rounded-full border transition-colors',
                            priceRange[0] === min && priceRange[1] === max
                              ? 'bg-primary text-primary-foreground border-primary'
                              : 'border-border hover:border-primary'
                          )}
                        >
                          ${min} - ${max}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Clear Filters */}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearFilters}
                  className="w-full"
                >
                  Clear All Filters
                </Button>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Mobile Filter Bar */}
              <div className="flex items-center justify-between gap-4 mb-6 lg:mb-8">
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(true)}
                  className="lg:hidden gap-2"
                >
                  <Filter className="w-4 h-4" />
                  Filters
                </Button>

                {/* Sort Dropdown */}
                <div className="relative ml-auto">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                    className="appearance-none bg-secondary px-4 py-2 pr-10 rounded-lg text-sm font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="rating">Top Rated</option>
                    <option value="newest">Newest</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
                </div>
              </div>

              {/* Active Filters */}
              {(selectedCategory || searchQuery || priceRange[0] > 0 || priceRange[1] < 1000) && (
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <span className="text-sm text-muted-foreground">Active Filters:</span>
                  {selectedCategory && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-secondary rounded-full text-sm">
                      {categories.find((c) => c.slug === selectedCategory)?.name}
                      <button onClick={() => setSelectedCategory(null)}>
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {searchQuery && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-secondary rounded-full text-sm">
                      Search: {searchQuery}
                      <button onClick={() => setSearchQuery('')}>
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {(priceRange[0] > 0 || priceRange[1] < 1000) && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-secondary rounded-full text-sm">
                      ${priceRange[0]} - ${priceRange[1]}
                      <button onClick={() => setPriceRange([0, 1000])}>
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                </div>
              )}

              {/* Products Grid */}
              {filteredProducts.length > 0 ? (
                <ProductGrid products={filteredProducts} />
              ) : (
                <div className="text-center py-16">
                  <SlidersHorizontal className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">No products found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your filters or search query
                  </p>
                  <Button onClick={clearFilters}>Clear Filters</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Filters Drawer */}
      {showFilters && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/50 lg:hidden"
          onClick={() => setShowFilters(false)}
        >
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="absolute left-0 top-0 bottom-0 w-full max-w-sm bg-background shadow-premium-lg overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-border">
              <span className="font-medium">Filters</span>
              <button onClick={() => setShowFilters(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 space-y-6">
              {/* Search */}
              <div>
                <h3 className="font-medium mb-3">Search</h3>
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Categories */}
              <div>
                <h3 className="font-medium mb-3">Categories</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      setSelectedCategory(null)
                      setShowFilters(false)
                    }}
                    className={cn(
                      'block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors',
                      !selectedCategory
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-secondary'
                    )}
                  >
                    All Products
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.slug}
                      onClick={() => {
                        setSelectedCategory(category.slug)
                        setShowFilters(false)
                      }}
                      className={cn(
                        'block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors',
                        selectedCategory === category.slug
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-secondary'
                      )}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-medium mb-3">Price Range</h3>
                <div className="flex items-center gap-2">
                  <Input
                    type="number"
                    placeholder="Min"
                    value={priceRange[0]}
                    onChange={(e) =>
                      setPriceRange([Number(e.target.value), priceRange[1]])
                    }
                    className="w-full"
                  />
                  <span className="text-muted-foreground">-</span>
                  <Input
                    type="number"
                    placeholder="Max"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], Number(e.target.value)])
                    }
                    className="w-full"
                  />
                </div>
              </div>

              {/* Clear Filters */}
              <Button
                variant="outline"
                onClick={() => {
                  clearFilters()
                  setShowFilters(false)
                }}
                className="w-full"
              >
                Clear All Filters
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </div>
  )
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <ShopContent />
    </Suspense>
  )
}
