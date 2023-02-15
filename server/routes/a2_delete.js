const express = require('express');
const router = express.Router();
const connection = require('../connection');
const { authRole } = require('../middlewares/jwtrole_auth');
const fs = require('fs');
const path = require('path');

router.delete("/:id", authRole(["admin"]), (req, res) => {
  const id = req.params.id;

  connection.query("SELECT * FROM a2 WHERE a2_id = ?", id, (err, result) => {
    if (err) {
      res.status(500).json({ message: "Failed to delete row from database" });
    } else {
      const row = result[0];
      const pdfUrls = Object.values(row).slice(9, 26).filter(url => url !== null); // modify slice indices if URLs are located in different columns
      connection.query("DELETE FROM a2 WHERE a2_id = ?", id, (err, result) => {
        if (err) {
          res.status(500).json({ message: "Failed to delete row from database" });
        } else {
          pdfUrls.forEach(url => {
            const filePath = path.join(__dirname, '..', 'public', url);
            if (fs.existsSync(filePath)) {
              fs.unlinkSync(filePath);
            }
          });
          res.sendStatus(204);
        }
      });
    }
  });
});

module.exports = router;