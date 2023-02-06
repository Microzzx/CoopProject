const express = require('express')
const router = express.Router()
const connection = require('../connection');

router.put("/", (req, res) => {
    const id = req.body.id;
    const comment = req.body.comment;
    const status = req.body.status;
    const workrole = req.body.workrole;
  
    connection.query(
      "UPDATE companyinfo SET comment = ?, status = ?, workrole = ? WHERE id = ?",
      [comment, status, workrole, id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });

module.exports = router;