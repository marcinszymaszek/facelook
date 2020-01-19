import React from 'react';
import './WeatherInfo.css'

const WeatherInfo = (users) => {


  // let icon =  weather.map(weather => weather.icon);

  return (
    <div className="info-container">
      <h1 className="user-name">
        Amount of users: {usersAmount}
      </h1>
      <p className="basic-info-article">
        <img src={userAvatar} alt='user-avatar' /><br /><br />
        User name: <strong>{userName}</strong>
      </p>
    </div>
  )

}

export default WeatherInfo;

// setUsersAmount(response.per_page);
// setUserAvatar(response.data[2].avatar);
// setUserName(response.data[2].first_name);
