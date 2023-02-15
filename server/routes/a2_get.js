const express = require("express");
const router = express.Router();
const connection = require("../connection");
const { authRole } = require("../middlewares/jwtrole_auth");

router.get("/", authRole(["admin", "user"]), (req, res) => {
  const sql =
    "SELECT a2.*, users.email FROM a2 JOIN users ON a2.user_id = users.user_id";
  connection.query(sql, (error, result) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ message: "Failed to get data" });
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
      };
    });

    res.status(200).json(data);
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const sql =
    "SELECT a2.*, users.email FROM a2 JOIN users ON a2.user_id = users.user_id WHERE a2.a2_id = ?";
  connection.query(sql, [id], (error, result) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ message: "Failed to get data" });
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
        url1: `http://localhost:3001/static${row.url1}`,
        url2: `http://localhost:3001/static${row.url2}`,
        url3: `http://localhost:3001/static${row.url3}`,
        url4: `http://localhost:3001/static${row.url4}`,
        url5: `http://localhost:3001/static${row.url5}`,
        url6: `http://localhost:3001/static${row.url6}`,
        url7: `http://localhost:3001/static${row.url7}`,
        url8: `http://localhost:3001/static${row.url8}`,
        url9: `http://localhost:3001/static${row.url9}`,
        url10: `http://localhost:3001/static${row.url10}`,
        url11: `http://localhost:3001/static${row.url11}`,
        url12: `http://localhost:3001/static${row.url12}`,
        url13: `http://localhost:3001/static${row.url13}`,
        url14: `http://localhost:3001/static${row.url14}`,
        url15: `http://localhost:3001/static${row.url15}`,
        url16: `http://localhost:3001/static${row.url16}`,
        url17: `http://localhost:3001/static${row.url17}`,
      };
    });
    res.status(200).json(data);
  });
});

module.exports = router;
