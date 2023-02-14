const express = require('express')
const router = express.Router()
const connection = require('../connection');
const {authRole} = require('../middlewares/jwtrole_auth')

router.get("/", authRole(["admin", "user"]), (req, res) => {
    const sql = "SELECT a2.*, users.email FROM a2 JOIN users ON a2.user_id = users.user_id";
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
          name: row.name,
          url1: `http://localhost:3001/${row.url1}`,
          url2: `http://localhost:3001/${row.url2}`,
          status: row.status,
          email: row.email,
        };
      });
  
      res.status(200).json(data);
    });
  });

  router.get("/:id", (req, res) => {
    const { id } = req.params;
    const sql = "SELECT a2.*, users.email FROM a2 JOIN users ON a2.user_id = users.user_id WHERE a2.a2_id = ?";
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
            name: row.name,
            url1: `http://localhost:3001${row.url1}`,
            url2: `http://localhost:3001${row.url2}`,
            status: row.status,
            email: row.email,
          };
        });
    
        res.status(200).json(data);
      });
  });

module.exports = router;