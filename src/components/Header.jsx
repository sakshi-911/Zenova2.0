export default function Header ({onSearch}){
    return (
        <header className="bg-cosmic-800 text-white py-5 shadow-xl">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-4 text-center">Solar System Explorer</h1>
                <div className="max-w-2xl mx-auto">
                    <input
                    type = 'text'
                    placeholder = "Search for a planet, moon, or star..."
                    className="w-full px-6 py-3 rounded-full bg-cosmic-700 border border-purple-800
                    focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    onChange={(e)=>onSearch(e.target.value)}
                    />
                </div>
            </div>
        </header>
    )
}