import React from 'react';


class WeatherInfo extends React.Component {

  render() {

    let icon =  this.props.weather.map(weather => weather.icon);

    return (
      <div className="info-container">
        <h1 className="city-name">
          Current weather in {this.props.cityName.name}
        </h1>
        <p className="basic-info-article">
          Date: {this.props.weatherInfos.dt_txt}<br />
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt='weather-icon' /><br/>
          Temperature: {this.props.main.temp} Kelvin
        </p>
        {console.log(icon)}
      </div>
    )
  }
}

export default WeatherInfo;

