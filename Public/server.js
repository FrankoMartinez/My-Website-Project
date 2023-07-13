const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'Public')));

app.use('/css/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));

express.static.mime.types['css'] = 'text/css';

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });
  

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });