const express = require('express')
const router = express.Router()
const connection = require('../connection');
const {authRole} = require('../middlewares/jwtrole_auth')

router.get("/",authRole(["admin", "user"]), (req, res) => {
    connection.query("SELECT email, fname, lname, phone, role FROM users WHERE user_id = ?",
    [req.user_id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error while retrieving information");
        } else {
            res.send({status: "ok", email: result[0].email, fname: result[0].fname, lname: result[0].lname, phone: result[0].phone, role: result[0].role });
        }
    });
});

module.exports = router;