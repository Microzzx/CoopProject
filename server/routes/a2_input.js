const express = require('express');
const router = express.Router();
const connection = require('../connection');
const path = require('path');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const { authRole } = require("../middlewares/jwtrole_auth");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '..', 'public', 'pdfs'));
  },
  filename: (req, file, cb) => {
    const uniqueId = uuidv4();
    const originalName = file.originalname;
    const extension = originalName.substring(originalName.lastIndexOf('.'));
    cb(null, uniqueId + extension);
  }
});

const upload = multer({ storage });
const fieldNames = ['pdf1', 'pdf2', 'pdf3', 'pdf4', 'pdf5', 'pdf6', 'pdf7', 'pdf8', 'pdf9', 'pdf10', 'pdf11', 'pdf12', 'pdf13', 'pdf14', 'pdf15', 'pdf16', 'pdf17'];
const pdfFields = fieldNames.map((fieldName) => ({ name: fieldName }));

router.post('/', authRole(["admin", "user"]), upload.fields(pdfFields), (req, res) => {
  const comname = req.body.comname;
  const comtype = req.body.comtype;
  const worktype = req.body.worktype;
  const name = req.body.name;
  const phone = req.body.phone;
  const workarea = req.body.workarea;
  const user_id = req.user_id;
  const status = "Pending";
  const pdfUrls = [];
  for (let i = 1; i <= 17; i++) {
    const pdfUrl = `/pdfs/${req.files['pdf' + i][0].filename}`;
    pdfUrls.push(pdfUrl);
  }
  const sql = `INSERT INTO a2 (user_id, comname, comtype, worktype, name, phone, workarea, status, url1, url2, url3, url4, url5, url6, url7, url8, url9, url10, url11, url12, url13, url14, url15, url16, url17) VALUES ('${user_id}', '${comname}', '${comtype}', '${worktype}', '${name}', '${phone}', '${workarea}', '${status}', '${pdfUrls[0]}', '${pdfUrls[1]}', '${pdfUrls[2]}', '${pdfUrls[3]}', '${pdfUrls[4]}', '${pdfUrls[5]}', '${pdfUrls[6]}', '${pdfUrls[7]}', '${pdfUrls[8]}', '${pdfUrls[9]}', '${pdfUrls[10]}', '${pdfUrls[11]}', '${pdfUrls[12]}', '${pdfUrls[13]}', '${pdfUrls[14]}', '${pdfUrls[15]}', '${pdfUrls[16]}')`;
  connection.query(sql, (error, result) => {
    if (error) {
      return res.status(500).json({ message: 'Failed to save data' });
    }
    res.status(200).json({ message: 'Data has been sent' });
  });
});

module.exports = router;