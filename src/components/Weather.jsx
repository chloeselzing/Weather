"use client";
import React from "react";
import { useFetchWeatherData } from "../utils/fetchWeatherData";

const Weather = ({ location, setLocation }) => {
  
  const apiKey = "6af21f70db814dd8ac290450241107"; 

  const { weatherData, error, isLoading } = useFetchWeatherData(location, apiKey);

  const handleSearch = (event) => {
    event.preventDefault();
    const locationValue = event.target.elements.location.value;
    setLocation(locationValue);
  };

  return (
    <div>
      <h1>Weather App</h1>
      <form onSubmit={handleSearch}>
        <input type="text" name="location" placeholder="Enter location" />
        <button type="submit" disabled={isLoading}>
          Search {isLoading && "..."}
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      {isLoading && <p>Loading weather data...</p>}
      {weatherData && (
        <div>
          <h2>Weather in {weatherData.location.name}</h2>
          <p>Temperature: {weatherData.current.temp_c}°C</p>
          <p>Conditions: {weatherData.current.condition.text}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
