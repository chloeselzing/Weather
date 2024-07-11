import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchWeatherData = (location, apiKey) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const baseUrl = "https://api.weatherapi.com/v1/current.json";
        const url = `${baseUrl}?key=${apiKey}&q=${location}`;
        console.log("Fetching weather data from URL:", url);

        const response = await axios.get(url);
        setWeatherData(response.data);
        console.log(response);
        
        setError(null);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setError("Error fetching weather data.");
      } finally {
        setIsLoading(false);
      }
    };

    if (location) {
      fetchData();
    }
  }, [location, apiKey]);

  return { weatherData, error, isLoading };
};
