const express = require("express");
const router = express.Router();
const connection = require("../connection");
const { authRole } = require("../middlewares/jwtrole_auth");
const sendEmail = require("./mailer");

router.post("/input", authRole(["admin", "user"]), (req, res) => {
  const user_id = req.user_id;
  const comname = req.body.comname;
  const comage = req.body.comage;
  const subdistrict = req.body.subdistrict;
  const district = req.body.district;
  const province = req.body.province;
  const zipcode = req.body.zipcode;
  const worktype = req.body.worktype;
  const toughness = req.body.toughness;
  const weakness = req.body.weakness;
  const achieve = req.body.achieve;
  const fulltime = req.body.fulltime;
  const outsource = req.body.outsource;
  const tools = req.body.tools;
  const branch = req.body.branch;
  const provinces = req.body.provinces;
  const status = "Pending";

  connection.query(
    "INSERT INTO a1 (user_id, comname, comage, subdistrict, district, province, zipcode, worktype, toughness, weakness, achieve, civil, electrical, fore, chief1, chief2, chief3, mechanic1, mechanic2, mechanic3, worker, ocivil, oelectrical, ofore, ochief1, ochief2, ochief3, omechanic1, omechanic2, omechanic3, oworker, tools, branch, provinces, status) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      user_id,
      comname,
      comage,
      subdistrict,
      district,
      province,
      zipcode,
      worktype,
      toughness,
      weakness,
      achieve,
      fulltime.civil,
      fulltime.electrical,
      fulltime.fore,
      fulltime.chief1,
      fulltime.chief2,
      fulltime.chief3,
      fulltime.mechanic1,
      fulltime.mechanic2,
      fulltime.mechanic3,
      fulltime.worker,
      outsource.civil,
      outsource.electrical,
      outsource.fore,
      outsource.chief1,
      outsource.chief2,
      outsource.chief3,
      outsource.mechanic1,
      outsource.mechanic2,
      outsource.mechanic3,
      outsource.worker,
      tools,
      branch,
      provinces,
      status,
    ],
    (err, result) => {
      if (err) {
        res.status(500).send({
          status: "error",
          message: "Error occurred while inserting data into the database",
        });
      } else {
        res.send({ status: "success", message: "Data has been sent" });
      }
    }
  );
});

router.get("/get", authRole(["admin"]), (req, res) => {
  connection.query(
    "SELECT a1.*, users.email FROM a1 JOIN users ON a1.user_id = users.user_id",
    (err, result) => {
      if (err) {
        res.status(500).send({
          status: "error",
          message: "Error while retrieving infomation",
        });
      } else {
        res.send(result);
      }
    }
  );
});

router.get("/get/:id", authRole(["admin"]), (req, res) => {
  const { id } = req.params;
  connection.query(
    "SELECT a1.*, users.email FROM a1 JOIN users ON a1.user_id = users.user_id WHERE a1.a1_id = ?",
    [id],
    (err, result) => {
      if (err) {
        res.status(500).send({
          status: "error",
          message: "Error while retrieving infomation",
        });
      } else {
        res.send(result);
      }
    }
  );
});

router.put("/edit", authRole(["admin"]), (req, res) => {
  const a1_id = req.body.a1_id;
  const comment = req.body.comment;
  const status = req.body.status;
  connection.query(
    "UPDATE a1 SET comment = ?, status = ? WHERE a1_id = ?",
    [comment, status, a1_id],
    (err, result) => {
      if (err) {
        res
          .status(500)
          .send({ status: "error", message: "Internal server error" });
      } else {
        connection.query(
          "SELECT user_id FROM a1 WHERE a1_id = ?",
          [a1_id],
          (err, result) => {
            if (err) {
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
                    res.status(500).send({
                      status: "error",
                      message: "Internal server error",
                    });
                  } else {
                    const email = result[0].email;
                    const data = {
                      status: status,
                      form: "A1",
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
  connection.query("DELETE FROM a1 WHERE a1_id = ?", id, (err, result) => {
    if (err) {
      res.status(500).send({ status: "error", message: "Error deleting data" });
    } else {
      res.sendStatus(204);
    }
  });
});

module.exports = router;
