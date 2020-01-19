import React from 'react';
import './WeatherInfo.css'

class WeatherInfo extends React.Component {

  render() {

    let icon =  this.props.weather.map(weather => weather.icon);

    return (
      <div className="info-container">
        <h3 className="city-name">
          Weather in {this.props.cityName.name}
        </h3>
        <p className="basic-info-article">
          Date: <strong>{this.props.weatherInfos.dt_txt}</strong><br />
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt='weather-icon' /><br/>
          Temperature: <strong>{this.props.main.temp} Kelvin</strong> 
        </p>
      </div>
    )
  }
}

export default WeatherInfo;

