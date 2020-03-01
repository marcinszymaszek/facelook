import React, { useState, useEffect } from 'react';

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

  export default useFetch;