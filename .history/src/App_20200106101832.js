import React, { useState, useEffect } from 'react';
import Users from './components/users/Users'

const useFetch = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data.data);
    setLoading(false);
  }, []);
  return { data, loading };
};


const App = () => {

  const { data, loading } = useFetch('https://reqres.in/api/users?page=2');
  // const [users, setUsers] = useState(null);
  // const [usersList, setUsersList] = useState([]);

  // useEffect(async () => {
  //   const response = await fetch('https://reqres.in/api/users?page=2');
  //   const data = await response.json();
  //   setUsers(data);
  // }, []);

  return (
    <>
      <div>
        <Users
        // users={users}
        // usersList={usersList}
        />
        {loading ? <div>...loading</div> : <div>{data.avatar}</div>}
        {/* <div>{data.first_name}</div> */}
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
