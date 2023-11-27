// InvoiceGenerator.jsx
import React, { useState } from 'react';
import GeneratePDF from './GeneratePDF';
import InvoiceSentModal from './InvoiceSentModal';
// import dotenv from 'dotenv'
// dotenv.config();

const InvoiceGenerator = ({
  reviewedAppointments,
  checkedAppointments,
  clientRate,
  clientObj,
  user,
}) => {
  const [generatedPDF, setGeneratedPDF] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [generatedAttachment, setGeneratedAttachment] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleConfirmAndSend = () => {
        const email = "olamidejr21@yahoo.com";
        const userName = user.firstName;
        const clientName = clientObj.name;
    
    
        const formData = new FormData();
        formData.append("email", email);
        formData.append("userName", userName);
        formData.append("clientName", clientName);
        formData.append("pdf", generatedAttachment);
    
        const requestOptions = {
          method: "POST",
          body: formData,
        };
        fetch("/api/send_email/invoice", requestOptions)
        setModalOpen(true);
      };
    
      const handleCloseModal = () => {
        setModalOpen(false);
      };

  return (
    <div>
      <GeneratePDF
        reviewedAppointments={reviewedAppointments}
        checkedAppointments={checkedAppointments}
        clientRate={clientRate}
        clientObj={clientObj}
        user={user}
        setGeneratedPDF={setGeneratedPDF}
        setGeneratedAttachment={setGeneratedAttachment}
        setErrorMessage={setErrorMessage}
      />
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {generatedPDF && (
        <div className="pdf-modal">
          <iframe
            title="Invoice PDF"
            src={generatedPDF}
            width="60%"
            height="500px"
          ></iframe>
          <div>
            <button onClick={handleConfirmAndSend}>Confirm and Send</button>
          </div>
        </div>
      )}
      {isModalOpen && <InvoiceSentModal onClick={handleCloseModal} />}
    </div>
  );
};

export default InvoiceGenerator;
