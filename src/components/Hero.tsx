import './Hero.css'
import paisesImg from '../assets/viaje.jpg'
import Wave from './Wave'

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
       <Wave />
    </section>
  )
}

export default Hero
