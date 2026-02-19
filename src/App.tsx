import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import CountryList from './components/CountryList'

function App() {
  const [query, setQuery] = useState('')

  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        <section className="landing-section">
          <Hero query={query} onQueryChange={setQuery} />
        </section>
        <section className="countries-section">
          <CountryList query={query} />
        </section>
      </main>
    </div>
  )
}

export default App
