const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "892501892501",
  database: "company_db",
});

connection.connect();

module.exports = connection;
