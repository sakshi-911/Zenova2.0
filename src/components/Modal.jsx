import { XMarkIcon } from "@heroicons/react/24/solid";

export default function Modal({ body, onClose }) {
  if (!body) return null;

  // Helper function to format large numbers
  const formatNumber = (num) => {
    if (!num) return 'N/A';
    return new Intl.NumberFormat().format(num);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50">
      <div className="bg-cosmic-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-purple-400 hover:text-purple-300"
        >
          <XMarkIcon className="h-8 w-8" />
        </button>

        <div className="p-8 space-y-6">
          <h2 className="text-4xl font-bold text-purple-400 mb-2">
            {body.englishName}
          </h2>

          {/* Main Data Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <InfoItem label="Body Type" value={body.bodyType} />
            <InfoItem 
              label="Mean Radius" 
              value={body.meanRadius ? `${formatNumber(body.meanRadius)} km` : 'N/A'} 
            />
            <InfoItem
              label="Semi-Major Axis"
              value={body.semimajorAxis ? `${formatNumber(body.semimajorAxis)} km` : 'N/A'}
            />
            <InfoItem
              label="Perihelion"
              value={body.perihelion ? `${formatNumber(body.perihelion)} km` : 'N/A'}
            />
            <InfoItem
              label="Aphelion"
              value={body.aphelion ? `${formatNumber(body.aphelion)} km` : 'N/A'}
            />
            <InfoItem
              label="Eccentricity"
              value={body.eccentricity || 'N/A'}
            />
            <InfoItem
              label="Inclination"
              value={body.inclination ? `${body.inclination}°` : 'N/A'}
            />
            <InfoItem
              label="Sidereal Orbit"
              value={body.sideralOrbit ? `${body.sideralOrbit} days` : 'N/A'}
            />
            <InfoItem
              label="Mass"
              value={body.mass?.massValue 
                ? `${body.mass.massValue} × 10^${body.mass.massExponent} kg`
                : 'N/A'}
            />
            <InfoItem
              label="Volume"
              value={body.vol?.volValue 
                ? `${body.vol.volValue} × 10^${body.vol.volExponent} km³`
                : 'N/A'}
            />
            <InfoItem
              label="Density"
              value={body.density ? `${body.density} g/cm³` : 'N/A'}
            />
            <InfoItem
              label="Gravity"
              value={body.gravity ? `${body.gravity} m/s²` : 'N/A'}
            />
            <InfoItem
              label="Escape Velocity"
              value={body.escape ? `${body.escape} m/s` : 'N/A'}
            />
            <InfoItem
              label="Equatorial Radius"
              value={body.equaRadius ? `${formatNumber(body.equaRadius)} km` : 'N/A'}
            />
            <InfoItem
              label="Polar Radius"
              value={body.polarRadius ? `${formatNumber(body.polarRadius)} km` : 'N/A'}
            />
          </div>

          {/* Special Sections */}
          <div className="space-y-4">
            {body.isPlanet && (
              <Section title={`Moons (${body.moons?.length || 0})`}>
                {body.moons?.length > 0 ? (
                  <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {body.moons.map((moon, index) => (
                      <li 
                        key={index}
                        className="bg-cosmic-700 p-2 rounded text-sm"
                      >
                        {moon.moon}
                      </li>
                    ))}
                  </ul>
                ) : 'No moons detected'}
              </Section>
            )}

            {!body.isPlanet && body.aroundPlanet && (
              <Section title="Orbiting">
                <p className="text-purple-300">
                  {body.aroundPlanet.planet.toUpperCase()}
                </p>
              </Section>
            )}

            {(body.discoveredBy || body.discoveryDate) && (
              <Section title="Discovery">
                <div className="space-y-1">
                  {body.discoveredBy && (
                    <p>By: {body.discoveredBy}</p>
                  )}
                  {body.discoveryDate && (
                    <p>Date: {body.discoveryDate}</p>
                  )}
                </div>
              </Section>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// Reusable Info Item Component
function InfoItem({ label, value }) {
  return (
    <div className="bg-cosmic-700 p-3 rounded-lg">
      <p className="text-sm text-purple-300 mb-1">{label}</p>
      <p className="font-medium text-white">{value}</p>
    </div>
  )
}

// Reusable Section Component
function Section({ title, children }) {
  return (
    <div className="bg-cosmic-750 p-4 rounded-xl">
      <h3 className="text-xl font-bold text-purple-300 mb-3">{title}</h3>
      {children}
    </div>
  )
}