const express = require('express')
const router = express.Router()
const connection = require('../connection');
const {authRole} = require('../middlewares/jwtrole_auth')

router.delete("/:id",authRole(["admin"]),(req, res) => {
    const id = req.params.id;
    connection.query("DELETE FROM a1 WHERE a1_id = ?", id, (err, result) => {
      if (err) {
        res.status(500).send({ message: 'Error deleting data' });
      } else {
        res.sendStatus(204);
      }
    });
  });

module.exports = router;