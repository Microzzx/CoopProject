const express = require("express");
const router = express.Router();
const connection = require("../connection");
const { authRole } = require("../middlewares/jwtrole_auth");
const sendEmail = require("./mailer");

router.put("/", authRole(["admin"]), (req, res) => {
  const a2_id = req.body.a2_id;
  const comment = req.body.comment;
  const status = req.body.status;
  connection.query(
    "UPDATE a2 SET comment = ?, status = ? WHERE a2_id = ?",
    [comment, status, a2_id],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
      } else {
        connection.query(
          "SELECT user_id FROM a2 WHERE a2_id = ?",
          [a2_id],
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
                      form: "A2",
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
