import paisesImg from '../assets/viaje.jpg'

function Hero() {
  return (
    <section className="landing-section">
      <div className="relative h-[40rem] md:h-[46rem] overflow-hidden shadow-md">
        <img
          src={paisesImg}
          alt="Países del mundo"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute z-10 top-[14rem] left-[7rem] md:top-[14rem] md:left-[7rem] text-slate-900 drop-shadow-md">
          <h2 className="text-5xl md:text-5xl font-bold">Países del mundo</h2>
        
        </div>
      </div>
    </section>
  )
}

export default Hero
