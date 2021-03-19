const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database(':memory:', () => {
  const insert = 'INSERT INTO item (name, isPacked) VALUES (?, ?)';
  db.run('CREATE TABLE item (id INTEGER PRIMARY KEY, name text, isPacked Boolean)')
  db.run(insert, ["gwapes","FALSE"]);
  db.run('SELECT * from item');
});

db.close(() => console.log('Closed'));


