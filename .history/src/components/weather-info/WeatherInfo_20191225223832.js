import React from 'react';


class WeatherInfo extends React.Component {

  render() {

    let icon =  this.props.weather.map(weather => weather.icon);

    return (
      <div className="info-container">
        <h3 className="city-name">
          Current weather in <strong>{this.props.cityName.name}</strong>
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

