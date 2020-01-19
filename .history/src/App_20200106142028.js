import React, { useState, useEffect } from 'react';
import Users from './components/users/Users'

const useFetch = url => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
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
  const {usersList} = data;

  // const allUsers = usersList.map(user => {
  //   return <>
  //     <p className="basic-info-article">
  //       <img src={user.avatar} alt='avatar' /><br />
  //       User name: <strong>{user.first_name}</strong>
  //     </p>
  //     <br />
  //   </>
  // }
  // );

  return (
    <>
      {loading ? <div>...loading</div> :
        <div>
          <h1 className="user-name">
            Amount of users: {data.per_page}<br />
            Amount of pages: {data.page}
          </h1>
          <Users/>
          {console.log(usersList)}
        </div>
      }
    </>
  )
}

export default App;


//========= SoloLearn =======================================================

