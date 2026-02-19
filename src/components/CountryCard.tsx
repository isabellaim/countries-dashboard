import { Country } from '../types/country'
import FavoriteButton from './FavoriteButton'
import './CountryCard.css'

interface CountryCardProps {
	country: Country
	onSelect?: (country: Country) => void
	isFavorite?: boolean
	onToggleFavorite?: (country: Country) => void
}

function CountryCard({ country, onSelect, isFavorite = false, onToggleFavorite }: CountryCardProps) {
	const handleFavoriteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation()
		onToggleFavorite?.(country)
	}

	return (
		<button
			type="button"
			className="country-card country-card-button"
			onClick={() => onSelect?.(country)}
			aria-label={`Ver detalles de ${country.name.common}`}
		>
			{onToggleFavorite && (
				<button
					type="button"
					className="country-card-favorite-wrapper"
					onClick={handleFavoriteClick}
				>
					<FavoriteButton
						country={country}
						isFavorite={isFavorite}
						onToggle={onToggleFavorite}
					/>
				</button>
			)}
			<img
				className="country-flag"
				src={country.flags.png}
				alt={country.flags.alt ?? `Bandera de ${country.name.common}`}
			/>
			<div className="country-body">
				<h3 className="country-name">{country.name.common}</h3>
				<p className="country-meta">
					<span className="label">Capital:</span>{' '}
					{country.capital?.join(', ') ?? 'No disponible'}
				</p>
				<p className="country-meta">
					<span className="label">Población:</span>{' '}
					{new Intl.NumberFormat('es-ES').format(country.population)}
				</p>
				<p className="country-meta">
					<span className="label">Región:</span> {country.region}
				</p>
			</div>
		</button>
	)
}

export default CountryCard
