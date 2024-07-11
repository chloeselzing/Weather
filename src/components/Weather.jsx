"use client";
import React from "react";
import { useFetchWeatherData } from "../utils/fetchWeatherData";

const Weather = ({ location, setLocation }) => {
  const apiKey = "6af21f70db814dd8ac290450241107";

  const { weatherData, error, isLoading } = useFetchWeatherData(
    location,
    apiKey
  );

  const handleSearch = (event) => {
    event.preventDefault();
    const locationValue = event.target.elements.location.value;
    setLocation(locationValue);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-700 via-yellow-300 to-orange-600 flex items-center justify-center py-10 px-5">
      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 w-full max-w-md">
        <h1 className="text-xl sm:text-2xl font-bold mb-4 text-center text-gray-800">
          Weather App
        </h1>
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row mb-4 space-y-2 sm:space-y-0 sm:space-x-2">
          <input
            type="text"
            name="location"
            placeholder="Enter location"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg sm:rounded-r-lg hover:bg-indigo-700 focus:outline-none disabled:opacity-50"
          >
            Search {isLoading && "..."}
          </button>
        </form>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {isLoading && <p className="text-center text-gray-600">Loading weather data...</p>}
        {weatherData && (
          <div className="text-center">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
              Weather in {weatherData.location.name}
            </h2>
            <p className="text-3xl sm:text-4xl font-bold text-gray-800">
              {weatherData.current.temp_c}°C
            </p>
            <p className="text-base sm:text-lg text-gray-600">
              {weatherData.current.condition.text}
            </p>
            <img
              src={`https:${weatherData.current.condition.icon}`}
              alt="Weather icon"
              className="mx-auto my-4"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
