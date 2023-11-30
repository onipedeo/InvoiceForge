import React, { createContext, useState, useContext } from 'react';

const AlertModalContext = createContext();

export const AlertModalProvider = ({ children }) => {
  const [alert, setAlert] = useState({ open: false, message: '' });

  const showAlert = (message) => {
    setAlert({ open: true, message });
  };

  const hideAlert = () => {
    setAlert({ open: false, message: '' });
  };

  return (
    <AlertModalContext.Provider value={{ alert, showAlert, hideAlert }}>
      {children}
    </AlertModalContext.Provider>
  );
};


export const useAlertModal = () => useContext(AlertModalContext);
