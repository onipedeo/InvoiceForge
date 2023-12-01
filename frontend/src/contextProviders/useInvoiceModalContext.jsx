import React, { createContext, useState, useContext } from 'react';

const InvoiceModalContext = createContext();

export const InvoiceModalProvider = ({ children }) => {
  const [invoiceDisplay, setInvoiceDisplay] = useState(false);

  /**
   * Shows an alert modal with the specified title and message.
   * @param {Object} options - The options for the alert modal.
   * @param {string} options.title - The title of the alert modal. defaults to 'oops!'
   * @param {string} options.message - The message of the alert modal.
   */
  const showInvoice = () => {
    setInvoiceDisplay(true);
  };

  const hideInvoice = () => {
    setInvoiceDisplay(false);
  };

  return (
    <InvoiceModalContext.Provider value={{ invoiceDisplay, showInvoice, hideInvoice}}>
      {children}
    </InvoiceModalContext.Provider>
  );
};


export const useInvoiceModal = () => useContext(InvoiceModalContext);
