import React, { useState, useEffect } from 'react';
import Users from './components/users/Users'
import MainInfo from './components/main-info/MainInfo'

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
  }, [url]);
  return { data, loading };
};

export default () => {

  const { data, loading } = useFetch('https://reqres.in/api/users?page=2');

  return (
    <>
      {loading ? <div>...loading</div> :
        <div>
          <MainInfo usersAmount={data.per_page} />
          <Users users={data.data} />
        </div>
      }
    </>
  )
}


//========= SoloLearn =======================================================

