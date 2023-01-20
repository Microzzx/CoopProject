const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const TOKEN_SECRET = "VO&e-aymlVCs!jf=WkPAWH~/PZM>63Slkxj<2$x37eY*DsSiAfSFP_8Ofk~I";
const port = 3001;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "892501892501",
  database: "company_db",
});

app.listen(port, () => {
  console.log("Server is running on port", port);
});

app.get("/companies", (req, res) => {
  db.query("SELECT * FROM companies", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/companyinfo", (req, res) => {
  db.query("SELECT * FROM companyinfo", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/create", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;

  db.query(
    "INSERT INTO companies (name, age) VALUES(?,?)",
    [name, age],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Value Inserted");
      }
    }
  );
});

app.post("/create1", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const subdistrict = req.body.subdistrict;
  const district = req.body.district;
  const province = req.body.province;
  const zipcode = req.body.zipcode;
  const worktype = req.body.worktype;
  const toughness = req.body.toughness;
  const weakness = req.body.weakness;
  const exwork = req.body.exwork;
  const civil = req.body.civil;
  const electrical = req.body.electrical;
  const fore = req.body.fore;
  const chief1 = req.body.chief1;
  const chief2 = req.body.chief2;
  const chief3 = req.body.chief3;
  const mechanic1 = req.body.mechanic1;
  const mechanic2 = req.body.mechanic2;
  const mechanic3 = req.body.mechanic3;
  const worker = req.body.worker;
  const ocivil = req.body.ocivil;
  const oelectrical = req.body.oelectrical;
  const ofore = req.body.ofore;
  const ochief1 = req.body.ochief1;
  const ochief2 = req.body.ochief2;
  const ochief3 = req.body.ochief3;
  const omechanic1 = req.body.omechanic1;
  const omechanic2 = req.body.omechanic2;
  const omechanic3 = req.body.omechanic3;
  const oworker = req.body.oworker;
  const tools = req.body.tools;
  const branch = req.body.branch;
  const provinces = req.body.provinces;

  db.query(
    "INSERT INTO companyinfo (name, age, subdistrict, district, province, zipcode, worktype, toughness, weakness, exwork, civil, electrical, fore, chief1, chief2, chief3, mechanic1, mechanic2, mechanic3, worker, ocivil, oelectrical, ofore, ochief1, ochief2, ochief3, omechanic1, omechanic2, omechanic3, oworker, tools, branch, provinces) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      name,
      age,
      subdistrict,
      district,
      province,
      zipcode,
      worktype,
      toughness,
      weakness,
      exwork,
      civil,
      electrical,
      fore,
      chief1,
      chief2,
      chief3,
      mechanic1,
      mechanic2,
      mechanic3,
      worker,
      ocivil,
      oelectrical,
      ofore,
      ochief1,
      ochief2,
      ochief3,
      omechanic1,
      omechanic2,
      omechanic3,
      oworker,
      tools,
      branch,
      provinces,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Value Inserted");
      }
    }
  );
});

app.put("/update", (req, res) => {
  const id = req.body.id;
  const age = req.body.age;

  db.query(
    "UPDATE companyinfo SET age = ? WHERE id = ?",
    [age, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM companyinfo WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/register", jsonParser, (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const fname = req.body.fname;
  const lname = req.body.lname;
  db.query("SELECT * FROM users WHERE email=?", [email], (err, users) => {
    if (err) {
      res.json({ status: "error", message: "error" });
      return;
    }
    if (users.length > 0) {
      res.json({ status: "error", message: "same username!" });
      return;
    }
    bcrypt.hash(password, 10, function (err, hash) {
      db.query(
        "INSERT INTO users (email, password, fname, lname) VALUES (?, ?, ?, ?)",
        [email, hash, fname, lname],
        (err, result) => {
          if (err) {
            res.json({ status: "error", message: "register failed!" });
            console.log(err);
          } else {
            res.json({ status: "ok", message: "register success!" });
          }
        }
      );
    });
  });
});

app.post("/login", jsonParser, (req, res) => {
  const email = req.body.email;
  db.query("SELECT * FROM users WHERE email=?", [email], (err, users) => {
    if (err) {
      res.json({ status: "error", message: "error" });
      return;
    }
    if (users.length == 0) {
      res.json({ status: "error", message: "user not found!" });
      return;
    }
    bcrypt.compare(
      req.body.password,
      users[0].password,
      function (err, isLogin) {
        if (isLogin) {
          const token = jwt.sign({ email: users[0].email }, TOKEN_SECRET, {
            expiresIn: "1h",
          });
          res.json({ status: "ok", message: "login success!", token });
        } else {
          res.json({ status: "error", message: "wrong password!" });
        }
      }
    );
  });
});

app.post("/auth", jsonParser, (req, res) => {
    if(req.headers.authorization){
      const token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, TOKEN_SECRET);
      res.json({status: 'ok', decoded});
  }else {
      res.json({status: 'err', message: "no token provided"});
  }
});
