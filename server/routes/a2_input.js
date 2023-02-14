const express = require('express');
const router = express.Router();
const connection = require('../connection');
const path = require('path');
const multer = require('multer');
const { authRole } = require("../middlewares/jwtrole_auth");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '..', 'public', 'pdfs'));
  },
  filename: (req, file, cb) => {
    const pdfName = `${Date.now()}-${file.originalname}`;
    cb(null, pdfName);
  }
});

const upload = multer({ storage });

router.post('/', authRole(["admin", "user"]), upload.fields([{name: 'pdf1'}, {name: 'pdf2'}]), (req, res) => {
  const { name } = req.body;
  const user_id = req.user_id;
  const pdf1Url = `/pdfs/${req.files['pdf1'][0].filename}`;
  const pdf2Url = `/pdfs/${req.files['pdf2'][0].filename}`;

  const sql = `INSERT INTO a2 (name, user_id, url1, url2) VALUES ('${name}', '${user_id}', '${pdf1Url}', '${pdf2Url}')`;

  connection.query(sql, (error, result) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ message: 'Failed to save PDFs to database' });
    }
    
    res.status(200).json({ message: 'PDFs saved successfully' });
  });
});

module.exports = router;