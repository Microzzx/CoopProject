const express = require('express')
const router = express.Router()
const connection = require('../connection');
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const bcrypt = require("bcrypt");

router.post("/", jsonParser, (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const fname = req.body.fname;
    const lname = req.body.lname;
    connection.query("SELECT * FROM users WHERE email=?", [email], (err, users) => {
      if (err) {
        res.json({ status: "error", message: "error" });
        return;
      }
      if (users.length > 0) {
        res.json({ status: "error", message: "same username!" });
        return;
      }
      bcrypt.hash(password, 10, function (err, hash) {
        connection.query(
          "INSERT INTO users (email, password, fname, lname, role) VALUES (?, ?, ?, ?, ?)",
          [email, hash, fname, lname, "user"],
          (err, result) => {
            if (err) {
              res.json({ status: "error", message: "register failed!" });
              console.log(err);
            } else {
              res.json({ status: "ok", message: "register success!" });
            }
          }
        );
      });
    });
  });

module.exports = router;