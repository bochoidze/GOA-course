import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("Tbilisi");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    fetchWeather("Tbilisi");
  }, []);

  async function fetchWeather(query) {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) throw new Error("City not found");

      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (city.trim() !== "") fetchWeather(city);
  }

  return (
    <div className="container">
      <h1 className="title">Weather App</h1>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p className="info">Loading...</p>}
      {error && <p className="error">{error}</p>}

      {weather && !loading && (
        <div className="weather-card">
          <h2>{weather.name}</h2>
          <p className="temp">{Math.round(weather.main.temp)}°C</p>
          <p className="desc">{weather.weather[0].description}</p>
          <p className="details">
            Humidity: {weather.main.humidity}% | Wind: {weather.wind.speed} m/s
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
