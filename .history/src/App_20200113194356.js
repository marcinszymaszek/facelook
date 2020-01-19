import React from 'react';
import Users from './Users'
import MainInfo from './MainInfo'

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

const App = () => {

  // const { data, loading } = useFetch('https://reqres.in/api/users?page=2');

  return (
    <>
      {/* {loading ? <div>...loading</div> : */}
      <div>
        <MainInfo />
        <Users />
      </div>
      {/* } */}
    </>
  )
}

export default App;

//========= SoloLearn =======================================================

