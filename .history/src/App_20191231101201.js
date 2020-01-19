
import React, { useState, useEffect } from 'react';
import WeatherInfo from './components/weather-info/WeatherInfo'

const App = () => {

  const [usersAmount, setUsersAmount] = useState();
  const [userAvatar, setUserAvatar] = useState();
  const [userName, setUserName] = useState();

  useEffect(() => {

    fetch('https://reqres.in/api/users?page=2')
      .then(response => response.json())
      .then(response => {

        if (JSON.stringify(response)) {
          setUsersAmount(response.per_page);
          setUserAvatar(response.data[2].avatar);
          setUserName(response.data[2].first_name);
        }

      })
      .catch(error => console.log(error));
  });

  return (
    <>
      <div>
        <WeatherInfo usersAmount={usersAmount}
          userAvatar={userAvatar}
          userName={userName} />
      </div>
    </>
  )
}

export default App;

//========================================================================


// .then(response => {
//   if (JSON.stringify(cityName) !== JSON.stringify(response.data)) {
//     setCityName(response.city);
//   }
// })


//-----------------------------------------------------------------


// import React, { useState, useEffect } from 'react';
// import WeatherInfo from './components/weather-info/WeatherInfo'

// const App = () => {

//   const [cityName, setCityName] = useState({});
//   const [weatherInfos, setWeatherInfos] = useState({});
//   const [main, setMain] = useState({});
//   const [weather, setWeather] = useState([]);

//   useEffect(() => {
//     fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=73ef50eb1d4f3377b39119c99b347b10')
//       .then(response => response.json())
//       .then(response => {
//         JSON.stringify(response);
//         setCityName(response.city);
//         setWeatherInfos(response.list[0]);
//         setMain(response.list[0].main);
//         setWeather(response.list[0].weather);
//       })
//       .catch(error => console.log(error));
//   });

//   return (
//     <>
//       <div>
//         <WeatherInfo cityName={cityName}
//           weatherInfos={weatherInfos}
//           main={main}
//           weather={weather} />
//       </div>
//     </>
//   )
// }

// export default App;