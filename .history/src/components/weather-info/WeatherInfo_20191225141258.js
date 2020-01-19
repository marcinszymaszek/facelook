import React from 'react';


class WeatherInfo extends React.Component {

  render() {
    return (
      <div className="info-container">
        <h1 className="city-name">
          Current weather in {this.props.weather.name}
        </h1>
        <p className="basic-info-article">
          <img src={`http://openweathermap.org/img/wn/${this.props.weather.list[0].weather.icon}@2x.png`} alt='weather-icon' />
          Date: {this.props.weather.list[0].dt_txt}
          Temperature: {this.props.weather.list[0].main.temp} Kelvin
        </p>
      </div>
    )
  }
}

export default WeatherInfo;

