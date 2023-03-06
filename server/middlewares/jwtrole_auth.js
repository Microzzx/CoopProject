const jwt = require("jsonwebtoken");
const connection = require("../connection");
const TOKEN_SECRET = process.env.TOKEN_SECRET;

const authRole = (permission) => {
  return (req, res, next) => {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, TOKEN_SECRET);
      req.email = decoded.email;
      connection.query(
        "SELECT * FROM users WHERE email=?",
        [decoded.email],
        (err, users) => {
          if (err) {
            res.json({ status: "error", message: "User not found!" });
            return;
          } else if (permission.includes(users[0].role)) {
            req.user_id = users[0].user_id;
            req.email = users[0].email;
            req.role = users[0].role;
            next();
          } else {
            res.json({
              status: "error",
              message: "You don't have permission!",
            });
            return;
          }
        }
      );
    } else {
      res.json({ status: "error", message: "no token provided" });
      return;
    }
  };
};

module.exports = { authRole };
