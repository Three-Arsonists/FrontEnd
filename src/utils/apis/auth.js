import useGetRequest from './useGetRequest';
import usePostRequest from './usePostRequest';

export const SignUpUser = async ( postDto ) => {
  const { response, error, loading } = usePostRequest('/signup', postDto);
  return { response, error, loading }
}