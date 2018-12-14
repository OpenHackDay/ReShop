
const express = require('express');
const app = express();
const path = require('path');

const routes = require('./Controller/routes');
const port = process.env.PORT || 3000;

app.use(routes);
app.use(express.static(path.join(__dirname, '../../Web/Assets/dist')));


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
})