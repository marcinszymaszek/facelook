import React from 'react';
import './Users.css'

const Users = ({ users, loading }) => {

  const usersList = users.data;
  const allUsers = usersList.map(user => {
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
    <>
      {loading ? <div>...loading</div> :
        <div className="info-container">
          <h1 className="user-name">
            Amount of users: {users.per_page}
            {/* Total pages: {users.total_pages} */}
          </h1>
          <div>
            {allUsers}
          </div>
        </div>
      }
    </>
  )

}

export default Users;


//========= SoloLearn =======================================================

