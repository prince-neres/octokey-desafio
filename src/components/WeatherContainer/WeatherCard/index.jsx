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
    <div className="flex flex-row justify-evenly items-center w-1/2 pt-5">
      <img src={WeatherInfoIcons[name]} alt="Ícone de informação do clima" className="w-1/6"/>
        <p className="flex flex-col">
          {value}
          <span className="capitalize">{name}</span>
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
			<div className="flex flex-row justify-between items-center m-auto">
				<div className="m-auto">
					<span className="font-bold text-3xl">{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
					{`  |  ${weather?.weather[0].description}`}
				</div>
				<img src={WeatherIcons[weather?.weather[0].icon]} alt="Ícone de clima" className="w-1/3"/>
			</div>
			<p className="m-auto font-bold text-2xl pb-5">{`${weather?.name}, ${weather?.sys?.country}`}</p>

			<p className="text-start font-bold">Informações sobre clima</p>
			<div className="flex flex-row justify-evenly items-center m-auto flex-wrap w-3/4">
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
