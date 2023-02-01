const express = require('express')
const router = express.Router()
const connection = require('../connection');
const {authRole} = require('../middlewares/jwtrole_auth')

router.post("/",authRole(["admin","user"]), (req, res) => {
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
    const fulltime = req.body.fulltime;
    const outsource = req.body.outsource;
    const tools = req.body.tools;
    const branch = req.body.branch;
    const provinces = req.body.provinces;
    console.log(fulltime);
    connection.query(
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
        fulltime.civil,
        fulltime.electrical,
        fulltime.fore,
        fulltime.chief1,
        fulltime.chief2,
        fulltime.chief3,
        fulltime.mechanic1,
        fulltime.mechanic2,
        fulltime.mechanic3,
        fulltime.worker,
        outsource.civil,
        outsource.electrical,
        outsource.fore,
        outsource.chief1,
        outsource.chief2,
        outsource.chief3,
        outsource.mechanic1,
        outsource.mechanic2,
        outsource.mechanic3,
        outsource.worker,
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

module.exports = router;