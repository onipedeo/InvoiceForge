import "../styles/InvoiceGeneratedModal.scss"

const InvoiceGeneratedModal = () => {
  const handleReturnToSchedule = () => {
    //Add logic to return to schedule
  };

  const handleCreateAnotherInvoice = () => {
    // Add logic to create another invoice
  };

  return (
    <div className="invoice-generated-modal">
        <p>INVOICE CRAFTED!!!</p>
      <div className="modal-options">
        <button onClick={handleReturnToSchedule}>Return to Schedule</button>
        <button onClick={handleCreateAnotherInvoice}>
          Create Another Invoice
        </button>
      </div>
    </div>
  );
};

export default InvoiceGeneratedModal;
