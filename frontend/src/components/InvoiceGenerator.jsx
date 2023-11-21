import { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

const clientsAddress = [
    {
      id: 1,
      line_1: "456 Main St",
      city: "Toronto",
      province: "ON",
      country: "Canada",
      postal_code: "M1M1M1",
    },
    {
    id: 2,
    line_1: "123 Main St",
    city: "Toronto",
    province: "ON",
    country: "Canada",
    postal_code: "M1M1M1",
  },
  {
    id: 3,
    line_1: "456 Main St",
    city: "Toronto",
    province: "ON",
    country: "Canada",
    postal_code: "M1M1M1",
  },
];

const userAddress = [
  {
    id: 1,
    line_1: "123 Main St",
    city: "Toronto",
    province: "ON",
    country: "Canada",
    postal_code: "M1M1M1",
  },
];

const InvoiceGenerator = ({
  selectedClient,
  appointments,
  checkedAppointments,
}) => {
  const [generatedPDF, setGeneratedPDF] = useState(null);

  const generateInvoice = () => {
    // Create a new jsPDF instance
    const pdf = new jsPDF();

    // Set font and font size
    pdf.setFont("helvetica");
    pdf.setFontSize(12);

    // Add content to the PDF
    pdf.text("Invoice", 20, 20);
    pdf.text("LOGO", 20, 30);

    // Add user and client details
    const userDetails = userAddress.find((user) => user.id === 1);

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
    const clientDetails = clientsAddress.find(
      (client) => client.id === parseInt(selectedClient)
    );

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
      body: appointments
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
    const totalAmount = appointments
      .filter((appointment) => checkedAppointments.includes(appointment.id))
      .reduce(
        (total, appointment) => total + appointment.confirmed_hours * 100,
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
  };

  const handleConfirmAndSend = () => {
    alert("invoice sent");
  };

  return (
    <div>
      <div onClick={generateInvoice}>Generate Invoice</div>
      {generatedPDF && (
        <div className="pdf-modal">
          <iframe
             title="Invoice PDF"
            src={generatedPDF}
             width="60%"
            height="500px"
          ></iframe>
          <button onClick={handleConfirmAndSend}>Confirm and Send</button>
        </div>
      )}
    </div>
  );
};

export default InvoiceGenerator;