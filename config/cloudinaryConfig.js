const cloudinary = require('cloudinary');
const multer = require('multer');
const cloudinaryStorage = require('multer-storage-cloudinary');


// === S3 CLOUDINARY === //
cloudinary.config({
  cloud_name: 'asdfghj',
  api_key: '419825895451199',
  api_secret: 'wgyzwQ9jp5tEE_jW3XYkwwLkd38'
})


const storage = cloudinaryStorage({
    cloudinary: cloudinary,
    folder: "products",
    allowedFormats: ["jpg","jpeg", "png"],
});

const upload = multer({storage:storage});

module.exports = upload;