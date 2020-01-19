import React from 'react';
import './Users.css'

const Users = ({ usersInfo, usersList }) => {


  let allUsers = usersList.map(user => {
    return <>
      <p className="basic-info-article">
        <img src={user.avatar} alt='avatar' /><br />
        User name: <strong>{user.first_name}</strong>
      </p>
      <br /><br />
    </>
  }
  );

  return (
    <div className="info-container">
      <h1 className="user-name">
        Amount of users: {usersInfo.per_page}
      </h1>
      {allUsers}
    </div>
  )

}

export default Users;

// setUsersAmount(response.per_page);
// setUserAvatar(response.data[2].avatar);
// setUserName(response.data[2].first_name);
