'use client'

import { createContext, useContext, ReactNode } from 'react'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  category: string
  subcategory?: string
  images: string[]
  rating: number
  reviewCount: number
  inStock: boolean
  specifications: Record<string, string>
  features: string[]
  badge?: 'bestseller' | 'new' | 'trending' | 'sale'
}

export interface CartItem extends Product {
  quantity: number
}

export interface WishlistItem extends Product {}

interface StoreState {
  cart: CartItem[]
  wishlist: WishlistItem[]
  recentlyViewed: Product[]
  addToCart: (product: Product, quantity?: number) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  addToWishlist: (product: Product) => void
  removeFromWishlist: (productId: string) => void
  isInWishlist: (productId: string) => boolean
  addToRecentlyViewed: (product: Product) => void
  getCartTotal: () => number
  getCartCount: () => number
}

const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      cart: [],
      wishlist: [],
      recentlyViewed: [],
      
      addToCart: (product, quantity = 1) => {
        set((state) => {
          const existingItem = state.cart.find((item) => item.id === product.id)
          if (existingItem) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
            }
          }
          return { cart: [...state.cart, { ...product, quantity }] }
        })
      },
      
      removeFromCart: (productId) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
        }))
      },
      
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(productId)
          return
        }
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === productId ? { ...item, quantity } : item
          ),
        }))
      },
      
      clearCart: () => set({ cart: [] }),
      
      addToWishlist: (product) => {
        set((state) => {
          if (state.wishlist.find((item) => item.id === product.id)) {
            return state
          }
          return { wishlist: [...state.wishlist, product] }
        })
      },
      
      removeFromWishlist: (productId) => {
        set((state) => ({
          wishlist: state.wishlist.filter((item) => item.id !== productId),
        }))
      },
      
      isInWishlist: (productId) => {
        return get().wishlist.some((item) => item.id === productId)
      },
      
      addToRecentlyViewed: (product) => {
        set((state) => {
          const filtered = state.recentlyViewed.filter((p) => p.id !== product.id)
          return { recentlyViewed: [product, ...filtered].slice(0, 10) }
        })
      },
      
      getCartTotal: () => {
        return get().cart.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        )
      },
      
      getCartCount: () => {
        return get().cart.reduce((count, item) => count + item.quantity, 0)
      },
    }),
    {
      name: 'swiserve-store',
    }
  )
)

const StoreContext = createContext<typeof useStore | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  return (
    <StoreContext.Provider value={useStore}>
      {children}
    </StoreContext.Provider>
  )
}

export function useCart() {
  const store = useStore()
  return {
    cart: store.cart,
    addToCart: store.addToCart,
    removeFromCart: store.removeFromCart,
    updateQuantity: store.updateQuantity,
    clearCart: store.clearCart,
    getCartTotal: store.getCartTotal,
    getCartCount: store.getCartCount,
  }
}

export function useWishlist() {
  const store = useStore()
  return {
    wishlist: store.wishlist,
    addToWishlist: store.addToWishlist,
    removeFromWishlist: store.removeFromWishlist,
    isInWishlist: store.isInWishlist,
  }
}

export function useRecentlyViewed() {
  const store = useStore()
  return {
    recentlyViewed: store.recentlyViewed,
    addToRecentlyViewed: store.addToRecentlyViewed,
  }
}

export { useStore }
