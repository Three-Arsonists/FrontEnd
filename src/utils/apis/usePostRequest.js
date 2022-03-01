import { useState, useEffect, useCallback } from 'react';
import { customAxios } from './customAxios';

const usePostRequest = (path) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const fetchData = useCallback(
    async params => {
      try {
        const res = await customAxios.post(path,params);
        setResponse(res.data);
        setError(null);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    },
    [path]
  );
  
  return { response, error, loading,fetchData };
};

export default usePostRequest;

