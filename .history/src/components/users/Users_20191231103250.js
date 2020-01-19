import React from 'react';
import './Users.css'

const Users = ({users}) => {


  // let icon =  weather.map(weather => weather.icon);

  return (
    <div className="info-container">
      <h1 className="user-name">
        Amount of users: {users.per_page}
      </h1>
      <p className="basic-info-article">
        <img src={users['data'][2].avatar} alt='avatar' /><br /><br />
        {/* User name: <strong>{users[0].data[2].first_name}</strong> */}
      </p>
    </div>
  )

}

export default Users;

// setUsersAmount(response.per_page);
// setUserAvatar(response.data[2].avatar);
// setUserName(response.data[2].first_name);
