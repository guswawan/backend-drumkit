const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    // imagePath: [mongoose.Schema.Types.Mixed]
    imagePath: {
        type: String
    }
});


module.exports = mongoose.model('Product', ProductSchema);