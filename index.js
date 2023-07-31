require('dotenv').config()
// express
const express = require('express')
const app = express()
// mongo db
const mongoose = require('mongoose')
mongoose.set('strictQuery',true);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/restapi',{
    useNewUrlParser: true
})
// route
const routes = require('./routes')
const port = 8000

app.listen(port,()=>{
    console.log(`server run: https://localhost:${port}`)
})
app.use('/',routes)