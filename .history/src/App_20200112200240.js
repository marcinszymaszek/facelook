import React, { useState, useEffect } from 'react';
import Users from './components/users/Users'
import MainInfo from './components/main-info/MainInfo'
import axios from 'axios';

const App = () => {
  // const [data, setData] = useState({});
  const [data, setData] = useState({});

  useEffect(() => {

    //fetch via axios
    // const fetchData = async () => {
    //   const result = await axios('https://samples.openweathermap.org/data/3.0/triggers/816a?appid=f9bd5aefa38c6c4860a37b93f485dc19');
    //   setData(result.data);
    //   // setUsersList(result.data);
    // }
    // fetchData();

      //fetch via fetch() method
      const fetchData = async () => {
        const response = await fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');
        let data = await response.json()
        setData(data);
      }
        fetchData();

  }, []);


  const allUsers = data.members.map(user => {
    return <>
      <p className="basic-info-article">
        {/* <img src={user.avatar} alt='avatar' /><br /> */}
        User name: <strong>{user.first_name}</strong>
      </p>
      <br />
    </>
  }
  );

  return (
    <>
      <div>
        <MainInfo usersAmount={data.formed} />
        {/* <Users allUsers={allUsers} /> */}
      </div>
    </>
  )
}

export default App;


//==================================================


// import React, { useState, useEffect } from 'react';
// import Users from './components/users/Users'
// import MainInfo from './components/main-info/MainInfo'
// import axios from 'axios';

// const App = () => {
//   // const [data, setData] = useState({});
//   const [data, setData] = useState({data:[]},{data:[]});

//   useEffect(() => {

//     //fetch via axios
//     const fetchData = async () => {
//       const result = await axios('https://reqres.in/api/users?page=2');
//       setData(result.data);
//       // setUsersList(result.data);
//     }
//     fetchData();

//     //   //fetch via fetch() method
//     //   const fetchData = async () => {
//     //     const response = await fetch('https://reqres.in/api/users?page=2');
//     //     let data = await response.json()
//     //     setData(data);
//     //   }
//     //     fetchData();

//   }, []);


//   const allUsers = data.data.map(user => {
//     return <>
//       <p className="basic-info-article">
//         <img src={user.avatar} alt='avatar' /><br />
//         User name: <strong>{user.first_name}</strong>
//       </p>
//       <br />
//     </>
//   }
//   );

//   return (
//     <>
//       <div>
//         <MainInfo usersAmount={data.per_page} />
//         <Users allUsers={allUsers} />
//       </div>
//     </>
//   )
// }

// export default App;
