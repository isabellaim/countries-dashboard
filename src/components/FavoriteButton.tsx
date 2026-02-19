import { Country } from '../types/country'
import './FavoriteButton.css'

interface FavoriteButtonProps {
  country: Country
  isFavorite: boolean
  onToggle: (country: Country) => void
}

function FavoriteButton({ country, isFavorite, onToggle }: FavoriteButtonProps) {
  return (
    <button
      className={`FavoriteButton ${isFavorite ? 'FavoriteButtonActive' : ''}`}
      onClick={() => onToggle(country)}
      title={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
      aria-label={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
      type="button"
    >
      ♥
    </button>
  )
}

export default FavoriteButton
