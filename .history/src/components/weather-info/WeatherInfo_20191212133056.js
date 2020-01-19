import React from 'react';


class WeatherInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          weather: null,
        };
      }

      componentDidMount() {
        fetch('https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22')
          .then(response => response.json())
          .then(data => this.setState({ weather: data }));
      }

  render() {
    return (
        <h1>
            weather in London
        </h1>
    )
  }
}

export default WeatherInfo;