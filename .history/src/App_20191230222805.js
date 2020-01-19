
import React, {useState, useEffect} from 'react';
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
        if (JSON.stringify(cityName) !== JSON.stringify(response.data)) {
          setCityName(response.city);
        }
      })
      // .then(response => response.json())
      .then(response => {
        if (JSON.stringify(weatherInfos) !== JSON.stringify(response.data)) {
          setWeatherInfos(response.list[0]);
        }
      })
      // .then(response => {
      //   if (JSON.stringify(main) !== JSON.stringify(response.data)) {
      //     setMain(response.list[0].main);
      //   }
      // })
      // .then(response => {
      //   if (JSON.stringify(weather) !== JSON.stringify(response.data)) {
      //     setWeather(response.list[0].weather);
      //   }
      // })
      .catch(error => console.log(error));

  }, [cityName, weatherInfos, main, weather]);

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

