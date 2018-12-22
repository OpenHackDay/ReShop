
const express = require('express');
const path = require('path');
const routes = require('./Controller/routes');


// Setup
const app = express();
const port = process.env.PORT || 3000;
const distPath = path.join(__dirname, '../Web/Assets/dist');


// Middlewares
app.use(express.static(distPath, {
  extensions: ['html', 'htm']
}));
app.use(routes);


// Server launch
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
