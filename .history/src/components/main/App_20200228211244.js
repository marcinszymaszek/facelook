import React, { useState, useEffect } from 'react';
import MainInfo from '../main-info/MainInfo'
import Friends from '../friends/Friends'
import Opinion from '../opinion/Opinion'
import Users from '../users/Users'
import axios from 'axios';
import { Provider } from 'react-redux';
import store from '../../store/store';

import '../../styles/styles.scss'

const App = () => {
  const [data, setData] = useState({ data: [] });

  useEffect(() => {

    //fetch via axios
    const fetchData = async () => {
      const result = await axios('https://reqres.in/api/users?page=2');
      setData(result.data);
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
    return <span className="user-box" key={user.id}>
      <img src={user.avatar} alt='avatar' title="elo" />< br />
      User name: <strong>{user.first_name}</strong>
    </span>
  });

  return (
    <Provider store={store}>
      <div className="main-container">
        <MainInfo usersAmount={usersAmount} />
        <Friends />
        <Opinion />
        <Users allUsers={allUsers} />
      </div>
    </Provider>
  )
}

export default App;

