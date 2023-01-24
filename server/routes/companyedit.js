const express = require('express')
const router = express.Router()
const connection = require('../connection');

router.put("/", (req, res) => {
    const id = req.body.id;
    const age = req.body.age;
  
    connection.query(
      "UPDATE companyinfo SET age = ? WHERE id = ?",
      [age, id],
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