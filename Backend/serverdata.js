const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express()
const mysql = require('mysql');
const { request } = require('express');
const port = 8080

app.use(cors())

app.use(bodyParser())

const connection = mysql.createConnection({
  host: '54.169.69.87',
  user: 'rtd',
  password: 'Tiny722$',
  database: 'pe8db'
});
connection.connect()

app.get('/tooniiniilber',(req,res)=>{
  connection.query('SELECT Team, Scrum, System_, Design, Communication, Performance,( Scrum+ System_+ Design+ Communication+Performance)/5 as avgPoint FROM Assessment',
  (error,rows, fields)=>{
    res.send(rows)
    });
});

app.get('/dundaj02',(req,res)=>{
  connection.query('SELECT Team, Member, Scrum, System_, Design, Communication, Performance,( Scrum+ System_+ Design+ Communication+Performance)/5 as avgPoint FROM Assessmentbymember',
  (error,rows, fields)=>{
    res.send(rows)
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})