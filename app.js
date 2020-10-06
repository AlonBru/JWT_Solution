/* write your server code here */
const express = require('express')
const app =express()
app.use(express.json)
app.get('/ping',(req,res)=>{
  res.send('pong')
})
app.use('/api/', require('./api'))
app.use('/users/',require('./api/users'))

module.exports= app