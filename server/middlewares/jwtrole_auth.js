const jwt = require("jsonwebtoken");
const { TOKEN_SECRET } = require('../config');
const connection = require('../connection');

const authRole = (permission) => {
    return (req, res, next) => {
        if(req.headers.authorization){
            const token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, TOKEN_SECRET);
            req.email = decoded.email; 
            connection.query("SELECT role FROM users WHERE email=?", [decoded.email], (err, users) => {
              if (err) {
                res.json({ status: "error", message: "Role not found!" });
                return;
              }
              else if (permission.includes(users[0].role)){
                res.json({ status: "ok", message: "Pass!" });
                next(); 
              }
              else{
                res.json({ status: "error", message: "You don't have permission!"});
                return;
              }
            });
          }else{
            res.json({status: "error", message: "no token provided"});
            return;
          }

}};

module.exports = { authRole };