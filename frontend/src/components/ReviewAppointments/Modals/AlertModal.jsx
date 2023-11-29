import { Modal, Button } from 'react-bootstrap';
import { useContext, useEffect } from 'react';
import { ReviewAppointmentsContext } from '../Context/UseReviewAppointmentsContext';

export default ({localContext}) => {
  if (!localContext) {
    localContext = ReviewAppointmentsContext;
  }
  const { state, dispatch, actions } = useContext(localContext);
  const { alertIsOpen, errMessage } = state;
  


  return (
    <Modal show={alertIsOpen} onHide={() => dispatch({ type: actions.closeAlert })}>
      <Modal.Header closeButton>
        <Modal.Title>oops!</Modal.Title>
      </Modal.Header>
      <Modal.Body>{errMessage}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => dispatch({ type: actions.closeAlert })}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
