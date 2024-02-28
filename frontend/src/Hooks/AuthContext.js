import React, { createContext, useContext, useReducer, useEffect } from 'react';

const AuthContext = createContext();

const storedUser = localStorage.getItem('user');
const initialState = {
  user: storedUser ? JSON.parse(storedUser) : null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      const loggedInState = { ...state, user: action.payload };
      localStorage.setItem('user', JSON.stringify(loggedInState.user));
      return loggedInState;
    case 'LOGOUT':
      localStorage.removeItem('user');
      return { ...state, user: null };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      dispatch({ type: 'LOGIN', payload: storedUser });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};