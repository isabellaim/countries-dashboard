import { useState, useEffect } from 'react'
import { useCountries } from '../hooks/useCountries'
import CountryCard from './CountryCard'
import CountryDetail from './CountryDetail'
import SortFilter from './SortFilter'
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
  const [sort, setSort] = useState('')

  useEffect(() => {
    const trimmedQuery = query.trim().toLowerCase()
    
    let filtered = countries.filter((country) => {
      const common = country.name.common.toLowerCase()
      const official = country.name.official?.toLowerCase() ?? ''
      const matchesQuery = !trimmedQuery || common.includes(trimmedQuery) || official.includes(trimmedQuery)
      const matchesRegion = !region || country.region === region
      return matchesQuery && matchesRegion
    })

    // Aplicar ordenamiento en tiempo real
    if (sort === 'asc') {
      filtered.sort((a, b) => a.population - b.population)
    } else if (sort === 'desc') {
      filtered.sort((a, b) => b.population - a.population)
    }
    
    setFilteredCountries(filtered)
  }, [countries, query, region, sort])

  if (loading) {
    return <div className="CountryListState">Cargando países...</div>
  }

  if (error) {
    return <div className="CountryListState CountryListStateError">Error: {error}</div>
  }

  return (
    <div className="CountryList">
      <div className="CountryListHeader">
        <h2 className="CountryListTitle">Países del mundo</h2>
        <SortFilter value={sort} onChange={setSort} />
      </div>
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
