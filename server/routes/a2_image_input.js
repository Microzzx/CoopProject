const express = require('express');
const router = express.Router();
const connection = require('../connection');
const fs = require('fs');
const path = require('path');
const {authRole} = require('../middlewares/jwtrole_auth')

router.post('/',authRole(["admin","user"]), (req, res) => {
  const base64Image = req.body.image.split(';base64,').pop();
  const imageName = `${Date.now()}.jpg`;
  const imagePath = path.join(__dirname, '..', 'public', 'images', imageName);

  fs.writeFile(imagePath, base64Image, { encoding: 'base64' }, (err) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to save image' });
    }
    const imageUrl = `/images/${imageName}`;
    const email = req.email;
    const sql = `INSERT INTO images (url,email) VALUES ('${imageUrl}','${email}')`;
    connection.query(sql, (error, result) => {
        if (err) {
            console.log(err);
          } else {
            console.log(result);
          }
    });
  });
});

module.exports = router;