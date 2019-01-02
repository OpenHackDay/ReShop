const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('./Db/mongoose');
const { errorHandling } = require('./Middlewares/errorHandling');


// Setup
const app = express();
const port = process.env.PORT || 3000;
const distPath = path.join(__dirname, '../web/assets/dist');


// Body-Parser
app.use(bodyParser.json());

// API Routes
app.use('/api', require('./Controller/api')); 

// Error handling
app.use(errorHandling);

// Static Files
app.use(express.static(distPath, {
  extensions: ['html', 'htm']
}));

// Error page
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, '/index.html'));
});


// Server launch
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
