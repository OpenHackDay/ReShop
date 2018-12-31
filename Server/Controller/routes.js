
const router = require('express').Router();
const Product = require('../Models/product');
const bodyParser = require('body-parser');
const {mongoose} = require('../Db/mongoose');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

router.post('/products', (req, res) => {

    const product = new Product({
        name: req.body.name,
        brand: req.body.brand,
        gender: req.body.gender,
        color: req.body.color,
        size: req.body.size
    });

    product.save().then(() => {

    }, (e) => {
        res.status(400).send(e);
    });

});

router.get('/products', (req, res) => {

    Product.find({}).then((products) => {
        res.send(products)
    }, (e) => {
        res.status(400).send(e);
    })

  });

module.exports = router;