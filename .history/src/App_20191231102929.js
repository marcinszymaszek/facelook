
import React, { useState, useEffect } from 'react';
import Users from './components/users/Users'

const App = () => {

  const [users, setUsers] = useState({});

  useEffect(() => {

    fetch('https://reqres.in/api/users?page=2')
      .then(response => response.json())
      .then(response => {
        JSON.stringify(response);
        setUsers(response);
      })
      .catch(error => console.log(error));
  });

  return (
    <>
      <div>
        <Users users={users} />
      </div>
    </>
  )
}

export default App;
