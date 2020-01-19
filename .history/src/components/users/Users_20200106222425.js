import React from 'react';
import './Users.css'

export default ({ users, test }) => {

  const doubleNum = () => { return 2 * test }

  const allUsers = users.map(user => {
    return <>
      <p className="basic-info-article">
        <img src={user.avatar} alt='avatar' /><br />
        User name: <strong>{user.first_name}</strong>
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
      <div>{doubleNum}</div>
    </div>
  )

}


//========= SoloLearn =======================================================

