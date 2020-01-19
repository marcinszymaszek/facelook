import React from 'react';
import WeatherInfo from './components/weather-info/WeatherInfo'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      weather: [],
    };
  }

  componentDidMount() {
    fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=73ef50eb1d4f3377b39119c99b347b10')
      .then(response => response.json())
      .then(data => this.setState({ weather: data.weather }));
  }

  render() {
    return (
      <>
        <div>
          <WeatherInfo weather={this.state.weather} />
        </div>
      </>
    )
  }
}

export default App;