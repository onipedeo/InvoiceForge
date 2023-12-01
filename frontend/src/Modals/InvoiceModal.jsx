import { Modal, Button } from 'react-bootstrap';
import { useContext, useEffect } from 'react';
import { useInvoiceModal } from '../contextProviders/useInvoiceModalContext';

/**
 * AlertModal component displays an alert message in a modal dialog.
 * It uses the useAlertModal hook to manage the alert state.
 * @example
 * //to open the alert modal:
 * import { useAlertModal } from '../contextProviders/useAlertModalContext.jsx';
 *
 * //then, inside the component:
 * const { showAlert } = useAlertModal();
 *
 * //when an error is thrown. for example on a request, call show Alert and pass an object containing a message and title.
 * showAlert({title: "optional" message: "brief but descriptive message"});
 *
 * @returns {JSX.Element} The rendered AlertModal component.
 */
export default ({ generatedPDF, handleBackToAppointments, handleConfirmAndSend }) => {
  const { hideInvoice, invoiceDisplay } = useInvoiceModal();
  const handleAndHide = (handler) => {
    handler();
    hideInvoice();
  }
  

  return (
    <Modal show={invoiceDisplay} onHide={hideInvoice}>
      <Modal.Header closeButton />
      <Modal.Body >
        <iframe
          title="Invoice PDF"
          src={generatedPDF}
          width="100%"
          height="500px"
        ></iframe>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={()=> {handleAndHide(handleBackToAppointments)}}>
          Back to Appointments
        </Button>
        <Button variant="secondary" onClick={()=>{handleAndHide(handleConfirmAndSend)}}>
          Confirm and Send
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
