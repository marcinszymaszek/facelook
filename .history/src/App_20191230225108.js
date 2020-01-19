
import React, { useState, useEffect } from 'react';
import WeatherInfo from './components/weather-info/WeatherInfo'

const App = () => {

  const [cityName, setCityName] = useState({});
  const [weatherInfos, setWeatherInfos] = useState({});
  const [main, setMain] = useState({});
  const [weather, setWeather] = useState([]);

  useEffect(() => {

    fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=73ef50eb1d4f3377b39119c99b347b10')
      .then(response => response.json())
      .then(response => {
        if (1 == 1) {
          setCityName(response.city);
          setWeatherInfos(response.list[0]);
          setMain(response.list[0].main);
          setWeather(response.list[0].weather);
        }
      })
      .catch(error => console.log(error));
  });

  return (
    <>
      <div>
        <WeatherInfo cityName={cityName}
          weatherInfos={weatherInfos}
          main={main}
          weather={weather} />
      </div>
    </>
  )
}

export default App;
