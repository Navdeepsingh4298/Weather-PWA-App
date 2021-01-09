import React, { useState } from 'react';

// To fetch weather data
import { fetchWeather } from './api/fetchWeather';

// components
import Footer from './components/footer/footer.component';
import Header from "./components/header/header.component";
import InputBox from './components/input-box/input-box.component';

// stylesheet
import './App.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if (e.key === 'Enter') {
      const data = await fetchWeather(query)
      setWeather(data);
      setQuery('');
    }
  }

  return (
    <div className="main-container">
      <Header
        name="Weather App"
      />
      <InputBox
        type="text"
        placeholder="Search Here"
        value={query}
        handleChange={(e) => setQuery(e.target.value)}
        handleKeyPress={search}
      />
      {
        weather.main && (
          <div className="city">
            <h2 className="city-name">
              <span>{weather.name}</span>
              <sup>{weather.sys.country}</sup>
            </h2>
            <span><strong>longitude:</strong> {weather.coord.lon}  <strong>latitude:</strong> {weather.coord.lat}</span>
            <div className="city-temp">
              <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
              {
                Math.round(weather.main.temp)
              }
              <sup>&deg;C</sup>
              <div className="min-max">
                <span>Min: {weather.main.temp_min}&deg;C</span>
                <span>Max: {weather.main.temp_max}&deg;C</span>
              </div>
            </div>
            <div className="info">
              <p><strong>feels like {weather.main.feels_like}&deg;C, </strong>
                <strong> {weather.weather[0].description}</strong>
              </p>
            </div>
            <div className="more-info">
              <span><strong>Wind Speed:</strong> {weather.wind.speed}m/s</span>
              <span><strong>Pressure:</strong> {weather.main.pressure}hPa</span>
              <span><strong>Humidity:</strong> {weather.main.humidity}%</span>
              <span><strong>Cloudiness:</strong> {weather.clouds.all}%</span>
            </div>
          </div>
        )
      }
      <Footer />
    </div>
  );
}

export default App;
