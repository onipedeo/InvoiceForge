import { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

const InvoiceGenerator = ({
  reviewedAppointments,
  checkedAppointments,
  clientRate,
  clientObj,
  userObj,
}) => {
  const [generatedPDF, setGeneratedPDF] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const generateInvoice = () => {
    if (checkedAppointments.length === 0) {
      setErrorMessage(
        "Please select at least one appointment to generate an invoice."
      );
      return;
    }

    // Create a new jsPDF instance
    const pdf = new jsPDF();

    pdf.setLineWidth(0.5);
    pdf.setDrawColor("black");
    const overlineY = 25;
    pdf.line(20, overlineY, 66, overlineY); // Draw the line

    // styled text
    pdf.setFont("sans-serif");
    pdf.setFontSize(24);
    pdf.setTextColor(0, 0, 0);

    const text = "InvoiceForge";
    const textX = 20;
    const textY = 32;
    pdf.text(textX, textY, text);

    // user details
    const userDetails = userObj.address;
    pdf.setFontSize(12);
    pdf.setFont("sans-serif");
    pdf.text(
      `
      ${userObj.first_name} ${userObj.last_name}
      ${userDetails.line_1}
      ${userDetails.city}, ${userDetails.province} ${userDetails.postal_code}
      204-444-888
      `,
      150,
      20
    );

    // client details
    const clientDetails = clientObj.address;
    pdf.text(
      `
      BILL TO:
      ${clientObj.name}
      ${clientDetails.line_1}
      ${clientDetails.city}, ${clientDetails.province} ${clientDetails.postal_code}
      `,
      20,
      55
    );

    // styles for the table
    pdf.setFillColor(200, 220, 255);
    pdf.setTextColor(0, 0, 0);
    pdf.setFont("sans-serif", "bold");

    pdf.autoTable({
      head: [["Description", "Date", "Rate ($)", "Hours", "Total ($)"]],

      body: reviewedAppointments
        .filter((appointment) => checkedAppointments.includes(appointment.id))
        .map((appointment) => {
          const rate = appointment.appointment_rate_cents
            ? appointment.appointment_rate_cents
            : clientRate
            ? clientRate
            : userObj.standard_rate_cents;

          const total = (rate * appointment.confirmed_hours) / 100;

          return [
            appointment.notes,
            appointment.date,
            `${rate / 100}`,

            appointment.confirmed_hours,
            `${total}`,
          ];
        }),
      startY: 90,
      theme: "striped",
    });

    // Reset styles
    pdf.setFillColor(255, 255, 255);
    pdf.setFont("sans-serif", "bold");
    pdf.setFontSize(14);

    // Calculate and add the total amount
    const GrandTotalAmount = reviewedAppointments
      .filter((appointment) => checkedAppointments.includes(appointment.id))
      .reduce((total, appointment) => {
        const { appointment_rate_cents } = appointment;
        const rate = appointment_rate_cents
          ? appointment_rate_cents
          : clientRate
          ? clientRate
          : userObj.standard_rate_cents;

        return total + (appointment.confirmed_hours * rate) / 100;
      }, 0);

    pdf.text(
      `Grand Total: $ ${GrandTotalAmount}.00`,
      140,
      pdf.autoTable.previous.finalY + 15
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
          <div>
            <button onClick={handleConfirmAndSend}>Confirm and Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InvoiceGenerator;
