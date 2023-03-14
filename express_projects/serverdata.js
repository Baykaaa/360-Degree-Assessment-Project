const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express()
const mysql = require('mysql');
const { request } = require('express');

const port = 8080

app.use(cors())
app.get('/dataavah',(req,res)=>{
    res.send(
      JSON.stringify (
      [{team:'ulun.mn', design:2,scrum:5, system:5, communication:5, performance:8},
      {team:'teachify', design:2,scrum: 8, system: 8, communication: 8, performance:8},
      {team:'360', design:2,scrum: 8, system: 8, communication: 8, performance:8},
      {team:'ulun.mn', member: 'tulga', design:2,scrum:5, system:5, communication:5, performance:8},
      {team:'ulun.mn', member: 'muuluu', design:2,scrum: 8, system: 8, communication: 8, performance:8},
      {team:'ulun.mn', member: 'bujee', design:2,scrum: 8, system: 8, communication: 8, performance:8},
      {team:'teachify', member: 'chingun', design:2,scrum: 8, system: 8, communication: 8, performance:8},
      {team:'teachify', member: 'batzaya', design:2,scrum: 8, system: 8, communication: 8, performance:8},
      {team:'teachify', member: 'baagii', design:2,scrum: 8, system: 8, communication: 8, performance:8},
      {team:'teachify', member: 'uyanga', design:2,scrum: 8, system: 8, communication: 8, performance:8},
      {team:'360', member: 'tsatsaa', design:2,scrum: 8, system: 8, communication: 8, performance:8},
      {team:'360', member: 'budka', design:2,scrum: 8, system: 8, communication: 8, performance:8},
      {team:'360', member: 'bayka', design:2,scrum: 8, system: 8, communication: 8, performance:8}])
    );
})
app.post('/dataavah11',(req,res)=>{
  res.send(
    JSON.stringify (
      [{team:'ulun.mn', design:2,scrum:5, system:5, communication:5, performance:8},
      {team:'teachify', design:2,scrum: 8, system: 8, communication: 8, performance:8},
      {team:'360', design:2,scrum: 8, system: 8, communication: 8, performance:8},
      {team:'ulun.mn', member: 'tulga', design:2,scrum:5, system:5, communication:5, performance:8},
      {team:'ulun.mn', member: 'muuluu', design:2,scrum: 8, system: 8, communication: 8, performance:8},
      {team:'ulun.mn', member: 'bujee', design:2,scrum: 8, system: 8, communication: 8, performance:8},
      {team:'teachify', member: 'chingun', design:2,scrum: 8, system: 8, communication: 8, performance:8},
      {team:'teachify', member: 'batzaya', design:2,scrum: 8, system: 8, communication: 8, performance:8},
      {team:'teachify', member: 'baagii', design:2,scrum: 8, system: 8, communication: 8, performance:8},
      {team:'teachify', member: 'uyanga', design:2,scrum: 8, system: 8, communication: 8, performance:8},
      {team:'360', member: 'tsatsaa', design:2,scrum: 8, system: 8, communication: 8, performance:8},
      {team:'360', member: 'budka', design:2,scrum: 8, system: 8, communication: 8, performance:8},
      {team:'360', member: 'bayka', design:2,scrum: 8, system: 8, communication: 8, performance:8}]
    )
  )
})

const students=[
  {name:"john", email:"adsdf"},
  {name:"jane", email:"fgfgadgk"}
]

app.use(bodyParser())
app.post('/dataavah',(req,res)=>{
  console.log("Got body:",req.body);
  console.log("Got body:",req.body.name);
  res.send(students);
});

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