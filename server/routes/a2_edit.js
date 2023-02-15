const express = require("express");
const router = express.Router();
const connection = require("../connection");
const { authRole } = require("../middlewares/jwtrole_auth");

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
