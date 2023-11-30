import { Modal, Button } from 'react-bootstrap';
import { useContext, useEffect } from 'react';
import { useAlertModal } from '../contextProviders/useAlertModalContext.jsx';

export default () => {
  const { alert, hideAlert } = useAlertModal();



  return (
    <Modal show={alert.isOpen} onHide={hideAlert}>
      <Modal.Header closeButton>
        <Modal.Title>oops!</Modal.Title>
      </Modal.Header>
      <Modal.Body>{alert.message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => dispatch({ type: actions.closeAlert })}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
