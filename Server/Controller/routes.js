
const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.get('*', (req, res) => {
    res.send('Page not found');
  });

module.exports = router;