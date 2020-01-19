import React, { useState, useEffect } from 'react';
import Users from './components/users/Users'

const App = () => {

  const [usersInfo, setUserInfo] = useState({});

  useEffect(() => {

    fetch('https://reqres.in/api/users?page=2')
      .then(response => response.json())
      .then(response => {
        if (JSON.stringify(usersInfo) !== JSON.stringify(response)) {
          setUserInfo(response);
        }
      })
      .catch(error => console.log(error));
  });
  

  return (
    <>
      <div>
        <Users usersInfo={usersInfo} />
      </div>
    </>
  )
}

export default App;

//========= SoloLearn =======================================================



// import React, { useState, useEffect } from 'react';
// import Users from './components/users/Users'

// const App = () => {

//   const [usersInfo, setUserInfo] = useState({});
//   const [usersList, setUsersList] = useState([]);

//   useEffect(() => {

//     fetch('https://reqres.in/api/users?page=2')
//       .then(response => response.json())
//       .then(response => {
//         JSON.stringify(response);
//         setUserInfo(response);
//         setUsersList(response.data);
//       })
//       .catch(error => console.log(error));
//   });

//   return (
//     <>
//       <div>
//         <Users usersInfo={usersInfo}
//           usersList={usersList} />
//       </div>
//     </>
//   )
// }

// export default App;
