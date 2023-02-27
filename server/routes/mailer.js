const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "janekitpk10@gmail.com",
    pass: "dxnwfgcvhoczawoh",
  },
});

module.exports = (email, data) => {
  // create the email
  const mailOptions = {
    from: "janekitpk10@gmail.com",
    to: email,
    subject: `Your document ${data.form} status has been updated`,
    html: `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f6f6f6;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          }
          h1 {
            margin-top: 0;
            text-align: center;
          }
          p {
            margin-bottom: 20px;
            text-align: center;
          }
          .status {
            color: ${
              data.status === "Approved" || data.status === "Approved_extra"
                ? "green"
                : "red"
            };
          }
        </style>
      </head>
      <body>
  <div class="container">
    <h1>Your document ${data.form} status has been updated</h1>
    <p>Your document ${
      data.form
    } status has been updated to <span class="status">${data.status}</span>.</p>
    <p>
  ${
    data.status === "Approved" && data.form === "A1"
      ? "A2 form is now available please continue your process."
      : data.status === "Declined" && data.form === "A1"
      ? `${data.comment} Please contract admin and proceed again.`
      : data.status === "Approved" && data.form === "A2"
      ? "A2 extra document is now available please continue your process."
      : data.status === "Declined" && data.form === "A2"
      ? `${data.comment} Please contract admin and proceed again.`
      : data.status === "Approved_extra" && data.form === "A2"
      ? "You have completed the process."
      : data.status === "Declined_extra" && data.form === "A2"
      ? `${data.comment} Please contract admin and proceed again.`
      : null
  }
</p>
  </div>
</body>
    </html>
  `,
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
