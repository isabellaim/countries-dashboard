import { useCountries } from '../hooks/useCountries'
import CountryCard from './CountryCard'
import './CountryList.css'

function CountryList() {
  const { countries, loading, error } = useCountries()

  if (loading) {
    return <div className="CountryListState">Cargando países...</div>
  }

  if (error) {
    return <div className="CountryListState CountryListStateError">Error: {error}</div>
  }

  return (
    <div className="CountryList">
      <h2 className="CountryListTitle">Países del mundo</h2>
      <div className="CountryListGrid">
        {countries.map((country) => (
          <CountryCard key={`${country.name.common}-${country.region}`} country={country} />
        ))}
      </div>
    </div>
  )
}

export default CountryList
