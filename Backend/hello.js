const express = require("express");

const app = express();
const port = 3000;
const bodyParser = require("body-parser");
app.post(bodyParser())
const mysql = require('mysql')
const connection = mysql.createConnection({
  host: '54.169.69.87',
  user: 'rtd',
  password: 'Tiny722$',
  database: 'pe8db'
})
app.post('/hi',(req,res)=>{

 
  connection.connect()

  connection.query('SELECT *FROM Name',
   (error,rows, fields)=>{
  console.log('The solution is:',rows[3])
  res.send(rows[3])
});

  
  connection.end()
});
 



app.listen(port, () => {
  console.log("Example app listening on port ${port}");
});



