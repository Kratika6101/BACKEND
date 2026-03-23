const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "kratikarajput243@gmail.com",
      pass: "evdjgtmnjgpjhjla", // not normal password
    },
  });

  await transporter.sendMail({
    from: "kratikarajput243@gmail.com",
    to,
    subject,
    text,
  });
};

module.exports = sendEmail;