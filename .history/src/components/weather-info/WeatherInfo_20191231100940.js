import React from 'react';
import './WeatherInfo.css'

const WeatherInfo = ({ usersAmount, userAvatar, userName }) => {


  // let icon =  weather.map(weather => weather.icon);

  return (
    <div className="info-container">
      <h1 className="user-name">
        Amount of users: {usersAmount}
      </h1>
      <p className="basic-info-article">
        Third user is:<br />
        <img src={userAvatar} alt='user-avatar' /><br />
        User name: <strong>{userName}</strong>
      </p>
    </div>
  )

}

export default WeatherInfo;

