const express = require('express')
const app = express()
const port = 3615
const path = require('path')

const sqliteDB = require('./src/db/db.js');

app.use(express.static(path.join(__dirname, 'dist')))

app.get('/', (req, res) => {
  res.sendFile('index.html')
})

app.listen(port, () => {
  console.log(`Back de l'appication en fonctionnement sur l'url http://localhost:${port}`)
})
