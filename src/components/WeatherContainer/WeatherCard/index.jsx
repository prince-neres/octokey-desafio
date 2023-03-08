import React from "react";
import { WeatherIcons } from "../index.jsx";

export const WeatherInfoIcons = {
  sunset: "weather-icons/temp.png",
  sunrise: "weather-icons/temp.png",
  humidity: "weather-icons/humidity.png",
  wind: "weather-icons/wind.png",
  pressure: "weather-icons/pressure.png",
};

const WeatherInfo = (props) => {
  const {name, value} = props;
  return (
    <div>
      <img src={WeatherInfoIcons[name]} alt="Ícone de informação do clima"/>
        <p>
          {value}
          <span>{name}</span>
        </p>
    </div>
  )
};

const WeatherCard = (props) => {
  const {weather} = props;
  const isDay = weather?.weather[0].icon?.includes("d");
  const getTime = (timeStamp) => {
      return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
  };

  return (
		<>
			<div>
				<div>
					<span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
					{`  |  ${weather?.weather[0].description}`}
				</div>
				<img src={WeatherIcons[weather?.weather[0].icon]} alt="Ícone de clima" />
			</div>
			<p>{`${weather?.name}, ${weather?.sys?.country}`}</p>

			<p>Weather Info</p>
			<div>
				<WeatherInfo name={isDay ? "sunset" : "sunrise"}
					value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`}
				/>
				<WeatherInfo name={"humidity"}
					value={weather?.main?.humidity}
				/>
				<WeatherInfo name={"wind"}
					value={weather?.wind?.speed}
				/>
				<WeatherInfo name={"pressure"}
					value={weather?.main?.pressure}
				/>
			</div>
		</>
  )
};

export default WeatherCard;
