const express = require('express')
const router = express.Router()

router
    .get('/' ,(req,res) => {
        res.send('inicio')
    })
    .get('/nosotros',(req,res) => {
        res.send('nosotros')
    })

module.exports = router