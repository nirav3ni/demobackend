require('dotenv').config()
const express = require('express') 
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('Nirav__1608')
})

app.get('/login',(req,res) => {
res.send('<h1>please login at nirav backend code</h1>')
})

app.get("/youtube", (req,res) => {
    res.send("<h2>Nirav Lukhi Bhai pote</h2>")
})

app.listen(process.env.port, () => {
    console.log(`Example app listening on port ${port}`)
})