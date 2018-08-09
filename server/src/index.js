const express = require('express');
const app = express();
const renderToString = require('react-dom/server')

app.get('/', (req , res) => {});

app.listen(3000, () => {
  console.log('Listen on port 3000')
});
