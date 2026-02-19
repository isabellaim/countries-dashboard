import { Country } from '../types/country'
import './CountryDetail.css'

interface CountryDetailProps {
  country: Country
  onClose: () => void
}

function CountryDetail({ country, onClose }: CountryDetailProps) {
  const nativeNameEntry = country.name.nativeName
    ? Object.values(country.name.nativeName)[0]
    : undefined
  const nativeName = nativeNameEntry?.common ?? nativeNameEntry?.official ?? 'No disponible'
  const languages = country.languages
    ? Object.values(country.languages).join(', ')
    : 'No disponible'
  const currencies = country.currencies
    ? Object.values(country.currencies)
        .map((currency) =>
          currency.symbol ? `${currency.name} (${currency.symbol})` : currency.name
        )
        .join(', ')
    : 'No disponible'
  const borders = country.borders?.length ? country.borders.join(', ') : 'No disponible'
  const subregion = country.subregion ?? 'No disponible'
  const tld = country.tld?.length ? country.tld.join(', ') : 'No disponible'

  return (
    <div className="CountryDetailOverlay" onClick={onClose}>
      <div className="CountryDetail" onClick={(event) => event.stopPropagation()}>
        <div className="CountryDetailHeader">
          <img
            className="CountryDetailFlag"
            src={country.flags.png}
            alt={country.flags.alt ?? `Bandera de ${country.name.common}`}
          />
          <div>
            <h3 className="CountryDetailTitle">{country.name.common}</h3>
            <p className="CountryDetailSubtitle">{country.name.official}</p>
          </div>
        </div>

        <div className="CountryDetailContent">
          <div className="CountryDetailItem">
            <span className="CountryDetailLabel">Nombre nativo:</span>
            <span>{nativeName}</span>
          </div>
          <div className="CountryDetailItem">
            <span className="CountryDetailLabel">Idiomas:</span>
            <span>{languages}</span>
          </div>
          <div className="CountryDetailItem">
            <span className="CountryDetailLabel">Monedas:</span>
            <span>{currencies}</span>
          </div>
          <div className="CountryDetailItem">
            <span className="CountryDetailLabel">Fronteras:</span>
            <span>{borders}</span>
          </div>
          <div className="CountryDetailItem">
            <span className="CountryDetailLabel">Subregión:</span>
            <span>{subregion}</span>
          </div>
          <div className="CountryDetailItem">
            <span className="CountryDetailLabel">Dominio de nivel superior:</span>
            <span>{tld}</span>
          </div>
        </div>

        <div className="CountryDetailActions">
          <button className="CountryDetailBack" type="button" onClick={onClose}>
            Volver
          </button>
        </div>
      </div>
    </div>
  )
}

export default CountryDetail
