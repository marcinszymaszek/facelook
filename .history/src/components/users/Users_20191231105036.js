import React, { useEffect } from 'react';
import './Users.css'

const Users = ({ users }) => {



  useEffect(() => {
  JSON.parse(users)
  JSON.stringify(users);
  });

  let usersList = users.data.map(user => {
    return <p className="basic-info-article">
      <img src={user.avatar} alt='avatar' /><br /><br />
      User name: <strong>{user.first_name}</strong>
    </p>

  });

  return (
    <div className="info-container">
      <h1 className="user-name">
        Amount of users: {users.per_page}
      </h1>
      {usersList}
    </div>
  )

}

export default Users;

// setUsersAmount(response.per_page);
// setUserAvatar(response.data[2].avatar);
// setUserName(response.data[2].first_name);
