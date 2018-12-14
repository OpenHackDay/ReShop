
const router = require('express').Router();
const path = require('path');

const distPath = path.join(__dirname, '../../Web/Assets/dist');

router.get('/', (req, res) => {
  res.sendFile(path.join(distPath, '/index.html'));
});

router.get('*', (req, res) => {
  res.send('Page not found');
});

module.exports = router;