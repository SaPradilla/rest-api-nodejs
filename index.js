require('dotenv').config()
// express
const express = require('express')
const app = express()
// route
const routes = require('./routes')
const port = 5000


app.listen(port,()=>{
    console.log(`server run: https://localhost:${port}`)
})
app.use('/',routes)