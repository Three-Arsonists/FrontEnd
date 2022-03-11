import { useState, useCallback } from 'react';
import { customAxios } from './customAxios';

// 1. auth.js에서로 부터 path랑 option을 받고
const usePostRequest = ( path, option ) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  // 2. usecallback Dependency로 path랑 option를 기입한 상태로 fetchData를 반환한다 
  const fetchData = useCallback(
    async params => {
      // 3. params는 반환된 fetchData에 인자를 넣고 실행할 때 인자로 받게 된다 
      try {
        const res = await customAxios.post(path,params,option);
        setResponse(res.data);
        setError(null);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    },
    [path,option]
  );
  
  return { response, error, loading, fetchData };
};

export default usePostRequest;

