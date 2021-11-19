import { useState, useEffect } from 'react';

function useFetchData(method, value = undefined) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function() {
      try{
        setLoading(true);
        const res = await method(value);
        setData(res);
      }catch(err){
        setError(err);
      }finally{
        setLoading(false);
      }
    })();
  }, [method, value])

  return {
    data,
    error,
    loading,
    setData,
    setLoading
  }
}

export default useFetchData;