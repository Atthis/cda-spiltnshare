const express = require('express')
const app = express()
const port = 3615
const path = require('path')

const db = require('./src/db/db.js');

app.use(express.static(path.join(__dirname, 'dist')))

app.get('/', (req, res) => {
  res.sendFile('index.html')
})

app.get('/test', async (req, res) => {
  const sql = 'SELECT * FROM receipts';

  const data = await new Promise(function (resolve, reject) {
    db.all(sql, [], function (err, rows) {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });

  res.json(data);
})

app.listen(port, () => {
  console.log(`Back de l'appication en fonctionnement sur l'url http://localhost:${port}`)
})
