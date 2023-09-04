const express = require('express')
const router = express.Router()

router
    // .get('/' ,(req,res) => {
    //     res.json({msg:'text'})
    // })
    // .get('/nosotros',(req,res) => {
    //     res.send("dsf");
    // })

    .post('/clientes', clienteController.nuevoCliente);
    
module.exports = router