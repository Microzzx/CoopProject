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
    const phone = req.body.phone;
    connection.query("SELECT * FROM users WHERE email=?", [email], (err, users) => {
      if (err) {
        res.json({ status: "error", message: "Error" });
        return;
      }
      if (users.length > 0) {
        res.json({ status: "error", message: "Same username" });
        return;
      }
      bcrypt.hash(password, 10, function (err, hash) {
        connection.query(
          "INSERT INTO users (email, password, fname, lname, phone, role) VALUES (?, ?, ?, ?, ?, ?)",
          [email, hash, fname, lname, phone, "user"],
          (err, result) => {
            if (err) {
              res.json({ status: "error", message: "Register failed" });
            } else {
              res.json({ status: "ok", message: "Register success" });
            }
          }
        );
      });
    });
  });

module.exports = router;