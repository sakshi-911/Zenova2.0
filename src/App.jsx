import { useState } from 'react'
import useCelestialBodies from './hooks/useCelestialBodies'
import Header from './components/Header'
import Filters from './components/Filters'
import CelestialCard from './components/CelestialCard'
import Modal from './components/Modal'
import Footer from './components/Footer'

export default function App() {
  const { bodies, loading } = useCelestialBodies()
  const [searchQuery, setSearchQuery] = useState('')
  const [filterType, setFilterType] = useState('all')
  const [selectedBody, setSelectedBody] = useState(null)

  const filteredBodies = bodies.filter(body => {
    const matchesSearch = body.englishName?.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = filterType === 'all' || body.bodyType === filterType
    return matchesSearch && matchesType
  })

  return (
    <div className="min-h-screen bg-cosmic-900 text-white">
      <Header onSearch={setSearchQuery} />
      <Filters onFilter={setFilterType} />

      <main className="container mx-auto px-4 py-8">
        {loading ? (
          <div className="text-center">Loading celestial bodies...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredBodies.map(body => (
              <CelestialCard
                key={body.id}
                body={body}
                onClick={() => setSelectedBody(body)}
              />
            ))}
          </div>
        )}
      </main>

      <Modal body={selectedBody} onClose={() => setSelectedBody(null)} />
        <Footer/>
    </div>
  )
}