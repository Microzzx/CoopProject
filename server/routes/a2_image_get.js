const express = require('express')
const router = express.Router()
const connection = require('../connection');

router.get("/", (req, res) => {
    connection.query("SELECT * FROM images", (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error while retrieving a2 image");
        } else {
            res.send(result);
        }
    });
});

module.exports = router;