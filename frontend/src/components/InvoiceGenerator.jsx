import { useEffect, useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import requests from "../api/requests";

const InvoiceGenerator = ({
  reviewedAppointments,
  checkedAppointments,
  clientRate,
  standardRateCents,
  clientObj,
  userData
}) => {


  const [generatedPDF, setGeneratedPDF] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");



  const generateInvoice = () => {

    if (checkedAppointments.length === 0) {
      setErrorMessage("Please select at least one appointment to generate an invoice.");
      return;
    }

    // Create a new jsPDF instance
    const pdf = new jsPDF();

    // Set font and font size
    pdf.setFont("helvetica");
    pdf.setFontSize(12);

    // Add content to the PDF
    pdf.text("Invoice", 20, 20);
    pdf.text("LOGO", 20, 30);

    // Add user and client details
    const userDetails = userData.address;

    pdf.text(
      `User Details:
      ${userDetails.line_1}
      ${userDetails.city},
      ${userDetails.province}
      ${userDetails.country}
      ${userDetails.postal_code}`,
      150,
      20
    );

    // Add client details

    const clientDetails = clientObj.address;

    pdf.text(
      `Client Details:
      ${clientDetails.line_1}
      ${clientDetails.city},
      ${clientDetails.province}
      ${clientDetails.country}
      ${clientDetails.postal_code}`,
      20,
      65
    );


    // Add appointment details
    pdf.text("Appointment Details", 20, 110);

    // Set styles for the table
    pdf.setFillColor(200, 220, 255); // Header fill color
    pdf.setTextColor(0, 0, 0); // Header text color
    pdf.setFont("helvetica", "bold");

    pdf.autoTable({
      head: [["Appointment", "Date", "Hours"]],
      body: reviewedAppointments
        .filter((appointment) => checkedAppointments.includes(appointment.id))
        .map((appointment) => [
          appointment.notes,
          appointment.date,
          appointment.confirmed_hours,
        ]),
      startY: 115,
      theme: "striped",
    });

    // Reset styles
    pdf.setFillColor(255, 255, 255);
    pdf.setFont("helvetica", "normal");


    // Calculate and add the total amount
    const totalAmount = reviewedAppointments
      .filter((appointment) => checkedAppointments.includes(appointment.id))
      .reduce(
        (total, appointment) => {
          const { appointment_rate_cents } = appointment;
          const rate = appointment_rate_cents ? appointment_rate_cents :
            clientRate ? clientRate : standardRateCents;
          return total + appointment.confirmed_hours * rate / 100;
        },
        0
      );

    pdf.text(
      `Total Amount: $${totalAmount}`,
      20,
      pdf.autoTable.previous.finalY + 10
    );

    // Save the PDF
    const generatedPDFData = pdf.output("blob");
    setGeneratedPDF(URL.createObjectURL(generatedPDFData));

    setErrorMessage("");
  };

  const handleConfirmAndSend = () => {
    alert("invoice sent");
  };

  return (
    <div>
      <div onClick={generateInvoice}>Generate Invoice</div>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {generatedPDF && (
        <div className="pdf-modal">
          <iframe
            title="Invoice PDF"
            src={generatedPDF}
            width="60%"
            height="500px"
          ></iframe>
          <div><button onClick={handleConfirmAndSend}>Confirm and Send</button></div>
        </div>
      )}
    </div>
  );
};

export default InvoiceGenerator;
