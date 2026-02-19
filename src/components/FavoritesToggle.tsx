import './FavoritesToggle.css'

interface FavoritesToggleProps {
  showOnlyFavorites: boolean
  onToggle: (show: boolean) => void
  favoritesCount: number
}

function FavoritesToggle({ showOnlyFavorites, onToggle, favoritesCount }: FavoritesToggleProps) {
  return (
    <button
      className={`FavoritesToggle ${showOnlyFavorites ? 'FavoritesToggleActive' : ''}`}
      onClick={() => onToggle(!showOnlyFavorites)}
      title={showOnlyFavorites ? 'Mostrar todos' : 'Mostrar solo favoritos'}
      aria-label={showOnlyFavorites ? 'Mostrar todos' : 'Mostrar solo favoritos'}
      type="button"
    >
      <span className="FavoritesToggleIcon">♥</span>
      <span className="FavoritesToggleLabel">Favoritos</span>
      <span className="FavoritesToggleCount">{favoritesCount}</span>
    </button>
  )
}

export default FavoritesToggle
