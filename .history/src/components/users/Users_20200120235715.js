import React from 'react';
import './Users.css'

const Users = ({ allUsers }) => {

  return (
      <div className="main-container">
        {allUsers}
      </div>
  )

}

export default Users;

