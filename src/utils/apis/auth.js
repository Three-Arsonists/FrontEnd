import useGetRequest from './useGetRequest';
import usePostRequest from './usePostRequest';

export const APISignUp = () => {
  const { response, error, loading, fetchData:ReqSignUp } = usePostRequest( '/signup' );
  return { response, error, loading, ReqSignUp }
}