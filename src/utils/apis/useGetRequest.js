import { useState, useEffect } from 'react';
import { customAxios } from './customAxios';

const useGetRequest = ({path}) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
  
  const fetchData = async () => {
      setLoading(true);
      try {
        const res = await customAxios.get(path);
        setResponse(res.data);
        setError(null);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
  
  useEffect(() => {
    fetchData();
  }, []);
  
  return { response, error, loading };
};

export default useGetRequest;

