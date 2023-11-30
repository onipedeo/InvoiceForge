import React, { createContext, useContext, useReducer } from 'react';

// Define the initial state

// Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.payload; // On login, update the user data

    case 'LOGOUT':
      return null;// On logout, clear the user data

    default:
      return state;
  }
};

// Create the context
const UserContext = createContext();

// Create the context provider component
const UserContextProvider = ({ children }) => {
  const [user, dispatch] = useReducer(reducer, null);

  const setUser = (user) => {
    dispatch({ type: 'LOGIN', payload: user });
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to access the context
const useUserContext = () => useContext(UserContext);

export { UserContextProvider, useUserContext };
