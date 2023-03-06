const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
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
          h3 {
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
        ? "ฟอร์ม A2 พร้อมใช้งานแล้วโปรดดำเนินการต่อ"
        : data.status === "Declined" && data.form === "A1"
        ? `${data.comment}<br>กรุณาติดต่อเจ้าหน้าที่และดำเนินการใหม่อีกครั้ง`
        : data.status === "Approved" && data.form === "A2"
        ? "ฟอร์มเอกสารเพิ่มเติม พร้อมใช้งานแล้วโปรดดำเนินการต่อ"
        : data.status === "Declined" && data.form === "A2"
        ? `${data.comment} กรุณาติดต่อเจ้าหน้าที่และดำเนินการใหม่อีกครั้ง`
        : data.status === "Approved_extra" && data.form === "A2"
        ? "คุณได้ดำเนินการทั้งหมดเสร็จสิ้น กรุณารอการติดต่อจากเจ้าหน้าที่"
        : data.status === "Declined_extra" && data.form === "A2"
        ? `${data.comment} กรุณาติดต่อเจ้าหน้าที่และดำเนินการใหม่อีกครั้ง`
        : null
    }
    </p> 
    <h3>Contact</h3>
    <p>
      Email: natnareesir@cpall.co.th<br>
      Tel: 091-004-9465 Mobile: 089-141-0193<br>
      Address: 58/28 หมู่ 2 อาคารเดอะธารา ชั้น 19 ถนนแจ้งวัฒนะ<br> 
      ตําบลบางตลาด อําเภอปากเกร็ด จังหวัดนนทบุรี 11120
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
