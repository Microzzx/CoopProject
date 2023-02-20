const express = require("express");
const router = express.Router();
const connection = require("../connection");
const bcrypt = require("bcrypt");
const { authRole } = require("../middlewares/jwtrole_auth");

router.put("/", authRole(["admin", "user"]), (req, res) => {
  const user_id = req.user_id;
  const fname = req.body.fname;
  const lname = req.body.lname;
  const phone = req.body.phone;
  connection.query(
    "UPDATE users SET fname = ?, lname = ?, phone = ? WHERE user_id = ?",
    [fname, lname, phone, user_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send({
          status: "success",
          message: "Status updated successfully",
        });
      }
    }
  );
});

router.put("/password", authRole(["admin", "user"]), (req, res) => {
    const user_id = req.user_id;
    const pre_password = req.body.pre_password;
    const new_password = req.body.new_password;
    connection.query(
      "SELECT password FROM users WHERE user_id = ?",
      [user_id],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send({
            status: "error",
            message: "Something went wrong",
          });
        } else {
          if (result.length === 0) {
            res.status(404).send({
              status: "error",
              message: "User not found",
            });
          } else {
            const hashedPassword = result[0].password;
            bcrypt.compare(pre_password, hashedPassword, (err, isMatch) => {
              if (err) {
                console.log(err);
                res.status(500).send({
                  status: "error",
                  message: "Something went wrong",
                });
              } else if (!isMatch) {
                res.status(401).send({
                  status: "error",
                  message: "Incorrect password",
                });
              } else {
                bcrypt.hash(new_password, 10, (err, hashedNewPassword) => {
                  if (err) {
                    console.log(err);
                    res.status(500).send({
                      status: "error",
                      message: "Something went wrong",
                    });
                  } else {
                    connection.query(
                      "UPDATE users SET password = ? WHERE user_id = ?",
                      [hashedNewPassword, user_id],
                      (err, result) => {
                        if (err) {
                          console.log(err);
                          res.status(500).send({
                            status: "error",
                            message: "Something went wrong",
                          });
                        } else {
                          res.send({
                            status: "success",
                            message: "Password updated successfully",
                          });
                        }
                      }
                    );
                  }
                });
              }
            });
          }
        }
      }
    );
  });

module.exports = router;
