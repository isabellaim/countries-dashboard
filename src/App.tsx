import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        <section className="landing-section">
          <Hero />
        </section>
        <section className="countries-section">
          {/* Aquí irán los países */}
        </section>
      </main>
    </div>
  )
}

export default App
