
const router = require('express').Router();
const path = require('path');

router.get('/products', (req, res) => {
    res.send({
        name: 'Hacktoberfest T-Shirt',
        type: 'T-Shirt',
        brand: 'Nike',
        size: 'XL'
    });
  });

module.exports = router;