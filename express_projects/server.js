const express = require('express')
const path = require('path');
const app = express()
const port = 3000

app.post('/hellworld', (req, res) => {
  res.send('Hello World!')
})

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/Page2.html'));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})