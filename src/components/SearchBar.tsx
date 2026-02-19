import { useEffect, useState } from 'react'
import './SearchBar.css'

interface SearchBarProps {
  query: string
  onQueryChange: (value: string) => void
  region: string
  onRegionChange: (value: string) => void
  placeholder?: string
}

const REGION_OPTIONS = [
  { value: '', label: 'Todos los continentes' },
  { value: 'Africa', label: 'África' },
  { value: 'Americas', label: 'Américas' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europa' },
  { value: 'Oceania', label: 'Oceanía' },
]

function SearchBar({
  query,
  onQueryChange,
  region,
  onRegionChange,
  placeholder = 'Escribe un país...',
}: SearchBarProps) {
  const [inputValue, setInputValue] = useState(query)
  const [selectedRegion, setSelectedRegion] = useState(region)

  useEffect(() => {
    setInputValue(query)
  }, [query])

  useEffect(() => {
    setSelectedRegion(region)
  }, [region])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onQueryChange(inputValue)
    onRegionChange(selectedRegion)
  }

  return (
    <form className="SearchBar" onSubmit={handleSubmit}>
      <div className="SearchBarInputs">
        <input
          className="SearchBarInput"
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder={placeholder}
          aria-label={placeholder}
        />
        <select
          className="SearchBarRegion"
          value={selectedRegion}
          onChange={(event) => setSelectedRegion(event.target.value)}
          aria-label="Filtrar por continente"
        >
          {REGION_OPTIONS.map((option) => (
            <option key={option.value || 'all'} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <button className="SearchBarButton" type="submit">
        Buscar
      </button>
    </form>
  )
}

export default SearchBar
