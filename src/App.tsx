import Header from './components/Header'
import Hero from './components/Hero'
import CountryList from './components/CountryList'

function App() {
  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        <section className="landing-section">
          <Hero />
        </section>
        <section className="countries-section">
          <CountryList />
        </section>
      </main>
    </div>
  )
}

export default App
