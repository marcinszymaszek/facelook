import React, { useState, useEffect } from 'react';
import MainInfo from '../main-info/MainInfo'
import Friends from '../friends/Friends'
import Opinion from '../opinion/Opinion'
import Users from '../users/Users'

import './App.css'

const useFetch = url => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setLoading(false);
    }
    fetchData();
  }, []);
  return { data, loading };
};

const App = () => {

  const { data, loading } = useFetch('https://reqres.in/api/users?page=2');

  return (
    <>
      {loading ? <div>...loading</div> :
        <div className="info-container">
          <MainInfo usersAmount={data.per_page} />
          <Friends />
          <Opinion />
          <Users users={data.data} />
        </div>
      }
    </>
  )
}

export default App;




