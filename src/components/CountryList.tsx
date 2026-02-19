import { useState, useEffect } from 'react'
import { useCountries } from '../hooks/useCountries'
import CountryCard from './CountryCard'
import CountryDetail from './CountryDetail'
import './CountryList.css'
import { Country } from '../types/country'

interface CountryListProps {
  query: string
  region: string
}

function CountryList({ query, region }: CountryListProps) {
  const { countries, loading, error } = useCountries()
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([])
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null)

  useEffect(() => {
    const trimmedQuery = query.trim().toLowerCase()
    
    const filtered = countries.filter((country) => {
      const common = country.name.common.toLowerCase()
      const official = country.name.official?.toLowerCase() ?? ''
      const matchesQuery = !trimmedQuery || common.includes(trimmedQuery) || official.includes(trimmedQuery)
      const matchesRegion = !region || country.region === region
      return matchesQuery && matchesRegion
    })
    
    setFilteredCountries(filtered)
  }, [countries, query, region])

  if (loading) {
    return <div className="CountryListState">Cargando países...</div>
  }

  if (error) {
    return <div className="CountryListState CountryListStateError">Error: {error}</div>
  }

  return (
    <div className="CountryList">
      <h2 className="CountryListTitle">Países del mundo</h2>
      {filteredCountries.length === 0 ? (
        <div className="CountryListState">No se encontraron países.</div>
      ) : (
        <div className="CountryListGrid">
          {filteredCountries.map((country) => (
            <CountryCard
              key={`${country.name.common}-${country.region}`}
              country={country}
              onSelect={setSelectedCountry}
            />
          ))}
        </div>
      )}
      {selectedCountry && (
        <CountryDetail
          country={selectedCountry}
          onClose={() => setSelectedCountry(null)}
        />
      )}
    </div>
  )
}

export default CountryList
