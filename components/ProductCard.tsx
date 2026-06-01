'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Heart, ShoppingBag, Star, Eye } from 'lucide-react'
import { Product } from '@/lib/store'
import { useCart, useWishlist } from '@/lib/store'
import { useLocale } from '@/lib/locale'
import { cn } from '@/lib/utils'

interface ProductCardProps {
  product: Product
  index?: number
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const { formatPrice } = useLocale()

  useEffect(() => {
    setMounted(true)
  }, [])

  const inWishlist = mounted ? isInWishlist(product.id) : false

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (inWishlist) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
  }

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product)
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div
        className="group relative bg-card rounded-2xl overflow-hidden shadow-premium hover-lift"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <Link href={`/product/${product.id}`} className="block">
          <div className="relative aspect-square overflow-hidden bg-secondary/30">
            {!imageLoaded && (
              <div className="absolute inset-0 bg-muted animate-pulse" />
            )}
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className={cn(
                "object-cover transition-transform duration-500",
                isHovered && "scale-110",
                imageLoaded ? "opacity-100" : "opacity-0"
              )}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              onLoad={() => setImageLoaded(true)}
            />

            {/* Hover Image */}
            {product.images[1] && (
              <Image
                src={product.images[1]}
                alt={product.name}
                fill
                className={cn(
                  "object-cover absolute inset-0 transition-opacity duration-500",
                  isHovered ? "opacity-100" : "opacity-0"
                )}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            )}

            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {product.badge && (
                <span
                  className={cn(
                    "px-2.5 py-1 text-xs font-medium rounded-full",
                    product.badge === 'bestseller' && "bg-accent text-accent-foreground",
                    product.badge === 'new' && "bg-blue-500 text-white",
                    product.badge === 'trending' && "bg-orange-500 text-white",
                    product.badge === 'sale' && "bg-red-500 text-white"
                  )}
                >
                  {product.badge === 'bestseller' && 'Best Seller'}
                  {product.badge === 'new' && 'New'}
                  {product.badge === 'trending' && 'Trending'}
                  {product.badge === 'sale' && `${discount}% Off`}
                </span>
              )}
            </div>
          </div>
        </Link>

        {/* Quick Actions - Outside the Link to avoid nesting */}
        <div
          className={cn(
            "absolute top-3 right-3 flex flex-col gap-2 transition-all duration-300 z-10",
            isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
          )}
        >
          <button
            onClick={handleWishlistClick}
            className={cn(
              "p-2 rounded-full transition-colors shadow-md",
              inWishlist
                ? "bg-red-500 text-white"
                : "bg-card hover:bg-secondary"
            )}
            aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart className={cn("w-4 h-4", inWishlist && "fill-current")} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              window.location.href = `/product/${product.id}`
            }}
            className="p-2 rounded-full bg-card hover:bg-secondary transition-colors shadow-md"
            aria-label="Quick view"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>

        {/* Add to Cart Button */}
        <div
          className={cn(
            "absolute bottom-[calc(100%-theme(spacing.square)+1rem)] left-0 right-0 p-3 transition-all duration-300 z-10",
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
          style={{ bottom: 'auto', top: 'calc(100% - 180px)' }}
        >
          <button
            onClick={handleAddToCart}
            className="w-full py-2.5 bg-primary text-primary-foreground rounded-lg font-medium text-sm flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Cart
          </button>
        </div>

        {/* Product Info */}
        <Link href={`/product/${product.id}`} className="block p-4">
          <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
          <h3 className="font-medium text-foreground line-clamp-2 mb-2 group-hover:text-accent transition-colors">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{product.rating}</span>
            <span className="text-xs text-muted-foreground">
              ({product.reviewCount.toLocaleString()})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-foreground">
              {mounted ? formatPrice(product.price) : `$${product.price.toFixed(2)}`}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {mounted ? formatPrice(product.originalPrice) : `$${product.originalPrice.toFixed(2)}`}
              </span>
            )}
          </div>
        </Link>
      </div>
    </motion.div>
  )
}

interface ProductGridProps {
  products: Product[]
  columns?: 2 | 3 | 4
}

export function ProductGrid({ products, columns = 4 }: ProductGridProps) {
  return (
    <div
      className={cn(
        "grid gap-4 md:gap-6",
        columns === 2 && "grid-cols-1 sm:grid-cols-2",
        columns === 3 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        columns === 4 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      )}
    >
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  )
}
