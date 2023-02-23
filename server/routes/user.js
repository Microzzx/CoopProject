const express = require("express");
const router = express.Router();
const connection = require("../connection");
const bcrypt = require("bcrypt");
const fs = require("fs");
const path = require("path");
const { authRole } = require("../middlewares/jwtrole_auth");

router.get("/get", authRole(["admin", "user"]), (req, res) => {
  connection.query(
    "SELECT email, fname, lname, phone, picture_url, role FROM users WHERE user_id = ?",
    [req.user_id],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error while retrieving information");
      } else {
        res.send({
          status: "ok",
          email: result[0].email,
          fname: result[0].fname,
          lname: result[0].lname,
          phone: result[0].phone,
          picture_url: `http://localhost:3001/static${result[0].picture_url}`,
          role: result[0].role,
        });
      }
    }
  );
});

router.get("/get/all", authRole(["admin"]), (req, res) => {
  connection.query(
    "SELECT user_id, email, fname, lname, phone, role, last_login FROM users",
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error while retrieving information");
      } else {
        res.send(result);
      }
    }
  );
});

router.put("/edit", authRole(["admin", "user"]), (req, res) => {
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

router.put("/edit/password", authRole(["admin", "user"]), (req, res) => {
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

router.post("/edit/picture", authRole(["admin", "user"]), (req, res) => {
  const email = req.email;
  const base64Image = req.body.image.split(";base64,").pop();
  const PictureName = `${email}.png`;
  const profilePicPath = path.join(
    __dirname,
    "..",
    "public",
    "profile_pics",
    PictureName
  );
  fs.writeFile(profilePicPath, base64Image, { encoding: "base64" }, (err) => {
    if (err) {
      return res.status(500).json({ error: "Failed to save picture" });
    } else {
      res.json({ status: "ok", message: "Success to save picture" });
    }
  });
});

router.delete("/delete/:id", authRole(["admin"]), (req, res) => {
  const id = req.params.id;
  connection.query(
    "SELECT picture_url FROM users WHERE user_id = ?",
    id,
    (err, result) => {
      if (err) {
        res.status(500).send({ message: "Error deleting data" });
      } else if (result.length === 0) {
        res.status(404).send({ message: "User not found" });
      } else {
        const pictureUrl = result[0].picture_url;
        const picturePath = path.join(__dirname, "..", "public", pictureUrl);
        fs.unlink(picturePath, (err) => {
          if (err) {
            console.error(err);
          }
          connection.query(
            "DELETE FROM users WHERE user_id = ?",
            id,
            (err, result) => {
              if (err) {
                res.status(500).send({ message: "Error deleting data" });
              } else {
                res.sendStatus(204);
              }
            }
          );
        });
      }
    }
  );
});

module.exports = router;
