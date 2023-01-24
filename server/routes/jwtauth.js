const express = require('express')
const router = express.Router()
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const jwt = require("jsonwebtoken");
const { TOKEN_SECRET } = require('../config');

router.post("/", jsonParser, (req, res) => {
    if(req.headers.authorization){
      const token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, TOKEN_SECRET);
      res.json({status: 'ok', decoded});
  }else {
      res.json({status: 'err', message: "no token provided"});
  }
});

module.exports = router;