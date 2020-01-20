import React from 'react';
import './Users.css'

const Users = ({ allUsers }) => {

  return (
      <div className="users-container">
        {allUsers}
      </div>
  )

}

export default Users;

