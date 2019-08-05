const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('sample_data.db');

app.listen(port, () => console.log(`listening on port ${port}!`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', express.static(path.join(__dirname, '../public')));

app.post('/api/symptom', (req, res) => {
  console.log(req.body);
  db.all(
    `select diagnosis from symptoms where symptom = "${req.body.symptom}"`,
    (err, row) => {
      if (err) {
        console.log('error!');
      }
      res.send(row);
    }
  );
});

app.get('/api/symptom', (req, res) => {
  console.log(res.body);
});
