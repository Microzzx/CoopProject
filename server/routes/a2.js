const express = require("express");
const router = express.Router();
const connection = require("../connection");
const { authRole } = require("../middlewares/jwtrole_auth");
const path = require("path");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const sendEmail = require("./mailer");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "..", "public", "pdfs"));
  },
  filename: (req, file, cb) => {
    const uniqueId = uuidv4();
    const originalName = file.originalname;
    const extension = originalName.substring(originalName.lastIndexOf("."));
    cb(null, uniqueId + extension);
  },
});

const upload = multer({ storage });
const fieldNames = [
  "pdf1",
  "pdf2",
  "pdf3",
  "pdf4",
  "pdf5",
  "pdf6",
  "pdf7",
  "pdf8",
  "pdf9",
  "pdf10",
  "pdf11",
  "pdf12",
  "pdf13",
  "pdf14",
  "pdf15",
  "pdf16",
];
const pdfFields = fieldNames.map((fieldName) => ({ name: fieldName }));

router.post(
  "/input",
  authRole(["admin", "user"]),
  upload.fields(pdfFields),
  (req, res) => {
    const comname = req.body.comname;
    const comtype = req.body.comtype;
    const worktype = req.body.worktype;
    const name = req.body.name;
    const phone = req.body.phone;
    const workarea = req.body.workarea;
    const user_id = req.user_id;
    const status = "Pending";
    const pdfUrls = [];
    for (let i = 1; i <= 16; i++) {
      const pdfUrl = `/pdfs/${req.files["pdf" + i][0].filename}`;
      pdfUrls.push(pdfUrl);
    }
    connection.query(
      "INSERT INTO a2 (user_id, comname, comtype, worktype, name, phone, workarea, status, url1, url2, url3, url4, url5, url6, url7, url8, url9, url10, url11, url12, url13, url14, url15, url16) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        user_id,
        comname,
        comtype,
        worktype,
        name,
        phone,
        workarea,
        status,
        pdfUrls[0],
        pdfUrls[1],
        pdfUrls[2],
        pdfUrls[3],
        pdfUrls[4],
        pdfUrls[5],
        pdfUrls[6],
        pdfUrls[7],
        pdfUrls[8],
        pdfUrls[9],
        pdfUrls[10],
        pdfUrls[11],
        pdfUrls[12],
        pdfUrls[13],
        pdfUrls[14],
        pdfUrls[15],
      ],
      (error, result) => {
        if (error) {
          console.log(error);
          return res
            .status(500)
            .send({ status: "error", message: "Failed to save data" });
        }
        res.send({ status: "success", message: "Data has been sent" });
      }
    );
  }
);

router.put(
  "/input_extra",
  authRole(["admin", "user"]),
  upload.single("pdf17"),
  (req, res) => {
    const pdfUrl17 = `/pdfs/${req.file.filename}`;
    const user_id = req.user_id;
    const status = "Pending_extra";
    connection.query(
      "SELECT url17 FROM a2 WHERE user_id = ? ORDER BY a2.time DESC LIMIT 1",
      [user_id],
      (error, result) => {
        if (error) {
          console.log(err);
          return res
            .status(500)
            .send({ status: "error", message: "Failed to update data" });
        }
        const row = result[0];
        const currentUrl17 = row.url17;
        if (currentUrl17) {
          // Delete the current file if it exists
          const filePath = path.join(__dirname, "..", "public", currentUrl17);
          if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
          }
        }
        connection.query(
          "UPDATE a2 SET status = ?, url17 = ? WHERE user_id = ? ORDER BY a2.time DESC LIMIT 1",
          [status, pdfUrl17, user_id],
          (error, result) => {
            if (error) {
              console.log(error);
              return res
                .status(500)
                .send({ status: "error", message: "Failed to update data" });
            }
            res.send({ status: "success", message: "Data has been sent" });
          }
        );
      }
    );
  }
);

router.get("/get", authRole(["admin"]), (req, res) => {
  connection.query(
    "SELECT a2.*, users.email FROM a2 JOIN users ON a2.user_id = users.user_id",
    (error, result) => {
      if (error) {
        console.log(error);
        return res
          .status(500)
          .send({ status: "error", message: "Failed to get data" });
      }
      const data = result.map((row) => {
        return {
          a2_id: row.a2_id,
          user_id: row.user_id,
          time: row.time,
          comname: row.comname,
          comtype: row.comtype,
          worktype: row.worktype,
          workarea: row.workarea,
          name: row.name,
          phone: row.phone,
          status: row.status,
          comment: row.comment,
          email: row.email,
          url17: row.url17,
        };
      });
      res.status(200).json(data);
    }
  );
});

router.get("/get/:id", authRole(["admin"]), (req, res) => {
  const { id } = req.params;
  connection.query(
    "SELECT a2.*, users.email FROM a2 JOIN users ON a2.user_id = users.user_id WHERE a2.a2_id = ?",
    [id],
    (error, result) => {
      if (error) {
        console.log(error);
        return res
          .status(500)
          .send({ status: "error", message: "Failed to get data" });
      }
      const data = result.map((row) => {
        return {
          a2_id: row.a2_id,
          user_id: row.user_id,
          time: row.time,
          comname: row.comname,
          comtype: row.comtype,
          worktype: row.worktype,
          workarea: row.workarea,
          name: row.name,
          phone: row.phone,
          status: row.status,
          comment: row.comment,
          email: row.email,
          url1: `${process.env.server_url}/static${row.url1}`,
          url2: `${process.env.server_url}/static${row.url2}`,
          url3: `${process.env.server_url}/static${row.url3}`,
          url4: `${process.env.server_url}/static${row.url4}`,
          url5: `${process.env.server_url}/static${row.url5}`,
          url6: `${process.env.server_url}/static${row.url6}`,
          url7: `${process.env.server_url}/static${row.url7}`,
          url8: `${process.env.server_url}/static${row.url8}`,
          url9: `${process.env.server_url}/static${row.url9}`,
          url10: `${process.env.server_url}/static${row.url10}`,
          url11: `${process.env.server_url}/static${row.url11}`,
          url12: `${process.env.server_url}/static${row.url12}`,
          url13: `${process.env.server_url}/static${row.url13}`,
          url14: `${process.env.server_url}/static${row.url14}`,
          url15: `${process.env.server_url}/static${row.url15}`,
          url16: `${process.env.server_url}/static${row.url16}`,
          url17: `${process.env.server_url}/static${row.url17}`,
        };
      });
      res.status(200).json(data);
    }
  );
});

router.put("/edit", authRole(["admin"]), (req, res) => {
  const a2_id = req.body.a2_id;
  const comment = req.body.comment;
  const status = req.body.status;
  connection.query(
    "UPDATE a2 SET comment = ?, status = ? WHERE a2_id = ?",
    [comment, status, a2_id],
    (err, result) => {
      if (err) {
        console.log(err);
        res
          .status(500)
          .send({ status: "error", message: "Internal server error" });
      } else {
        connection.query(
          "SELECT user_id FROM a2 WHERE a2_id = ?",
          [a2_id],
          (err, result) => {
            if (err) {
              console.log(err);
              res
                .status(500)
                .send({ status: "error", message: "Internal server error" });
            } else {
              const user_id = result[0].user_id;
              connection.query(
                "SELECT email FROM users WHERE user_id = ?",
                [user_id],
                (err, result) => {
                  if (err) {
                    console.log(err);
                    res.status(500).send({
                      status: "error",
                      message: "Internal server error",
                    });
                  } else {
                    const email = result[0].email;
                    const data = {
                      status: status,
                      form: "A2",
                      comment: comment,
                    };
                    sendEmail(email, data);
                    res.send({
                      status: "success",
                      message: "Data updated successfully",
                    });
                  }
                }
              );
            }
          }
        );
      }
    }
  );
});

router.delete("/delete/:id", authRole(["admin"]), (req, res) => {
  const id = req.params.id;
  connection.query("SELECT * FROM a2 WHERE a2_id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send({
        status: "error",
        message: "Failed to delete row from database",
      });
    } else {
      const row = result[0];
      const pdfUrls = Object.values(row)
        .slice(8, 25)
        .filter((url) => url !== null); // modify slice indices if URLs are located in different columns
      connection.query("DELETE FROM a2 WHERE a2_id = ?", id, (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send({
            status: "error",
            message: "Failed to delete row from database",
          });
        } else {
          pdfUrls.forEach((url) => {
            const filePath = path.join(__dirname, "..", "public", url);
            if (fs.existsSync(filePath)) {
              fs.unlinkSync(filePath);
            }
          });
          res.send({ status: "success", message: "Data deleted" });
        }
      });
    }
  });
});

router.delete("/deletefull/:id", authRole(["admin"]), (req, res) => {
  const id = req.params.id;
  connection.query("SELECT * FROM a2 WHERE a2_id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send({
        status: "error",
        message: "Failed to delete row from database",
      });
    } else {
      const row = result[0];
      const pdfUrls = Object.values(row)
        .slice(8, 26)
        .filter((url) => url !== null); // modify slice indices if URLs are located in different columns
      connection.query("DELETE FROM a2 WHERE a2_id = ?", id, (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send({
            status: "error",
            message: "Failed to delete row from database",
          });
        } else {
          pdfUrls.forEach((url) => {
            const filePath = path.join(__dirname, "..", "public", url);
            if (fs.existsSync(filePath)) {
              fs.unlinkSync(filePath);
            }
          });
          res.send({ status: "success", message: "Data deleted" });
        }
      });
    }
  });
});

module.exports = router;
