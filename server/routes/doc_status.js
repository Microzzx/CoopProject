const express = require('express')
const router = express.Router()
const connection = require('../connection');
const {authRole} = require('../middlewares/jwtrole_auth')

router.get("/",authRole(["admin"]), (req, res) => {
    connection.query("SELECT a1.status AS a1_status, a2.status AS a2_status FROM users JOIN a1 ON users.user_id = a1.user_id JOIN a2 ON users.user_id = a2.user_id WHERE users.user_id = ? ORDER BY a1.time DESC, a2.time DESC LIMIT 1",
    [req.user_id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error while retrieving infomation");
        } else {
            res.send(result);
        }
    });
});

module.exports = router;