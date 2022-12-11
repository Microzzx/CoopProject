import React, {useState, UseEffect, useEffect} from "react"
import {Button, Form, Container, Header} from "semantic-ui-react"
import axios from "axios"
import {getDatabase, ref, push, set, child, update, remove} from "firebase/database"
function Form2() {
const [namebox, setName]  = useState('');
const [rollbox, setRoll]  = useState('');
const [secbox, setSec]  = useState('');
const [genbox, setGen]  = useState('');

const handleOnChange0 = (e) => {
  setName(e.target.value);
}
const handleOnChange1 = (e) => {
  setRoll(e.target.value);
}
const handleOnChange2 = (e) => {
  setSec(e.target.value);
}
const handleOnChange3 = (e) => {
  setGen(e.target.value);
}


 const insBtn = document.getElementById("Insbtn");
 const selBtn = document.getElementById("Selbtn");
 const updBtn = document.getElementById("Updbtn");
 const delBth = document.getElementById("Delbtn");

 function InsertData(){
  const db = getDatabase();
  push(ref(db, "TheStudents/"),{
    NameOfStd: namebox,
    RollNo: rollbox,
    Section: secbox,
    Gender: genbox
  })
  .then(()=>{
    alert("data stored");
  })
  .catch((error)=>{
    alert("unsuccessful, error"+ error);
  })
 }

  return(
    <>
    <label>Name</label> 
    <input id="Namebox" onChange={handleOnChange0} type="text"/>
    <hr/>
    <label>RollNo</label> 
    <input id="Rollbox" onChange={handleOnChange1} type="text"/>
    <hr/>
    <label>Section</label> 
    <input id="Secbox" onChange={handleOnChange2} type="text"/>
    <hr/>
    <label>Gender</label> 
    <select id ="Genbox" onChange={handleOnChange3}>          
      <option value="Male">Male</option>
      <option value="Female">Female</option>      
    </select>
    
    <hr/>
    <button id="Insbtn" onClick={InsertData}>INSERT</button>
    <button id="Selbtn">SELECT</button>
    <button id="Updbtn">UPDATE</button>
    <button id="Delbtn">DELETE</button>
    </>
    
  )
}
export default Form2