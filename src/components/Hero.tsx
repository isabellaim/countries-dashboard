import './Hero.css'
import paisesImg from '../assets/viaje.jpg'

function Hero() {
  return (
    <section>
      <div className="heroContainer">
        <img
          src={paisesImg}
          alt="Países del mundo"
          className="heroImage"
        />
        <div className="heroText">
          <h2 className="heroTitle">Países del mundo</h2>
        </div>
      </div>
    </section>
  )
}

export default Hero
