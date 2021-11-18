import { useState, useEffect } from 'react';

function useFetchData(method) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function() {
      try{
        setLoading(true);
        const res = await method();
        setData(res);
      }catch(err){
        setError(err);
      }finally{
        setLoading(false);
      }
    })();
  }, [method])

  return {
    data,
    error,
    loading
  }
}

export default useFetchData;