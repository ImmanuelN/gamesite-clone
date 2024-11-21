import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the context
const AuthContext = createContext();

// AuthProvider component
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // user state, null means not logged in

  // Check if there is a saved token in local storage
  useEffect(() => {
    const storedUser = localStorage.getItem('token');
    if (storedUser) {
      setUser(storedUser); // Set user data from local storage if available
    }
  }, []);

  const login = (userData, token) => {
    setUser(token); // Set user data on login
    localStorage.setItem('gamehubUserToken', token); // Store token in local storage
  };

  const logout = () => {
    setUser(null); // Clear user data on logout
    localStorage.removeItem('gamehubUserToken'); // Remove token from local storage
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Create a custom hook to use AuthContext
const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth, AuthContext };
