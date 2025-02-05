import { useState, useEffect } from "react";

export default function useCelestialBodies() {
  const [bodies, setBodies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.le-systeme-solaire.net/rest/bodies/"
        );
        const data = await response.json();
        setBodies(data.bodies);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { bodies, loading, error };
}
