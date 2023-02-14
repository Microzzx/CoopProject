const express = require("express");
const router = express.Router();
const connection = require("../connection");
const { authRole } = require("../middlewares/jwtrole_auth");

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
      } else {
        res.send({
          status: "success",
          message: "Status updated successfully!",
        });
      }
    }
  );
});

module.exports = router;
