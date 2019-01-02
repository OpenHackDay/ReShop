const router = require('express').Router();
const Product = require('../Models/product');
const {ObjectID} = require('mongodb');


router.post('/products', (req, res, next) => {
  Product.create(req.body).then((prod) => {
    res.send(`Added product "${prod.name}".`);
  }).catch(next);
  
});


router.get('/products', (req, res, next) => {
  Product.find({}).then((prod) => {
    res.send(prod);
  });

});


router.put('/products/:id', (req, res, next) => {

  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send(`Invalid id, ${req.params.id}.`);
  }

  Product.findOneAndUpdate({_id: req.params.id}, {$set: req.body}, {new: true, useFindAndModify: false}).then((prod) => {
      res.send(`Updated product "${prod.name}".`)
  }).catch(next);
});

router.delete('/products/:id', (req, res, next) => {

  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send(`Invalid id, ${req.params.id}.`);
  }  

  Product.findOneAndDelete({_id: req.params.id}).then((prod) => {
      res.send(`Product "${prod.name}" was removed.`);
  }).catch(next);

});


router.delete('/products', (req, res, next) => {
  Product.deleteMany({}).then(() => {
     res.send(`Removed all products.`);
  }).catch(next);

});


module.exports = router;
