require('dotenv').config()

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send(
        '<h1> WOOOHOO </h1>'
    )
})

app.get('/port', (req, res)=> {
    res.send(`<div> port is ${process.env.PORT}</div>`)
})

app.listen(PORT, ()=> {
    console.log(`listening on ${PORT}`)
})

function nameRocks() {
    
    console.log(`woohoo ${process.argv[3]}`)
}

function environment() {
    console.log(`its my secret ${process.env.SECRET}`)
}

environment()