const { Int32 } = require('bson')
const mongoose = require('mongoose')

const ShoesShema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    
    product: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    size: [Number],

    vendorcode: {
        type: String,
    },

    color: {
        type: [String]
    },

    Iname: {
        type: String,
    },

    Image: {
        data: Buffer,
        contentType: String
    }
})

module.exports = mongoose.model('Shoes', ShoesShema)

/* JSON shoes:

Name,
Product,
Price,
Size,
Photo,
Artykul,
Color*/