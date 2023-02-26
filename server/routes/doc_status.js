const express = require("express");
const router = express.Router();
const connection = require("../connection");
const { authRole } = require("../middlewares/jwtrole_auth");

router.get("/", authRole(["admin", "user"]), (req, res) => {
  connection.query(
    "SELECT users.role AS role, a1.status AS a1_status, a2.status AS a2_status FROM users LEFT JOIN a1 ON users.user_id = a1.user_id LEFT JOIN a2 ON users.user_id = a2.user_id WHERE users.user_id = ? ORDER BY a1.time DESC, a2.time DESC LIMIT 1",
    [req.user_id],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error while retrieving information");
      } else {
        if (!result[0].a1_status) {
          // if no data in both a1 and a2, return empty string for both
          res.send({
            status: "ok",
            role: req.role,
            a1_status: "",
            a2_status: "",
          });
        } else if (!result[0].a2_status) {
          // if no data in a2, return only a1_status
          res.send({
            status: "ok",
            role: result[0].role,
            a1_status: result[0].a1_status,
            a2_status: "",
          });
        } else {
          // both a1 and a2 have data, return both
          res.send({
            status: "ok",
            role: result[0].role,
            a1_status: result[0].a1_status,
            a2_status: result[0].a2_status,
          });
        }
      }
    }
  );
});

module.exports = router;
