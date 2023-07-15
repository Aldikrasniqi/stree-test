import { useContext } from 'react';
import { UserContext } from '../Utils/userContext.js';

const useAuth = () => {
  const isLogged = useContext(UserContext);

  return isLogged;
};

export default useAuth;
