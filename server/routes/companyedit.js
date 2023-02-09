const express = require('express')
const router = express.Router()
const connection = require('../connection');

router.put("/", (req, res) => {
    const id = req.body.id;
    const comment = req.body.comment;
    const status = req.body.status;
  
    connection.query(
      "UPDATE a1 SET comment = ?, status = ? WHERE id = ?",
      [comment, status, id],
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