export default function CelestialCard({ body, onClick }) {
    return (
      <div 
        className="relative bg-cover bg-center rounded-lg p-4 shadow-lg transition-transform 
                  hover:scale-105 hover:shadow-purple-500/30 cursor-pointer h-48 w-48 flex 
                  flex-col justify-center items-center border border-purple-800/50"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1465101162946-4377e57745c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}
        onClick={onClick}
      >
        <h3 className="text-xl font-bold mb-2 text-center text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          {body.englishName}
        </h3>
        <p className="text-sm text-purple-200">
          Type: {body.bodyType}
        </p>
      </div>
    )
  }