import { useState, useEffect } from 'react';
import { customAxios } from './customAxios';

const usePostRequest = ({path,params}) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
  
  const fetchData = async () => {
      setLoading(true);
      try {
        const res = await customAxios.post(path,params);
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

export default usePostRequest;

