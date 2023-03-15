const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express()
const mysql = require('mysql');
const { request } = require('express');

const port = 8080

const connection = mysql.createConnection({
  host: '54.169.69.87',
  user: 'rtd',
  password: 'Tiny722$',
  database: 'pe8db'
});
connection.connect()

app.post('/tooniiniilber',(req,res)=>{

connection.query('SELECT * FROM Assessment',
(error,rows, fields)=>{
  console.log('The solution is:',rows[0])
  res.send(rows)
});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})