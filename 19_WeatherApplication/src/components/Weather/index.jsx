import React, { useEffect, useState } from "react";
import Search from "../Search/index.jsx";
import getCurrentDate from "../../utilities/getCurrentDate.js";

const Weather = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (param) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=4571b7bc2050b1284eaeb8374823c72f`,
      );
      const data = await response.json();
      console.log("data", data);
      if (data) {
        setLoading(false);
        setError("");
        setWeatherData(data);
      }
    } catch (e) {
      setError(e.message);
    }
  };

  const handleSearch = async () => {
    await fetchWeatherData(searchTerm);
  };

  useEffect(() => {
    fetchWeatherData("bangalore");
  }, []);

  return (
    <div className="">
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
      {loading ? (
        <div className="loading">Loading....</div>
      ) : (
        <div>
          <div className="city-name">
            <h2>
              {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
            </h2>
          </div>
          <div className="date">
            <span>{getCurrentDate()}</span>
          </div>
          <div className="temperature">{weatherData?.main?.temp}</div>
          <p className="description">
            {weatherData && weatherData.weather && weatherData.weather[0]
              ? weatherData.weather[0].description
              : ""}
          </p>
          <div className="weather-info">
            <div className="weather-info-spec">
              <div>
                <p className="wind-speed">{weatherData?.wind?.speed}</p>
                <p>Wind Speed</p>
              </div>
            </div>
            <div className="weather-info-spec">
              <div>
                <p className="humidity">{weatherData?.main?.humidity}%</p>
                <p>Humidity</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
