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

app.get('/allNotes', (req, res) => {
  // only returns one note for now!
  fs.readFile('./notes/attempt.txt', {encoding: 'utf-8'}, (err, data) => {
    const [title, body] = data.split('$$$')

    res.header({'Content-Type': 'application/json'})
    res.status(200)
    res.json([{title, body}])
  });
})

app.post('/create', (req, res) => {
  
  const {
    body : {
      data
    }
  } = req

  fs.writeFile(`./notes/${data.fileName}`, `${data.noteTitle}$$$${data.noteBody}`, function (err) { // use UUIDs for file names
    if (err) {
      res.status(500).send("fail")
    } else {
      res.status(200).send("success")
    }
  })
})

app.listen(port, () => console.log(`Listening on port ${port}`))