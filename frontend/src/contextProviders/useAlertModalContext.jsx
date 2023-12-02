import React, { createContext, useState, useContext } from 'react';

const AlertModalContext = createContext();

export const AlertModalProvider = ({ children }) => {
  const defaultAlertState = { open: false, message: '', title: 'oops!', onClose: null };
  const [alert, setAlert] = useState(defaultAlertState);

  /**
   * Shows an alert modal with the specified title and message.
   * @param {Object} options - The options for the alert modal.
   * @param {string} options.title - The title of the alert modal. defaults to 'oops!'
   * @param {string} options.message - The message of the alert modal.
   */
  const showAlert = ({title, message, onClose}) => {
    setAlert({ open: true, message, title, onClose });
  };

  const hideAlert = () => {
    setAlert(defaultAlertState);
  };

  return (
    <AlertModalContext.Provider value={{ alert, showAlert, hideAlert }}>
      {children}
    </AlertModalContext.Provider>
  );
};


export const useAlertModal = () => useContext(AlertModalContext);
