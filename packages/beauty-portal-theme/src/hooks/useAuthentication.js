import { useState } from 'react';

const useAuthentication = authObject => {
  const [auth, setAuth] = useState(authObject);
  const setAuthentication = authObject => {
    setAuth(authObject);
    window.localStorage.setItem('userAuthentication', auth ? auth : null);
  };

  return [auth, setAuthentication];
};

export default useAuthentication;
