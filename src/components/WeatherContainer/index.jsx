import React, { useState, useEffect } from "react";
import { geoFindMe } from "../../commons/utils";
import WeatherCard from "./WeatherCard";

export const WeatherIcons = {
  "01d": "weather-icons/sunny.png",
  "01n": "weather-icons/night.png",
  "02d": "weather-icons/day.png",
  "02n": "weather-icons/cloudy-night.png",
  "03d": "weather-icons/cloudy.png",
  "03n": "weather-icons/cloudy.png",
  "04d": "weather-icons/perfect-day.png",
  "04n": "weather-icons/cloudy-night.png",
  "09d": "weather-icons/rain.png",
  "09n": "weather-icons/rain-night.png",
  "10d": "weather-icons/rain.png",
  "10n": "weather-icons/rain-night.png",
  "11d": "weather-icons/storm.png",
  "11n": "weather-icons/storm.png",
};

export default function Weather() {
	const key = 'ecb6371f9611194ce558f5867543f019';
  const [weather, updateWeather] = useState();

  useEffect(() => {
		geoFindMe();
	  const weather_data = JSON.parse(localStorage.getItem("weather"));
		const { latitude, longitude} = JSON.parse(localStorage.getItem("coordinates"));

    const fetchWeatherCity = async () => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`);
      const json = await response.json();
			localStorage.setItem("weather", JSON.stringify(json));
      updateWeather(json);
    }

    weather_data ? updateWeather(weather_data) : fetchWeatherCity().catch(console.error);
  }, []);

  return (
    <div className="shadow-lg bg-light-200 dark:bg-dark-200 text-center rounded-xl m-auto xl:w-1/3 lg:w-1/2 md:w-3/4 p-10">
      <p className="font-bold text-xl">Cilma local</p>
      {
        weather
        ? (<WeatherCard weather={weather} />)
        : (<p>Buscando informações sobre sua localização...</p>)
      }
    </div>
  )
};
