require('dotenv').config()
const express = require('express')
const { process } = require('ipaddr.js')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get(`/youtube` , (req,res) =>{
res.send("hello World");
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
console.log("gggggggg");
console.log("wellcom");