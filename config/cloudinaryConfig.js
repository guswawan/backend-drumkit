const cloudinary = require('cloudinary');


// === CLOUDINARY === //
cloudinary.config({
  cloud_name: 'asdfghj',
  api_key: '419825895451199',
  api_secret: 'wgyzwQ9jp5tEE_jW3XYkwwLkd38'
})


exports.uploads = (files) => {
    return new Promise(resolve => {
        cloudinary.uploader.upload(files, (result) => {
            resolve({url: result.url, id: result.public_id})
            
        }, {resource_type: "auto"})
    })
}