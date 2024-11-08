async function getReceipts(db) {
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

  const receipts = [];

  rawData.forEach(row => {
    const jsonArticles = JSON.parse(row.articles_data);

    const formatedRow = {
      ...row,
      articles_data: jsonArticles
    };

    receipts.push(formatedRow);
  })

  return receipts;
}

async function getReceiptByUUID(db, uuid) {
  const sql = 'SELECT * FROM receipts WHERE uuid = ?';

  const rawData = await new Promise(function (resolve, reject) {
    db.all(sql, [uuid], function (err, rows) {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });

  const receipts = [];

  rawData.forEach(row => {
    const jsonArticles = JSON.parse(row.articles_data);

    const formatedRow = {
      ...row,
      articles_data: jsonArticles
    };

    receipts.push(formatedRow);
  })

  return receipts;
}

module.exports = {
  getReceipts
}