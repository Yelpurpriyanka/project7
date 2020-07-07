const projectData = {};
const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.status(200).send('./dist/index.html')
})
module.exports = app;

const PORT=5010;
app.listen(PORT, () => {
    console.log(`web server listening on port ${PORT}`);
  });

