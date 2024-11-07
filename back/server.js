const express = require('express')
const app = express()
const port = 3615
const path = require('path')

const db = require('./src/db/db.js');

const apiRouter = require('./src/api/apiRouter')

app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
  res.sendFile('index.html')
})

app.use('/api', apiRouter);

app.get('/test', async (req, res) => {
  const sql = 'SELECT * FROM receipts';

  const rawData = await new Promise(function (resolve, reject) {
    db.all(sql, [], function (err, rows) {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });

  const formatedData = [];

  rawData.forEach(row => {
    const jsonArticles = JSON.parse(row.articles_data);

    const formatedRow = {
      ...row,
      articles_data: jsonArticles
    };

    formatedData.push(formatedRow);
  })

  res.json(formatedData);
})

app.listen(port, () => {
  console.log(`Back de l'appication en fonctionnement sur l'url http://localhost:${port}`)
})
