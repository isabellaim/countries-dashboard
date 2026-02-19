import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import CountryList from './components/CountryList'

function App() {
  const [query, setQuery] = useState('')
  const [region, setRegion] = useState('')

  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        <section className="landing-section">
          <Hero query={query} onQueryChange={setQuery} region={region} onRegionChange={setRegion} />
        </section>
        <section className="countries-section">
          <CountryList query={query} region={region} />
        </section>
      </main>
    </div>
  )
}

export default App
