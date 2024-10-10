const express = require('express');
const app = express();
const path = require('path');
const apiRoutes = require('./routes/api');

const PORT = 3000;

app.use(express.static(path.join(__dirname, '../clientside/public')));

app.use('/static', express.static(path.join(__dirname, '../clientside/static')));

app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});