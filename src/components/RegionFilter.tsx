import './RegionFilter.css'

interface RegionOption {
  value: string
  label: string
}

const REGION_OPTIONS: RegionOption[] = [
  { value: '', label: 'Todos los continentes' },
  { value: 'Africa', label: 'África' },
  { value: 'Americas', label: 'Américas' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europa' },
  { value: 'Oceania', label: 'Oceanía' },
]

interface RegionFilterProps {
  value: string
  onChange: (value: string) => void
}

function RegionFilter({ value, onChange }: RegionFilterProps) {
  return (
    <div className="RegionFilter">
      <select
        id="region-filter"
        className="RegionFilterSelect"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        {REGION_OPTIONS.map((option) => (
          <option key={option.value || 'all'} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default RegionFilter
