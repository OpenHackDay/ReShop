const mongoose = require('mongoose'); 


const Product = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 200,
        trim: true
    },
    brand: {
        type: 'String',
        required: false,
        minlength: 0,
        maxlength: 20,
        trim: true,
        default: 'none'
    },
    color: {
        type: 'String',
        required: false,
        minlength: 0,
        maxlength: 20,
        trim: true,
        default: 'black'
    },
    gender: {
        type: 'String',
        default: 'Not selected',
        required: false,
        minlength: 0,
        maxlength: 20,
        trim: true
    },
    size: {
        type: 'String',
        default: '',
        required: false,
        minlength: 0,
        maxlength: 10,
        trim: true
    }
}); 


  mongoose.model('Products', Product);
  
  module.exports = Product;
  