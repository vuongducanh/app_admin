import React from 'react';
import AuthContext from './authContext';

const AuthState = props => {
  const isAuthenticated = () => {
    const token = localStorage.getItem('access_token')
    return !!token
  };

  const logout = () => {
    localStorage.setItem('access_token', "")
    // window.FB.logout()
    // window.location.reload()
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        logout
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthState;
