import React from 'react';


class WeatherInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          weather: [],
        };
      }

      componentDidMount() {
        fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=73ef50eb1d4f3377b39119c99b347b10')
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


// import React from 'react';


// class WeatherInfo extends React.Component {


//   state = {
//     weather: []
//   };

//   //API KEY is 73ef50eb1d4f3377b39119c99b347b10
//   componentDidMount() {
//     fetch('https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22', {
//       method: 'GET',
//       headers: {
//         'Authorization': '73ef50eb1d4f3377b39119c99b347b10'
//       }
//     })
//       .then(res => res.json())
//       .then(json => this.setState({ weather: json.results }));
//   }


//   render() {
//     return (
//       <h1>
//         weather in London
//         </h1>
//     )
//   }
// }

// export default WeatherInfo;