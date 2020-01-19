import React from 'react';
import './Users.css'

const Users = ({ usersList }) => {


  let allUsers = usersList.map(user => {
    return <>
      <p className="basic-info-article">
        <img src={user.avatar} alt='avatar' /><br/>
        Userdasa name: <strong>{user.first_name}</strong>
      </p>
      <br />
    </>
  }
  );

  return (
    <div className="info-container">
      <h1 className="user-name">
        {/* Amount of users: {usersInfo.per_page} */}
      </h1>
      {allUsers}
    </div>
  )

}

export default Users;


//========= SoloLearn =======================================================


// import React from 'react';
// import './Users.css'

// const Users = ({ usersInfo, usersList }) => {


//   let allUsers = usersList.map(user => {
//     return <>
//       <p className="basic-info-article">
//         <img src={user.avatar} alt='avatar' /><br/>
//         User name: <strong>{user.first_name}</strong>
//       </p>
//       <br />
//     </>
//   }
//   );

//   return (
//     <div className="info-container">
//       <h1 className="user-name">
//         Amount of users: {usersInfo.per_page}
//       </h1>
//       {allUsers}
//     </div>
//   )

// }

// export default Users;