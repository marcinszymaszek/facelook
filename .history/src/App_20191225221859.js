import React from 'react';
import WeatherInfo from './components/weather-info/WeatherInfo'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cityName: {},
      weatherInfos: {},
      main: {}
    };
  }

  componentDidMount() {
    fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=73ef50eb1d4f3377b39119c99b347b10')
      .then(response => response.json())
      .then(data => this.setState({
        cityName: data.city,
        weatherInfos: data.list[0],
        main: data.list[0].main
      }));
  }

  render() {
    return (
      <>
        <div>
          <WeatherInfo cityName={this.state.cityName} weatherInfos={this.state.weatherInfos} />
        </div>
      </>
    )
  }
}

export default App;