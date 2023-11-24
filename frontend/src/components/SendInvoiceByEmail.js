import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
dotenv.config();


const nodeMailer = nodemailer;

const html = `Just testing if the email is working`
const sendEmail = async () => {
  const transporter = nodeMailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.APP_PASSWORD,
    },
  });

  const info = await transporter.sendMail({
    from: {
      name: "InvoiceForge",
      address: process.env.EMAIL_USER
    },
    to: 'olamidejr21@yahoo.com',
    subject: "Invoice",
    text: html,
    // attachment: [
    //   {
    //     filename: 'landing.jpg',
    //     content: 'invoice attachment',
    //     path: path.join(__dirname, 'landing.jpg')
    //   }
    // ]
  });

  console.log(`MESSAGE SENT: ${info.messageId}`);
}
sendEmail().catch(e => console.log(e));

// Function to send email with attachment
// const sendInvoiceByEmail = async (clientEmail, pdfAttachment) => {
//   const nodemailer = require('nodemailer');

//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASSWORD,
//     },
//   });-

//   const mailOptions = {
//     from: 'your-email@gmail.com',
//     to: clientEmail,
//     subject: 'Invoice',
//     text: 'Please find the attached invoice.',
//     attachments: [
//       {
//         filename: 'invoice.pdf',
//         content: pdfAttachment,
//         encoding: 'base64',
//       },
//     ],
//   };

//   await transporter.sendMail(mailOptions);
// };

// // Function to update the database
// const updateDatabase = async () => {
//   // Your database update logic, set invoiced to true
// };

// // When user clicks on "Confirm and Generate Invoice"
// const handleGenerateInvoice = async () => {
//   const pdf = generateInvoicePDF();
//   const clientEmail = clientObj.email;

//   try {
//     // Send email with PDF attachment
//     await sendEmail(clientEmail, pdf);

//     // Update database
//     await updateDatabase();

//     // Handle success or show a confirmation message
//     console.log('Invoice sent and database updated successfully.');
//   } catch (error) {
//     // Handle errors
//     console.error('Error:', error);
//   }
// };







