import React, { useState, useEffect } from 'react';

const ExchangeRateComponent = () => {
    const [exchangeRate, setExchangeRate] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://api.exchangerate-api.com/v4/latest/SAR`)
            .then(response => response.json())
            .then(data => setExchangeRate(data.rates.USD))
            .catch(error => setError(error));
    }, []);

    if (error) return <div>Error: {error.message}</div>;
    if (!exchangeRate) return <div>Loading...</div>;

    return (
        <div>
            <h2>Saudi Riyal to USD Exchange Rate</h2>
            <p>1 SAR = {exchangeRate} USD</p>
        </div>
    );
};

export default ExchangeRateComponent;
