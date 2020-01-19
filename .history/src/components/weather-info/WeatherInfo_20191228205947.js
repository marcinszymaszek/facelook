import React from 'react';


class WeatherInfo extends React.Component {

  constructor(props) {
    super(props);
    
    };
  

  render() {
    return (
      <div className="info-container">
        <h1 className="city-name">
          Current weather in {this.props.cityName.name}
        </h1>
        <p className="basic-info-article">
          Date: {this.props.weatherInfos.dt_txt}
          {/* <img src={`http://openweathermap.org/img/wn/${this.props.weatherInfos[0].icon}@2x.png`} alt='weather-icon' /> */}
          Temperature: {this.props.weatherInfos.main} Kelvin
        </p>
      </div>
    )
  }
}

export default WeatherInfo;








// import React from 'react';
// import './WeatherInfo.css'

// const WeatherInfo = ({ cityName, weatherInfos, main, weather  }) => {


//     let icon =  weather.map(weather => weather.icon);

//     return (
//       <div className="info-container">
//         <h3 className="city-name">
//           Weather in {cityName.name}
//         </h3>
//         <p className="basic-info-article">
//           Date: <strong>{weatherInfos.dt_txt}</strong><br />
//           <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt='weather-icon' /><br/>
//           Temperature is: <strong>{main.temp} Kelvin</strong> 
//         </p>
//       </div>
//     )
  
// }

// export default WeatherInfo;

