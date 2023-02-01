const express = require('express')
const router = express.Router()
const connection = require('../connection');
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const jwt = require("jsonwebtoken");
const { TOKEN_SECRET } = require('../config');

router.post("/", jsonParser, (req, res) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(' ')[1];
    try {
      const decoded = jwt.verify(token, TOKEN_SECRET);
      connection.query("SELECT role FROM users WHERE email=?", [decoded.email], (err, users) => {
        if (err) {
          res.json({ status: "error", message: "role not found!" });
          return;
        } else {
          res.json({ status: "ok", message: users[0].role });
          return;
        }
      });
    } catch (err) {
      if (err instanceof jwt.TokenExpiredError) {
        res.json({ status: "error", message: "Token has expired" });
        return;
      }
      res.json({ status: "error", message: "Invalid token" });
    }
  } else {
    res.json({ status: 'error', message: "no token provided" });
  }
});

module.exports = router;