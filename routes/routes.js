const express = require('express');
const router = express.Router();
const multer = require('multer');
const product_controller = require('../controllers/product.controller');
const path = require('path');
const cloudinary = require('cloudinary').v2;



// === LOCAL STORAGE === //
//storage multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/images/')
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    },
    fileFilter: function(req, file, cb) {
      let ext = path.extname(file.originalname)
      if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
        return cb(null, false)
      }
      cb(null, true)
    }      
});
const upload = multer({storage: storage});
// === END === //

// === CLOUDINARY === //
cloudinary.config({
  cloud_name: 'asdfghj',
  api_key: '419825895451199',
  api_secret: 'wgyzwQ9jp5tEE_jW3XYkwwLkd38'
})


//routes
router.post('/create', upload.single('image'),product_controller.create_product);
router.get('/products', product_controller.all_product);
/*router.get('/products', product_controller.agt_product);*/
router.post('/delete', product_controller.delete_product);


module.exports = router; 