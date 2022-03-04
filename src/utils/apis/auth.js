import useGetRequest from './useGetRequest';
import usePostRequest from './usePostRequest';

export const APISignUp = () => {
  const { response, error, loading, fetchData:ReqSignUp } = usePostRequest( 'users/signup' );
  return { response, error, loading, ReqSignUp }
}