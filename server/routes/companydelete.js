const express = require('express')
const router = express.Router()
const connection = require('../connection');

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    connection.query("DELETE FROM companyinfo WHERE id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

module.exports = router;