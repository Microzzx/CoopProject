const express = require('express')
const router = express.Router()
const connection = require('../connection');
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { TOKEN_SECRET } = require('../config');

router.post("/", jsonParser, (req, res) => {
    const email = req.body.email;
    connection.query("SELECT * FROM users WHERE email=?", [email], (err, users) => {
      if (err) {
        res.json({ status: "error", message: "error" });
        return;
      }
      if (users.length == 0) {
        res.json({ status: "error", message: "user not found!" });
        return;
      }
      bcrypt.compare(
        req.body.password,
        users[0].password,
        function (err, isLogin) {
          if (isLogin) {
            const token = jwt.sign({ email: users[0].email }, TOKEN_SECRET, {
              expiresIn: "1h",
            });
            res.json({ status: "ok", message: "login success!", token });
          } else {
            res.json({ status: "error", message: "wrong password!" });
          }
        }
      );
    });
  });

module.exports = router;