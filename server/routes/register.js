const express = require("express");
const router = express.Router();
const connection = require("../connection");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const bcrypt = require("bcrypt");
const fs = require("fs");
const path = require("path");

router.post("/", jsonParser, (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const fname = req.body.fname;
  const lname = req.body.lname;
  const phone = req.body.phone;

  const PictureName = `${email}.png`;
  const profilePicPath = path.join(
    __dirname,
    "..",
    "public",
    "profile_pics",
    PictureName
  );
  const profilePicUrl = `/profile_pics/${PictureName}`;
  connection.query(
    "SELECT * FROM users WHERE email=?",
    [email],
    (err, users) => {
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
          "INSERT INTO users (email, password, fname, lname, phone, role, picture_url) VALUES (?, ?, ?, ?, ?, ?, ?)",
          [email, hash, fname, lname, phone, "user", profilePicUrl],
          (err, result) => {
            if (err) {
              console.log(err);
              res.json({ status: "error", message: "Register failed" });
            } else {
              const defaultImagePath = path.join(
                __dirname,
                "../public/profile_pics/default.png"
              );
              fs.copyFileSync(defaultImagePath, profilePicPath);
              res.json({ status: "ok", message: "Register success" });
            }
          }
        );
      });
    }
  );
});

module.exports = router;
