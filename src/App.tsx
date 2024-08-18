import React, { useEffect, useState } from 'react';
import StationCard from './StationCard';
import Navbar from './Navbar';

interface StationTime {
  tz: string;
  stime: string;
  vtime: number;
}

interface Station {
  name: string;
  geo: [number, number];
  url: string;
  country: string;
}

interface StationData {
  uid: number;
  aqi: string;
  time: StationTime;
  station: Station;
}

const App: React.FC = () => {
  const [data, setData] = useState<StationData[]>([]);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchData = async (city: string) => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.waqi.info/search/?token=demo&keyword=${city}`);
      const result = await response.json();
      console.log(result.data)
      setData(result.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(city);
  }, [city]);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="flex justify-center mb-4">
          <input
            type="text"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="p-2 border rounded-lg shadow-md w-full max-w-md"
          />
        </div>
        {loading ? (
          <div className="text-center text-gray-500">Loading...</div>
        ) : (
          <div className="flex flex-wrap justify-center">
            {data.map(station => (
              <StationCard key={station.uid} station={station} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;


