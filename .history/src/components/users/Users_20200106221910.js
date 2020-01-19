import React from 'react';
import './Users.css'

export default ({ users }) => {

  const allUsers = users.map(user => {
    return <>
      <p className="basic-info-article">
        <img src={user.avatar} alt='avatar' /><br />
        Usfsdsr name: <strong>{user.first_name}</strong>
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


//========= SoloLearn =======================================================

