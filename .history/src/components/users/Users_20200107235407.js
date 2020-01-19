import React from 'react';
import './Users.css'

const Users = ({ users }) => {

  if (module.hot)
  module.hot.accept()

  const allUsers = users.map(user => {
    return <>
      <p className="basic-info-article">
        <img src={user.avatar} alt='avatar' /><br />
        User nadasdme: <strong>{user.first_name}</strong>
        <br/> User email: <strong>{user.id}</strong>
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

