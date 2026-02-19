import './Hero.css'
import paisesImg from '../assets/viaje.jpg'
import Wave from './Wave'
import SearchBar from './SearchBar'

interface HeroProps {
  query: string
  onQueryChange: (value: string) => void
  region: string
  onRegionChange: (value: string) => void
}

function Hero({ query, onQueryChange, region, onRegionChange }: HeroProps) {
  return (
    <section>
      <div className="heroContainer">
        <div className="heroText">
          <h2 className="heroTitle">Busca un país</h2>
          <div className="HeroSearch">
            <SearchBar
              query={query}
              onQueryChange={onQueryChange}
              region={region}
              onRegionChange={onRegionChange}
            />
          </div>
        </div>
        <img
          src={paisesImg}
          alt="Países del mundo"
          className="heroImage"
        />
      </div>
       <Wave />
    </section>
  )
}

export default Hero
