import React from "react";

import "./App.css";
import WeatherEngine from "./components/WeatherEngine";

function App() {
  return (
    <div className="App">
      <WeatherEngine location="London, gb" />
      <WeatherEngine location="New York, us" />
      <WeatherEngine location="Gorakhpur, in" />
      <WeatherEngine location="New Delhi, in" />
      <WeatherEngine location="Cairo, eg" />
    </div>
  );
}

export default App;
