import React, { useState, useEffect } from "react";
import PulseLoader from "react-spinners/PulseLoader";

import WeatherCard from "./WheatherCard/component";

const WeatherEngine = ({ location }) => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null,
  });

  const getWeather = async (q) => {
    setQuery("");
    setLoading(true);
    try {
      const apiRes = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=c80b69787ac9c776d1cf86f8a6c50ce7`
      );
      const resJSON = await apiRes.json();
      setWeather({
        temp: resJSON.main.temp,
        city: resJSON.name,
        condition: resJSON.weather[0].main,
        country: resJSON.sys.country,
      });
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    getWeather(location);
  }, [location]);

  if (error) {
    return (
      <div style={{ color: "black" }}>
        There has been an error!
        <br />
        <button onClick={() => setError(false)}>Reset!</button>
      </div>
    );
  }

  if (loading) {
    return (
      <div
        style={{
          color: "black",
          width: "200px",
          height: "240px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PulseLoader color="purple" size={10} />
      </div>
    );
  }

  return (
    <WeatherCard
      temp={weather.temp}
      condition={weather.condition}
      city={weather.city}
      country={weather.country}
      getWeather={getWeather}
    />
  );
};

export default WeatherEngine;
