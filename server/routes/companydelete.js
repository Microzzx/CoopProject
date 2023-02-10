const express = require('express')
const router = express.Router()
const connection = require('../connection');
const {authRole} = require('../middlewares/jwtrole_auth')

router.delete("/:id",authRole(["admin"]),(req, res) => {
    const id = req.params.id;
    connection.query("DELETE FROM a1 WHERE id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result); 
      }
    });
  });

module.exports = router;