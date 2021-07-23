const express = require('express')
const app = express()
const port = 3000
let fs = require('fs')
//let moment = require('moment');

app.get('/',(req, res)=> {
    res.send('DENTRO DE ESTE REQUEST TIPO GET')
})

app.get('/perfiles', (req, res)=> {
    res.send('estoy en perfiles')
})

app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}')
})