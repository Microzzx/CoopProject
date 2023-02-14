const express = require('express')
const router = express.Router()
const connection = require('../connection');
const {authRole} = require('../middlewares/jwtrole_auth')

router.get("/",authRole(["admin"]), (req, res) => {
    connection.query("SELECT a1.*, users.email FROM a1 JOIN users ON a1.user_id = users.user_id", (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error while retrieving infomation");
        } else {
            res.send(result);
        }
    });
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    connection.query("SELECT a1.*, users.email FROM a1 JOIN users ON a1.user_id = users.user_id WHERE a1.a1_id = ?",
    [id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error while retrieving infomation");
        } else {
            res.send(result);
        }
    });
});

module.exports = router;