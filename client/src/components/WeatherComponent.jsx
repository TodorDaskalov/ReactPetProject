import { useState, useEffect } from "react";
import getCurrentHour from "../../utils/getCurrentHour";
import formatDateString from "../../utils/formatDateString";
import styles from './WeatherComponent.module.css';

export default function WeatherComponent() {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            const apiEndpoint = `https://api.open-meteo.com/v1/forecast?latitude=42.15&longitude=24.75&current=temperature_2m,is_day,rain,snowfall,wind_speed_10m&hourly=temperature_2m,rain,snowfall&daily=temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=1`;

            try {
                const response = await fetch(apiEndpoint);
                const data = await response.json();
                setWeatherData(data);
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        };

        fetchWeatherData();
    }, []);

    const isRainOrSnowExpected = () => {
        const currentHour = getCurrentHour();
        const next3Hours = weatherData.hourly.time.slice(
            currentHour,
            currentHour + 3
        );

        for (let hour of next3Hours) {
            const index = weatherData.hourly.time.indexOf(hour);
            if (
                weatherData.hourly.rain[index] > 0 ||
                weatherData.hourly.snowfall[index] > 0
            ) {
                return true;
            }
        }

        return false;
    };

    return (
        <div>
            {weatherData && (
                <div>
                    <h2>
                        Daily Temperatures for{" "}
                        {formatDateString(weatherData.daily.time)}
                    </h2>
                    <p>{`Max: ${weatherData.daily.temperature_2m_max[0]}°C, Min: ${weatherData.daily.temperature_2m_min[0]}°C`}</p>
                    <h2>Current Temperature</h2>
                    <p>{`Temperature: ${
                        weatherData.hourly.temperature_2m[getCurrentHour()]
                    }°C`}</p>
                    <h2>Current Weather</h2>
                    <p>{`Wind Speed: ${weatherData.current.wind_speed_10m} km/h`}</p>
                    <p>{`Rain: ${weatherData.current.rain} mm`}</p>
                    <p>{`Snowfall: ${weatherData.current.snowfall} cm`}</p>
                    <h2>Next 3 Hours Forecast</h2>
                    {isRainOrSnowExpected() ? (
                        <p>Expecting rain or snow in the next 3 hours.</p>
                    ) : (
                        <p>No rain or snow expected in the next 3 hours.</p>
                    )}
                    {Array.from({ length: 3 }, (_, i) => i + 1).map(
                        (hourOffset) => (
                            <li className={styles.liElement} key={hourOffset}>
                                {`+ ${hourOffset} hour temperature: ${
                                    weatherData.hourly.temperature_2m[
                                        getCurrentHour() + hourOffset
                                    ]
                                }°C`}
                            </li>
                        )
                    )}
                </div>
            )}
        </div>
    );
}
