import { useMemo } from 'react'
import { useCountries } from '../hooks/useCountries'
import CountryCard from './CountryCard'
import './CountryList.css'

interface CountryListProps {
  query: string
}

function CountryList({ query }: CountryListProps) {
  const { countries, loading, error } = useCountries()

  const filteredCountries = useMemo(() => {
    const trimmedQuery = query.trim().toLowerCase()
    if (!trimmedQuery) return countries

    return countries.filter((country) => {
      const common = country.name.common.toLowerCase()
      const official = country.name.official?.toLowerCase() ?? ''
      return common.includes(trimmedQuery) || official.includes(trimmedQuery)
    })
  }, [countries, query])

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
            <CountryCard key={`${country.name.common}-${country.region}`} country={country} />
          ))}
        </div>
      )}
    </div>
  )
}

export default CountryList
