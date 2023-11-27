import "../styles/InvoiceGeneratedModal.scss";

const InvoiceSentModal = (props) => {
  return (
    <div className="invoice-generated-modal">
      <p>INVOICE SENT!!!</p>
      <div className="modal-options">
        <button onClick={props.onClick}>Close</button>
      </div>
    </div>
  );
};

export default InvoiceSentModal;
