const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const bodyParser = require('body-parser');

app.listen(port, () => console.log(`listening on port ${port}!`));
