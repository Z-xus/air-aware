import React from 'react';

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

interface StationCardProps {
  station: StationData;
}

const getColorForAqi = (aqi: string) => {
  if (aqi === '-') return 'bg-gray-200'; // No data
  const aqiValue = parseInt(aqi, 10);
  if (aqiValue <= 50) return 'bg-green-200'; // Good
  if (aqiValue <= 100) return 'bg-yellow-200'; // Moderate
  if (aqiValue <= 150) return 'bg-orange-200'; // Unhealthy for sensitive groups
  return 'bg-red-200'; // Unhealthy
};

const capitalizeWords = (text: string) => {
  return text
    .replace(';', ',') // Remove unwanted characters
    .split(' ') // Split into words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize each word
    .join(' '); // Join words back together
};

const StationCard: React.FC<StationCardProps> = ({ station }) => {
  const { aqi, time, station: stationInfo } = station;
  const colorClass = getColorForAqi(aqi);

  return (
    <div className={`p-4 m-2 rounded-lg shadow-lg ${colorClass}`}>
      <h2 className="text-xl font-semibold">{capitalizeWords(stationInfo.name)}</h2>
      <p className="text-sm text-gray-700">AQI: {aqi === '-' ? 'N.A.' : aqi}</p>
      <p className="text-sm text-gray-500">Time: {time.stime}</p>
    </div>
  );
};

export default StationCard;
