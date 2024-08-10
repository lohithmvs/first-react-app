import axios from "axios";
import { useEffect, useRef, useState } from "react";
import "./WeatherApi.css";

const WeatherApi = () => {
  const CityData = useRef();
  const [weatherData, UpdatedWeather] = useState({});
  const [cityName, SetCityName] = useState("");

  const FetchWeather = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8c1eb07bef9480af3407af9d1aeb0287&units=metric`
      );
      if (response.status === 200) {
        const data2 = response.data.main;
        console.log(data2);
        UpdatedWeather(data2);
      }
    } catch (err) {
      console.error("Error fetching weather data:", err);
    }
  };

  const SubmitHandler = (event) => {
    event.preventDefault();
    const data3 = CityData.current.value;
    SetCityName(data3);
    CityData.current.value="";
  };

  useEffect(() => {
    if (cityName) {
      FetchWeather(cityName);
    }
  }, [cityName]);

  return (
    <div className="weather-container">
      <form onSubmit={SubmitHandler} className="weather-form">
        <input
          type="text"
          ref={CityData}
          placeholder="Enter city name"
          className="weather-input"
        />
        <input type="submit" value="Search" className="weather-button" />
      </form>

      {Object.keys(weatherData).length > 0 ? (
        <div className="weather-result">
          <h2>Temperature: {weatherData.temp}°C</h2>
        </div>
      ) : (
        <h2 className="weather-placeholder">Please enter a city name</h2>
      )}
    </div>
  );
};

export default WeatherApi;
