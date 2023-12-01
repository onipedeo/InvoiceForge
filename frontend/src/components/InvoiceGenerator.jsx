import React, { useState } from "react";
import GeneratePDF from "./GeneratePDF";
import InvoiceSentModal from "./InvoiceSentModal";

const InvoiceGenerator = ({
  reviewedAppointments,
  checkedAppointments,
  clientRate,
  clientObj,
  user,
  setSelectedClient,
  setCheckedAppointments,
}) => {
  const [generatedPDF, setGeneratedPDF] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [generatedAttachment, setGeneratedAttachment] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [grandTotal, setGrandTotal] = useState(0);

  const handleConfirmAndSend = async () => {
    try {
      const email = clientObj.email;
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

      const invoiceData = {
        userId: user.id,
        clientId: clientObj.id,
        totalCents: grandTotal,
        appointmentIds: checkedAppointments,
      };

      const invoiceDataPostRequest = {
        method: "POST",
        body: JSON.stringify(invoiceData),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };

      // Wait for the invoice creation request to complete
      await fetch("/api/invoice", invoiceDataPostRequest);

      setIsModalOpen(true);
      // Wait for the email sending request to complete
      await fetch("/api/send_email/invoice", requestOptions);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setGeneratedPDF(null);
    setSelectedClient(null);
    setCheckedAppointments([]);
  };

  const handleBackToAppointments = () => {
    setGeneratedPDF(null);
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
        setGrandTotal={setGrandTotal}
      />
      {errorMessage && (
        <p class="alert alert-dark" role="alert">
          {errorMessage}
        </p>
      )}
      {generatedPDF && (
        <div className="pdf">
          <iframe
            title="Invoice PDF"
            src={generatedPDF}
            width="60%"
            height="500px"
          ></iframe>
          <div className="confirm-and-send">
            <button onClick={handleBackToAppointments}>
              Back to Appointments
            </button>
            <button onClick={handleConfirmAndSend}>Confirm and Send</button>
          </div>
        </div>
      )}
      {isModalOpen && <InvoiceSentModal onClick={handleCloseModal} />}
    </div>
  );
};

export default InvoiceGenerator;
