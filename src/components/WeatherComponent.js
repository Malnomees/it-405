import React, { useState, useEffect } from 'react';

const WeatherComponent = () => {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://api.weatherapi.com/v1/current.json?key=f9d086ef8bcb429582f193831242505&q=Jeddah`)
            .then(response => response.json())
            .then(data => setWeather(data))
            .catch(error => setError(error));
    }, []);

    if (error) return <div>Error: {error.message}</div>;
    if (!weather) return <div>Loading...</div>;

    return (
        <div>
            <h2>Current Weather</h2>
            {weather.current && (
                <>
                    <p>Temperature: {weather.current.temp_c}°C</p>
                    <p>Conditions: {weather.current.condition.text}</p>
                </>
            )}
        </div>
    );
};

export default WeatherComponent;
