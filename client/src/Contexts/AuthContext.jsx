
import React, { createContext, useState, useContext,useEffect } from 'react';
import { jwtDecode } from "jwt-decode";
import { Navigate } from 'react-router';

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [authUser,setAuthUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (token) => {
    const decoded = jwtDecode(token);

    const authUser = {
        "username":decoded.username,
        "email":decoded.sub,
        "token":token
    }
    localStorage.setItem("authUser",JSON.stringify(authUser))
    window.location.href = "http://localhost:5173/";
  };

  const logout = () => {
    localStorage.removeItem("authUser")
    window.location.href = "http://localhost:5173/";
  };
  useEffect(()=>{
    const storedAuthUser = localStorage.getItem('authUser');
    if (storedAuthUser) {
      setAuthUser(JSON.parse(storedAuthUser));
      setIsLoggedIn(true);
    }
  },[])
  return (
    <>
      <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
        {children}
      </AuthContext.Provider>
    </>
    
    
  );
};

export const useAuth = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return authContext;
};
