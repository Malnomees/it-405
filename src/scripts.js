// This file can contain shared functions or utilities
// Since we're using React, API calls are handled within components

// Example: Fetch weather data function
export const fetchWeatherData = async (city, apiKey) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        return await response.json();
    } catch (error) {
        throw new Error('Failed to fetch weather data');
    }
};

// Example: Fetch exchange rate data function
export const fetchExchangeRate = async (baseCurrency, targetCurrency) => {
    try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
        const data = await response.json();
        return data.rates[targetCurrency];
    } catch (error) {
        throw new Error('Failed to fetch exchange rate data');
    }
};
