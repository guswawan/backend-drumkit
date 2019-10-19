const express = require('express');
const router = express.Router();
const product_controller = require('../controllers/product.controller');
const upload = require('../config/cloudinaryConfig');
// const upload = require('../config/multerConfig');


//==ROUTES==//
router.post('/create', upload.any(),product_controller.create_product);
router.get('/products', product_controller.all_products);
router.get('/product/:id', product_controller.detail_product);
/*router.get('/products', product_controller.agt_product);*/ //get with aggregate
router.post('/delete/:id', product_controller.delete_product);


module.exports = router; 