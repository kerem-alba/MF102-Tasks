import React, { useState } from "react";
import "./App.css";

function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const API_KEY = "d881e7dc6986158e6ccd738e670a1b88";

  const fetchWeather = async () => {
    if (city) {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=tr`
      );

      if (response.ok) {
        const data = await response.json();
        setWeather(data);
      } else {
        setWeather("error");
      }
    } else {
      setWeather(null);
    }
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchWeather();
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4">
            <h1 className="text-center mb-4">Hava Durumu Uygulaması</h1>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Şehir ismini giriniz"
                value={city}
                onChange={handleCityChange}
                onKeyDown={handleKeyDown}
              />
              <button
                className="btn btn-primary"
                type="button"
                onClick={fetchWeather}
              >
                Hava Durumunu Getir
              </button>
            </div>
            {weather === "error" && (
              <div className="alert alert-danger" role="alert">
                Böyle bir şehir yok.
              </div>
            )}
            {weather && weather !== "error" && (
              <div className="card mt-4">
                <div className="card-body">
                  <h2 className="card-title">{weather.name}</h2>
                  <p className="card-text">Sıcaklık : {weather.main.temp} °C</p>
                  <p className="card-text">
                    Durum : {weather.weather[0].description}
                  </p>
                  <p className="card-text">Nem : {weather.main.humidity}%</p>
                  <p className="card-text">
                    Rüzgar Hızı : {weather.wind.speed} m/s
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherApp;
