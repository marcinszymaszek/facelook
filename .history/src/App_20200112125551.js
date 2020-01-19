import React, { useState, useEffect } from 'react';
import Users from './components/users/Users'
import MainInfo from './components/main-info/MainInfo'
import axios from 'axios';

const App = () => {
  // const [data, setData] = useState({});
  const [data, setData] = useState({ elo: [] });

  useEffect(() => {

    //fetch via axios
    const fetchData = async () => {
      const result = await axios('https://hn.algolia.com/api/v1/search?query=redux');
      setData(result.data);
      // setUsersList(result.data);
    }
    fetchData();

    //   //fetch via fetch() method
    //   const fetchData = async () => {
    //     const response = await fetch('https://reqres.in/api/users?page=2');
    //     let data = await response.json()
    //     setData(data);
    //   }
    //     fetchData();

  }, []);


  const allUsers = data.elo.map(user => {
    return <>
      <p className="basic-info-article">
        {/* <img src={user.avatar} alt='avatar' /><br /> */}
        User name: <strong>{user.author}</strong><br />
      </p>
      <br />
    </>
  }
  );

  return (
    <>
      <div>
        {/* <MainInfo usersAmount={data.per_page} /> */}
        <Users allUsers={allUsers} />
      </div>
    </>
  )
}

export default App;

//================ FETCH VIA CUSTOM HOOK ==================================

// import React, { useState, useEffect } from 'react';
// import Users from './components/users/Users'
// import MainInfo from './components/main-info/MainInfo'
// import axios from 'axios';

// const useFetch = url => {
//   const [data, setData] = useState({});
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(url);
//       const data = await response.json();
//       setData(data);
//       setLoading(false);
//     }
//     fetchData();
//   }, []);
//   return { data, loading };
// };

// const App = () => {

//   const { data, loading } = useFetch('https://reqres.in/api/users?page=2');

//   return (
//     <>
//       {loading ? <div>...loading</div> :
//         <div>
//           <MainInfo usersAmount={data.per_page} />
//           <Users users={data.data} />
//         </div>
//       }
//     </>
//   )
// }

// export default App;