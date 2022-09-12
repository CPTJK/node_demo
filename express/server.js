const express = require('express')

const app = express()

const bodyParser = require('body-parser');
const router = require('./router')

app.use(bodyParser.urlencoded({ extended:false}))
app.use(bodyParser.json())

app.use('/', router)


app.listen(8080,() =>{
  console.log('listening on localhost:8080')
})