import React from 'react';

const InfoPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center p-6">
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-400 bg-white text-center">
          <thead>
            <tr>
              <th className="border border-gray-300 bg-gray-200 p-2">AQI</th>
              <th className="border border-gray-300 bg-gray-200 p-2">Air Pollution Level</th>
              <th className="border border-gray-300 bg-gray-200 p-2">Health Implications</th>
              <th className="border border-gray-300 bg-gray-200 p-2">Cautionary Statement (for PM2.5)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-green-500 text-white">
              <td className="border border-gray-300 p-2">0 - 50</td>
              <td className="border border-gray-300 p-2">Good</td>
              <td className="border border-gray-300 p-2">Air quality is considered satisfactory, and air pollution poses little or no risk</td>
              <td className="border border-gray-300 p-2">None</td>
            </tr>
            <tr className="bg-yellow-500 text-black">
              <td className="border border-gray-300 p-2">51 - 100</td>
              <td className="border border-gray-300 p-2">Moderate</td>
              <td className="border border-gray-300 p-2">Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.</td>
              <td className="border border-gray-300 p-2">Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.</td>
            </tr>
            <tr className="bg-orange-500 text-white">
              <td className="border border-gray-300 p-2">101 - 150</td>
              <td className="border border-gray-300 p-2">Unhealthy for Sensitive Groups</td>
              <td className="border border-gray-300 p-2">Members of sensitive groups may experience health effects. The general public is not likely to be affected.</td>
              <td className="border border-gray-300 p-2">Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.</td>
            </tr>
            <tr className="bg-red-500 text-white">
              <td className="border border-gray-300 p-2">151 - 200</td>
              <td className="border border-gray-300 p-2">Unhealthy</td>
              <td className="border border-gray-300 p-2">Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.</td>
              <td className="border border-gray-300 p-2">Active children and adults, and people with respiratory disease, such as asthma, should avoid prolonged outdoor exertion; everyone else, especially children, should limit prolonged outdoor exertion.</td>
            </tr>
            <tr className="bg-purple-500 text-white">
              <td className="border border-gray-300 p-2">201 - 300</td>
              <td className="border border-gray-300 p-2">Very Unhealthy</td>
              <td className="border border-gray-300 p-2">Health warnings of emergency conditions. The entire population is more likely to be affected.</td>
              <td className="border border-gray-300 p-2">Active children and adults, and people with respiratory disease, such as asthma, should avoid all outdoor exertion; everyone else, especially children, should limit outdoor exertion.</td>
            </tr>
            <tr className="bg-red-700 text-white">
              <td className="border border-gray-300 p-2">300+</td>
              <td className="border border-gray-300 p-2">Hazardous</td>
              <td className="border border-gray-300 p-2">Health alert: everyone may experience more serious health effects.</td>
              <td className="border border-gray-300 p-2">Everyone should avoid all outdoor exertion.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InfoPage;
