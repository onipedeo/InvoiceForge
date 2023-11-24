// import dotenv from 'dotenv';
// import nodemailer from 'nodemailer';
// dotenv.config();
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
dotenv.config();

// const nodeMailer = nodemailer;

const sendInvoiceByEmail = async (userName, clientName, pdfAttachment) => {
  // const transporter = nodemailer.createTransport({
  //   service: 'gmail',
  //   host: "smtp.gmail.com",
  //   port: 587,
  //   secure: false,
  //   auth: {
  //     user: process.env.EMAIL_USER,
  //     pass: process.env.APP_PASSWORD,
  //   },
  // });
  // const info = await transporter.sendMail({
  //   from: {
  //     name: "InvoiceForge",
  //     address: process.env.EMAIL_USER
  //   },
  //   to: 'olamidejr21@yahoo.com',
  //   subject: "Invoice from InvoiceForge",
  //   html: `
  //   <p style="font-family: 'Arial', sans-serif; font-size: 16px; color: #333; line-height: 1.6;">
  //     Dear ${clientName},
  //   </p>
  //   <p style="font-family: 'Arial', sans-serif; font-size: 16px; color: #333; line-height: 1.6;">
  //     Attached, please find the invoice for the recent services provided by InvoiceForge.
  //     If you have any questions or require further clarification regarding the invoice, please feel free to reach out.
  //     Your prompt attention to this matter is greatly appreciated.
  //   </p>
  //   <p style="font-family: 'Arial', sans-serif; font-size: 16px; color: #333; line-height: 1.6;">
  //     Thank you for choosing InvoiceForge. We look forward to continuing our partnership.
  //   </p>
  //   <br>
  //   <p>Best regards,</p>
  //   <p>${userName}</p>
  //   <p>InvoiceForge Team</p>
  // `,
  //   attachment: [
  //     {
  //       filename: 'landing.jpg',
  //       content: pdfAttachment,
  //       encoding: 'base64',
  //     }
  //   ]
  // });
  // console.log(`MESSAGE SENT: ${info.messageId}`);
};
// sendEmail().catch(e => console.log(e));

// export default sendInvoiceByEmail;
exports.sendInvoiceByEmail = sendInvoiceByEmail;
