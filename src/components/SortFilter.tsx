import './SortFilter.css'

interface SortFilterProps {
  value: string
  onChange: (value: string) => void
}

const SORT_OPTIONS = [
  { value: '', label: 'Sin ordenar' },
  { value: 'asc', label: 'Población (menor a mayor)' },
  { value: 'desc', label: 'Población (mayor a menor)' },
]

function SortFilter({ value, onChange }: SortFilterProps) {
  return (
    <div className="SortFilter">
      <select
        id="sort-filter"
        className="SortFilterSelect"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-label="Ordenar por población"
      >
        {SORT_OPTIONS.map((option) => (
          <option key={option.value || 'none'} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SortFilter
