// import { useState, useEffect } from 'react';

// export default function WeatherComponent() {
//   const [weatherData, setWeatherData] = useState(null);

//   useEffect(() => {
//     const fetchWeatherData = async () => {
//       const apiEndpoint = `https://api.open-meteo.com/v1/forecast?latitude=42.15&longitude=24.75&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=1`;

//       try {
//         const response = await fetch(apiEndpoint);
//         const data = await response.json();
//         console.log(data);
//         setWeatherData(data);
//       } catch (error) {
//         console.error('Error fetching weather data:', error);
//       }
//     };

//     // Fetch weather data when the component mounts
//     fetchWeatherData();
//   }, []); // Ensure the effect runs when apiKey or city changes

//   return (
//     <div>
//       {weatherData && (
//         <div>
//           <h2>Hourly Temperature</h2>
//           <ul>
//             {weatherData.hourly.temperature_2m.map((temperature, index) => (
//               <li key={index}>{`Hour ${index + 1}: ${temperature}°C`}</li>
//             ))}
//           </ul>
//           <h2>Daily Temperature</h2>
//           <p>{`Max: ${weatherData.daily.temperature_2m_max[0]}°C, Min: ${weatherData.daily.temperature_2m_min[0]}°C`}</p>
//           <h2>Current Hour's Temperature</h2>
//           <p>{`Temperature: ${weatherData.hourly.temperature_2m[0]}°C`}</p>
//         </div>
//       )}
//     </div>
//   );
// };

import { useState, useEffect } from "react";

export default function WeatherComponent() {
  
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            const apiEndpoint = `https://api.open-meteo.com/v1/forecast?latitude=42.15&longitude=24.75&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=1`;

            try {
                const response = await fetch(apiEndpoint);
                const data = await response.json();
                console.log(data);
                setWeatherData(data);
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        };

        // Fetch weather data when the component mounts
        fetchWeatherData();
    }, []); // Ensure the effect runs when apiKey or city changes

    const getCurrentHour = () => {
        const currentHour = new Date().getHours();
        return currentHour >= 0 && currentHour < 24 ? currentHour : 0;
    };

    return (
        <div>
            {weatherData && (
                <div>
                    <h2>Hourly Temperature</h2>
                    <ul>
                        {weatherData.hourly.temperature_2m.map(
                            (temperature, index) => (
                                <li key={index}>{`Hour ${
                                    index + 1
                                }: ${temperature}°C`}</li>
                            )
                        )}
                    </ul>
                    <h2>Daily Temperature</h2>
                    <p>{`Max: ${weatherData.daily.temperature_2m_max[0]}°C, Min: ${weatherData.daily.temperature_2m_min[0]}°C`}</p>
                    <h2>Current Hour's Temperature</h2>
                    <p>{`Temperature: ${
                        weatherData.hourly.temperature_2m[getCurrentHour()]
                    }°C`}</p>
                </div>
            )}
        </div>
    );
}
