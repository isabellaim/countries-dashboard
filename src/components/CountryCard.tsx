import { Country } from '../types/country'
import './CountryCard.css'

interface CountryCardProps {
	country: Country
}

function CountryCard({ country }: CountryCardProps) {
	return (
		<article className="country-card">
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
		</article>
	)
}

export default CountryCard
