// const mongoose = require('mongoose');

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
    imagePath: [mongoose.Schema.Types.Mixed],
    imageId: {
        type: String
    },
    post_date: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Product', ProductSchema);