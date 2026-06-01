import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface GuestUser {
  id: string
  name: string
  email: string
  isGuest: true
  createdAt: string
}

interface GuestStore {
  guest: GuestUser | null
  isLoggedIn: boolean
  continueAsGuest: (name?: string, email?: string) => void
  updateGuestInfo: (name: string, email: string) => void
  logout: () => void
}

const generateGuestId = () => `guest_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

export const useGuestStore = create<GuestStore>()(
  persist(
    (set) => ({
      guest: null,
      isLoggedIn: false,
      continueAsGuest: (name?: string, email?: string) => {
        const guestUser: GuestUser = {
          id: generateGuestId(),
          name: name || 'Guest User',
          email: email || '',
          isGuest: true,
          createdAt: new Date().toISOString(),
        }
        set({ guest: guestUser, isLoggedIn: true })
      },
      updateGuestInfo: (name: string, email: string) => {
        set((state) => ({
          guest: state.guest ? { ...state.guest, name, email } : null,
        }))
      },
      logout: () => {
        set({ guest: null, isLoggedIn: false })
      },
    }),
    {
      name: 'swiserve-guest-storage',
    }
  )
)
