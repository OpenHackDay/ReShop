
const express = require('express');
const path = require('path');
const router = require('./Controller/routes');


// Setup
const app = express();
const port = process.env.PORT || 3000;
const distPath = path.join(__dirname, '../web/assets/dist');


// Routes

app.use(router);

app.use(express.static(distPath, {
  extensions: ['html', 'htm']
}));

app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, '/index.html'));
});


// Server launch
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
