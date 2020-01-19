import React, { useState, useEffect } from 'react';
import Users from './components/users/Users'

const useFetch = url => {
  const [data, setData] = useState({});

  //   useEffect(() => {
  //     async function fetchData() {
  //       const response = await fetch(url);
  //       const data = await response.json();
  //       setData(data.data);
  //       setLoading(false);
  //     }
  //     fetchData();
  //   }, []);
  //   return { data, loading };
  // };

  useEffect(async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);

  }, []);
  return { data };
};

const App = () => {

  const { data } = useFetch('https://reqres.in/api/users?page=2');

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
          <Users users={data}
          />
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
