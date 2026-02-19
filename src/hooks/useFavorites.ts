import { useState, useEffect } from 'react'
import { Country } from '../types/country'

const FAVORITES_KEY = 'countries-favorites'

export function useFavorites() {
  const [favorites, setFavorites] = useState<Country[]>([])

  // para cargar favoritos al montar
  useEffect(() => {
    const saved = localStorage.getItem(FAVORITES_KEY)
    if (saved) {
      try {
        setFavorites(JSON.parse(saved))
      } catch {
        setFavorites([])
      }
    }
  }, [])

  const addFavorite = (country: Country) => {
    setFavorites((prev) => {
      const isFavorite = prev.some((fav) => fav.name.common === country.name.common)
      if (isFavorite) {
        return prev
      }
      const updated = [...prev, country]
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated))
      return updated
    })
  }

  const removeFavorite = (countryName: string) => {
    setFavorites((prev) => {
      const updated = prev.filter((fav) => fav.name.common !== countryName)
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated))
      return updated
    })
  }

  const toggleFavorite = (country: Country) => {
    const isFavorite = favorites.some((fav) => fav.name.common === country.name.common)
    if (isFavorite) {
      removeFavorite(country.name.common)
    } else {
      addFavorite(country)
    }
  }

  const isFavorite = (countryName: string) => {
    return favorites.some((fav) => fav.name.common === countryName)
  }

  return {
    favorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
  }
}
