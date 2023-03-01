const express = require("express");
const router = express.Router();
const connection = require("../connection");
const { authRole } = require("../middlewares/jwtrole_auth");

router.post("/", authRole(["admin", "user"]), (req, res) => {
  const user_id = req.user_id;
  const current_time = new Date()
    .toLocaleString("en-US", { timeZone: "Asia/Bangkok", hour12: false })
    .replace(",", "");
  connection.query(
    "UPDATE users SET last_login=? WHERE user_id=?",
    [current_time, user_id],
    (err, result) => {
      if (err) {
        res.status(500).json({
          status: "error",
          message: "Internal server error",
        });
      }
    }
  );
  res.json({ status: "ok", message: "Logout success" });
});

module.exports = router;
