const mongoose = require('mongoose'); 


const Product = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 200,
        trim: true
    },
    adult: {
        type: boolean,
        required: false,
        default: false
    },
    ageGroup: {
        type: String,
        required: false,
        default: 'Adult',
        minlength: 0,
        maxlength: 20,
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
    availability: {
        type: 'String',
        required: false,
        minlength: 0,
        maxlength: 20,
        trim: true,
        default: 'In stock'
    },
    description: {
        type: String,
        required: false,
        minlength: 0,
        maxlength: 2000,
        trim: true,
        default: ''
    },
    channel: {
        type: 'String',
        default: 'online',
        required: false,
        minlength: 0,
        maxlength: 10,
        trim: true
    },
    gender: {
        type: 'String',
        default: 'Not selected',
        required: false,
        minlength: 0,
        maxlength: 20,
        trim: true
    },
    material: {
        type: 'String',
        default: '',
        required: false,
        minlength: 0,
        maxlength: 50,
        trim: true
    },
    price: {
        type: Number,
        default: 0,
        currency: {
            type: 'String',
            default: '$',
            required: true,
            minlength: 1,
            maxlength: 10,
            trim: true
        }
    },
    condition: {
        type: 'String',
        default: 'new',
        required: false,
        minlength: 0,
        maxlength: 50,
        trim: true
    },
    expirationDate: {
        type: 'String',
        required: true,
        minlength: 1,
        maxlength: 50,
        trim: true
    }
}); 


  mongoose.model('Product', Product);
  
  module.exports = mongoose.model('Product');