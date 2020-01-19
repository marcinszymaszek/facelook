import React from 'react';


class WeatherInfo extends React.Component {

  render() {
    return (
      <div className="info-container">
        <h1 className="city-name">
          Current weather in {this.props.cityName.name}
        </h1>
        <p className="basic-info-article">
          Date: {this.props.weatherInfos.dt_txt}<br/>
          {/* <img src={`http://openweathermap.org/img/wn/${this.props.weatherInfos.weather}@2x.png`} alt='weather-icon' /> */}
          Temperature: {this.props.main.temp} Kelvin
        </p>
      </div>
    )
  }
}

export default WeatherInfo;

