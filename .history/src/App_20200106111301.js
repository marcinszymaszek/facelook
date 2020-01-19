import React, { useState, useEffect } from 'react';
import Users from './components/users/Users'

const useFetch = url => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

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
    setLoading(false);
  }, []);
  return { data, loading };
};

const App = () => {

  const { data, loading } = useFetch('https://reqres.in/api/users?page=2');
  const [info, setInfo] = useState("elo ziomie");

  // const [users, setUsers] = useState(null);
  // const [usersList, setUsersList] = useState([]);

  // useEffect(async () => {
  //   const response = await fetch('https://reqres.in/api/users?page=2');
  //   const data = await response.json();
  //   setUsers(data);
  // }, []);

  return (
    <>
      {loading ? <div>...loading</div> :
        <div>

          <Users users={data}
            info={info}
          />


        </div>
      }
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
