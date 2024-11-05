const express = require('express')
const app = express()
const port = 3615

const sqliteDB = require('./src/db/db.js');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})
