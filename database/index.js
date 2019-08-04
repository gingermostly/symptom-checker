const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('sample_data.db');

db.each('select * from symptoms', (err, row) => {
  console.log(row);
});
