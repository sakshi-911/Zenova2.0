import { useState } from 'react'

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('')

  const handleSearch = (e) => {
    const value = e.target.value
    setQuery(value)
    onSearch(value) // Pass search query to parent
  }

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for planets, moons, or stars..."
          value={query}
          onChange={handleSearch}
          className="w-full px-6 py-3 rounded-full bg-cosmic-700 border border-purple-800 
                     focus:outline-none focus:ring-2 focus:ring-purple-500 text-white 
                     placeholder-purple-300 transition-all duration-300"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 absolute right-4 top-1/2 transform -translate-y-1/2 text-purple-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  )
}