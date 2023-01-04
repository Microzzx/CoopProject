const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const port = 3001;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "892501892501",
    database: "company_db"
});

app.listen(port, () =>{
    console.log("Server is running on port",port);
})

app.get('/companies',(req, res) => {
    db.query("SELECT * FROM companies", (err, result) =>{
        if(err) {
            console.log(err);
        }
        else{
            res.send(result);
        }
    });
});

app.post('/create',(req, res) => {
    const name = req.body.name;
    const age = req.body.age;

    db.query("INSERT INTO companies (name, age) VALUES(?,?)", [name,age], (err, result) =>{
        if(err){
            console.log(err);
        }
        else{
            res.send("Value Inserted");
        }
    });
});

app.put('/update',(req, res) => {
    const id = req.body.id;
    const age = req.body.age;

    db.query("UPDATE companies SET age = ? WHERE id = ?", [age, id], (err, result) =>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    })
})

app.delete('/delete/:id',(req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM companies WHERE id = ?", id, (err, result) =>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    })
})