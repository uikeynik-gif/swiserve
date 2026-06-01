'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Country {
  code: string
  name: string
  flag: string
  currency: string
  currencySymbol: string
  locale: string
}

export const countries: Country[] = [
  { code: 'US', name: 'United States', flag: '🇺🇸', currency: 'USD', currencySymbol: '$', locale: 'en-US' },
  { code: 'IN', name: 'India', flag: '🇮🇳', currency: 'INR', currencySymbol: '₹', locale: 'en-IN' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧', currency: 'GBP', currencySymbol: '£', locale: 'en-GB' },
  { code: 'EU', name: 'European Union', flag: '🇪🇺', currency: 'EUR', currencySymbol: '€', locale: 'en-EU' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦', currency: 'CAD', currencySymbol: 'CA$', locale: 'en-CA' },
  { code: 'AU', name: 'Australia', flag: '🇦🇺', currency: 'AUD', currencySymbol: 'A$', locale: 'en-AU' },
  { code: 'JP', name: 'Japan', flag: '🇯🇵', currency: 'JPY', currencySymbol: '¥', locale: 'ja-JP' },
  { code: 'AE', name: 'United Arab Emirates', flag: '🇦🇪', currency: 'AED', currencySymbol: 'د.إ', locale: 'ar-AE' },
  { code: 'SG', name: 'Singapore', flag: '🇸🇬', currency: 'SGD', currencySymbol: 'S$', locale: 'en-SG' },
  { code: 'DE', name: 'Germany', flag: '🇩🇪', currency: 'EUR', currencySymbol: '€', locale: 'de-DE' },
  { code: 'FR', name: 'France', flag: '🇫🇷', currency: 'EUR', currencySymbol: '€', locale: 'fr-FR' },
  { code: 'BR', name: 'Brazil', flag: '🇧🇷', currency: 'BRL', currencySymbol: 'R$', locale: 'pt-BR' },
]

// Approximate exchange rates (for demo purposes)
export const exchangeRates: Record<string, number> = {
  USD: 1,
  INR: 83.5,
  GBP: 0.79,
  EUR: 0.92,
  CAD: 1.36,
  AUD: 1.53,
  JPY: 157.5,
  AED: 3.67,
  SGD: 1.35,
  BRL: 5.05,
}

interface LocaleState {
  selectedCountry: Country
  setCountry: (country: Country) => void
  formatPrice: (priceUSD: number) => string
  convertPrice: (priceUSD: number) => number
}

export const useLocale = create<LocaleState>()(
  persist(
    (set, get) => ({
      selectedCountry: countries[0], // Default to US
      setCountry: (country) => set({ selectedCountry: country }),
      convertPrice: (priceUSD: number) => {
        const { selectedCountry } = get()
        const rate = exchangeRates[selectedCountry.currency] || 1
        return priceUSD * rate
      },
      formatPrice: (priceUSD: number) => {
        const { selectedCountry, convertPrice } = get()
        const convertedPrice = convertPrice(priceUSD)
        
        try {
          return new Intl.NumberFormat(selectedCountry.locale, {
            style: 'currency',
            currency: selectedCountry.currency,
            minimumFractionDigits: selectedCountry.currency === 'JPY' ? 0 : 2,
            maximumFractionDigits: selectedCountry.currency === 'JPY' ? 0 : 2,
          }).format(convertedPrice)
        } catch {
          return `${selectedCountry.currencySymbol}${convertedPrice.toFixed(2)}`
        }
      },
    }),
    {
      name: 'swiserve-locale',
    }
  )
)
