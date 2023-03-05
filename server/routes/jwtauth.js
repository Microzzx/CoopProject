const express = require("express");
const router = express.Router();
const connection = require("../connection");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const jwt = require("jsonwebtoken");
const { TOKEN_SECRET } = require("../config");

router.post("/", jsonParser, (req, res) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    try {
      const decoded = jwt.verify(token, TOKEN_SECRET);
      connection.query(
        "SELECT * FROM users WHERE email=?",
        [decoded.email],
        (err, users) => {
          if (err) {
            console.log(err);
            res.status(500).send({
              status: "error",
              message: "User not found",
            });
            return;
          } else {
            // send back userdata
            res.json({
              status: "ok",
              user_id: users[0].user_id,
              role: users[0].role,
              email: users[0].email,
              fname: users[0].fname,
              lname: users[0].lname,
              phone: users[0].phone,
              picture_url: `${process.env.server_url}/static${users[0].picture_url}`,
            });
            return;
          }
        }
      );
    } catch (err) {
      if (err instanceof jwt.TokenExpiredError) {
        const decoded = jwt.decode(token, { complete: true });
        const email = decoded.payload.email;
        const current_time = new Date()
          .toLocaleString("en-US", { timeZone: "Asia/Bangkok", hour12: false })
          .replace(",", "");
        connection.query(
          "UPDATE users SET last_login=? WHERE email=?",
          [current_time, email],
          (err) => {
            if (err) {
              console.log(err);
              res.status(500).json({
                status: "error",
                message: "Internal server error",
              });
            }
          }
        );
        res.json({ status: "error", message: "Token has expired" });
        return;
      }
      res.json({ status: "error", message: "Invalid token" });
    }
  } else {
    res.json({ status: "error", message: "No token provided" });
  }
});

module.exports = router;
