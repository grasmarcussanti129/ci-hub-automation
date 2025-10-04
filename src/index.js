const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to CI Hub Automation!');
});

app.listen(port, () => {
  console.log(`CI Hub Automation listening at http://localhost:${port}`);
});