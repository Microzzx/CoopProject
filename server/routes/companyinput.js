const express = require('express')
const router = express.Router()
const connection = require('../connection');

router.post("/", (req, res) => {
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

module.exports = router;