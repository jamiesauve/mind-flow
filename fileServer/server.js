const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')

const app = express()
const port = 4201

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*')
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.use(bodyParser.json())

app.post('/create', (req, res) => {
  
  const {
    body
  } = req

  fs.writeFile(`./notes/${body.fileName}`, `${body.noteTitle}$$$${body.noteBody}`, function (err) { // use UUIDs for file names
    if (err) {
      res.status(500).send()
    } else {
      res.status(200).send()
    }
  })
})

app.listen(port, () => console.log(`Listening on port ${port}`))