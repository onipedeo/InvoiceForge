import { Modal, Button } from 'react-bootstrap';
import { useContext, useEffect } from 'react';
import { useAlertModal } from '../contextProviders/useAlertModalContext.jsx';
import "../styles/alert.scss";

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
export default () => {
  const { alert, hideAlert, onClose } = useAlertModal();

  return (
    <Modal show={alert.open} onHide={hideAlert}>
      <Modal.Header closeButton>
        <Modal.Title>{alert.title || 'oops!'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{alert.message}</Modal.Body>
      <Modal.Footer>
        <Button className='alert-button' variant="secondary" onClick={onClose || hideAlert}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
