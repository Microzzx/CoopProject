const express = require('express')
const router = express.Router()
const {authRole} = require('../middlewares/jwtrole_auth')

router.post("/",authRole(["user"]),(req, res) => {
    return;
  });

module.exports = router;