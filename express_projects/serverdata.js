const express = require('express')
const cors = require('cors');
const app = express()
const port = 8080

app.get('/dataavah',(req,res)=>{
    res.send(
      JSON.stringify([{team:'ulun.mn', member: 'tulga', design:2,scrum:5, system:5, communication:5, performance:8},
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

app.use(cors({origin:'*',methods:'GET, POST, PUT, DELETE, OPTIONS'}))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})