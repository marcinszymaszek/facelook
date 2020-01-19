import React, { useState, useEffect } from 'react';
import Users from '../users/Users'
import MainInfo from '../main-info/MainInfo'
import axios from 'axios';

const App = () => {
  // const [data, setData] = useState({});
  const [data, setData] = useState({ data: [] });

  useEffect(() => {

    //fetch via axios
    const fetchData = async () => {
      const result = await axios('https://reqres.in/api/users?page=2');
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

  const usersAmount = data.per_page;

  const allUsers = data.data.map(user => {
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
      <div>
        <MainInfo usersAmount={usersAmount} />
        <Users allUsers={allUsers} />
      </div>
    </>
  )
}

export default App;

