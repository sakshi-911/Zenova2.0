import { useState } from "react";

export default function Filters({onFilter}){
    const [selectedType, setSelectedType] = useState('all')
    const handleFilter= (type)=>{
        setSelectedType(type)
        onFilter(type)
    }
    return(
        <section className="bg-cosmic-800 p-6 rounded-xl mx-4 my-6 shadow-lg">
            <h3 className="text-xl font-bold text-purple-400 mb-4 text-center">Filters</h3>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <select 
                value={selectedType}
                onChange={(e)=> handleFilter(e.target.value)}
                className='bg-cosmic-700 text-white px-4 py-2 rounded-lg border border-purple-800 focus:outline-none'>
                    <option value='all'>All</option>
                    <option value='Planet'>Planet</option>
                    <option value='Moon'>Moon</option>
                    <option value='Asteroid'>Asteroid</option>

                </select>
                <button
                onClick={()=>handleFilter('all')}
                className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors">
                    Reset Filters
                </button>
                
            </div>
        </section>
    )
}

