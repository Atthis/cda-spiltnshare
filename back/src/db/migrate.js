const sqliteDB = require('./db.js');

sqliteDB.serialize(() => {

  sqliteDB.run("BEGIN TRANSACTION");

  sqliteDB.run(`
          create table if not exists users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE
          );
      `, (err) => {
      if (err) {
          console.log(`ERROR: on created users table : ${err}`);
      } else {
          console.log('INFO: users table created or updated');
      }
  });

  sqliteDB.run(`
          create table if not exists receipts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            uuid TEXT NOT NULL,
            owner_id INTEGER NOT NULL,
            articles_data TEXT NOT NULL,
            FOREIGN KEY (owner_id) REFERENCES users(id)
          );
      `, (err) => {
      if (err) {
          console.log(`ERROR: on created receipts table : ${err}`);
      } else {
          console.log('INFO: receipts table created or updated');
      }
  });

  sqliteDB.run("COMMIT", (err) => {
      if (err) {
          console.log(`ERROR: on created or updated database : ${err}`);
      } else {
          console.log('INFO: database created or updated');
      }
  });
});

sqliteDB.close()