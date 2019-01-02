const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    ageGroup: {
        type: String,
        required: false,
        default: 'Adult',
        minlength: 0,
        maxlength: 20,
        trim: true
    },
    availability: {
        type: String,
        required: false,
        minlength: 0,
        maxlength: 20,
        trim: true,
        default: 'In stock'
    },
    brand: {
        type: String,
        required: false,
        minlength: 0,
        maxlength: 20,
        trim: true,
        default: 'none'
    },
    channel: {
        type: String,
        default: 'online',
        required: false,
        minlength: 0,
        maxlength: 10,
        trim: true
    },
    color: {
        type: String,
        required: false,
        minlength: 0,
        maxlength: 20,
        trim: true,
        default: 'black'
    },
    condition: {
        type: String,
        default: 'New',
        required: false,
        minlength: 0,
        maxlength: 20,
        trim: true
    },
    description: {
        type: String,
        required: false,
        minlength: 0,
        maxlength: 2000,
        trim: true,
        default: 'No description'
    },
    gender: {
        type: String,
        default: 'Not selected',
        required: false,
        minlength: 0,
        maxlength: 20,
        trim: true
    },
    material: {
        type: String,
        default: 'Not selected',
        required: false,
        minlength: 0,
        maxlength: 50,
        trim: true
    },
    name: {
        type: String,
        required: [true, 'Name field is required'],
        minlength: 1,
        maxlength: 200,
        trim: true
    },
    price: {
        type: Number,
        default: 0,
        required: [true, 'Price field is required'] 
    },
    type: {
        type: String,
        required: false,
        minlength: 1,
        maxlength: 20,
        trim: true,
        default: 'Not selected'
    }
});

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;
