import { useState, useEffect } from 'react'
import { Country } from '../types/country'
import { getAllCountries } from '../services/countryService'

interface UseCountriesResult {
  countries: Country[]
  loading: boolean
  error: string | null
}

/*sirve para tener todos los paises:
const { countries, loading, error } = useCountries()*/
export function useCountries(): UseCountriesResult {
  const [countries, setCountries] = useState<Country[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true)
        setError(null)
        const data = await getAllCountries()
        setCountries(data)
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Error desconocido'
        setError(errorMessage)
        console.error('Error en useCountries:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchCountries()
  }, [])

  return {countries, loading, error}
}
