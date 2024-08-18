import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StationCard from './StationCard';
import Navbar from './Navbar';
import InfoPage from './InfoPage';

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
  const [data, setData] = React.useState<StationData[]>([]);
  const [city, setCity] = React.useState('bangalore');
  const [loading, setLoading] = React.useState(false);

  const fetchData = async (city: string) => {
    setLoading(true);
    try {
      const apiKey = import.meta.env.VITE_AQI_API_KEY;
      const response = await fetch(`https://api.waqi.info/search/?token=${apiKey}&keyword=${city}`);
      const result = await response.json();
      setData(result.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData(city);
  }, [city]);

  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route
            path="/"
            element={
              <>
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
              </>
            }
          />
          <Route path="/info" element={<InfoPage />} />
        </Routes>
        <footer className="absolute bottom-4 right-4 text-gray-500">
          made with <span className="text-red-500">❤️</span> by naufil
        </footer>
      </div>
    </Router>
  );
};

export default App;
