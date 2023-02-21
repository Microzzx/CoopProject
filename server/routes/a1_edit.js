const express = require("express");
const router = express.Router();
const connection = require("../connection");
const { authRole } = require("../middlewares/jwtrole_auth");
const sendEmail = require("./mailer");

router.put("/", authRole(["admin"]), (req, res) => {
  const a1_id = req.body.a1_id;
  const comment = req.body.comment;
  const status = req.body.status;
  connection.query(
    "UPDATE a1 SET comment = ?, status = ? WHERE a1_id = ?",
    [comment, status, a1_id],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
      } else {
        connection.query(
          "SELECT user_id FROM a1 WHERE a1_id = ?",
          [a1_id],
          (err, result) => {
            if (err) {
              console.log(err);
              res.status(500).json({ error: "Internal server error" });
            } else {
              const user_id = result[0].user_id;
              connection.query(
                "SELECT email FROM users WHERE user_id = ?",
                [user_id],
                (err, result) => {
                  if (err) {
                    console.log(err);
                    res.status(500).json({ error: "Internal server error" });
                  } else {
                    const email = result[0].email;
                    const data = {
                      status: status,
                      form: "A1",
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

module.exports = router;
