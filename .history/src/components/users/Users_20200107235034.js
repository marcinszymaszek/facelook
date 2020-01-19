import React from 'react';
import './Users.css'

const Users = ({ users }) => {

  const allUsers = users.map(user => {
    return <>
      <p className="basic-info-article">
        <img src={user.avatar} alt='avatar' /><br />
        User name: <strong>{user.first_name}</strong>
        <br/> <br/>User email: <strong>{user.email}</strong>
      </p>
      <br />
    </>
  }
  );

  return (
    <div className="info-container">
      <div>
        {allUsers}
      </div>
    </div>
  )

}

export default Users;

//========= SoloLearn =======================================================

