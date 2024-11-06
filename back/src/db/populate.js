const sqliteDB = require('./db.js');
const { v4: uuidv4 } = require('uuid');

const articlesData = [
  {
    id: 0,
    name: "pizza",
    price: 1180,
    consumers: [1]
  },
  {
    id: 1,
    name: "pizza",
    price: 1180,
    consumers: [2]
  },
  {
    id: 2,
    name: "coca-cola 1.5L",
    price: 350,
    consumers: [2, 3]
  },
];

sqliteDB.serialize(() => {
  sqliteDB.run("BEGIN TRANSACTION");

  sqliteDB.run(`
          INSERT INTO users (name, email)
          VALUES
            ('Jean', 'jean@mail.fr'),
            ('Rose', 'rose@mail.fr'),
            ('Sophie', 'sophie@mail.fr');
      `, (err) => {
      if (err) {
          console.log(`ERROR: on inserting data into users table : ${err}`);
      } else {
          console.log('INFO: users table populated');
      }
  });


  for(let i = 0; i < 2; i++) {
    const uuid = uuidv4();

    sqliteDB.run(`
      INSERT INTO receipts (uuid, owner_id, articles_data)
      VALUES (?, ?, ?);
    `, [uuid, i, JSON.stringify(articlesData)]);
  }

  sqliteDB.run("COMMIT", (err) => {
      if (err) {
          console.log(`ERROR: on created or updated database : ${err}`);
      } else {
          console.log('INFO: database created or updated');
      }
  });
});

sqliteDB.close()