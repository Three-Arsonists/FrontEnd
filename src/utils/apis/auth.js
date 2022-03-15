import useGetRequest from './useGetRequest';
import usePostRequest from './usePostRequest';

export const APISignUp = () => {
  // APISignUp을 호출하면 경로와 옵션을 파라미터로 usePostRequest를 호출한다
  const { response, error, loading, fetchData:ReqSignUp } = usePostRequest( 'users/signup' , {headers: {"Content-Type":`application/json`}} );
  
  // 경로, 옵션이 입력된 response, error, loading, ReqSignUp를 반환한다
  return { response, error, loading, ReqSignUp }
}