const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "janekitpk10@gmail.com",
      pass: "dxnwfgcvhoczawoh",
    },
  });

module.exports = (email, status) => {
  // create the email 
  const mailOptions = {
    from: "janekitpk10@gmail.com",
    to: email,
    subject: "Your a1 status has been updated",
    text: `Your a1 status has been updated to ${status}`,
  };

  // send the email
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};