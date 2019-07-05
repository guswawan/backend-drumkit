const Product = require('../models/product.model');
const cloudinary = require('cloudinary').v2;



//POST PRODUCT
exports.create_product = function (req, res) {
    var product = new Product(
        {
        productName : req.body.productName,
        price : req.body.price,
        description : req.body.description,
        imagePath : req.file.path
        }  
    )
    console.log("file image uploaded to server")
    console.log(product);
    
    //CLOUDINARY
    const path = req.file.path
    const uniqueFilename = new Date().toISOString()
    cloudinary.uploader.upload(
        path,
        { public_id: `drumkit/${uniqueFilename}`},
        function (err, result) {
            if (err)
            return res.send(err)
        console.log('file uploaded to Cloudinary')

    
        //remove file image from server
        const fs = require('fs');
        fs.unlinkSync(path)
        
        res.end(result)
        }
    )

    product.save(function (err, product) {
        if (err)
        return res.json({
            success: false,
            error: err
        });
        return res.json({
            success: true,
            product: product
        })
    })
};

//GET ALL PRODUCT
exports.all_product = function (req, res) {
	Product.find((err, products) => {
        if (err)
        return res.json({
            success: false,
            error: err
        });
        return res.json({
            success: true,
            products: products
        })        

    })
};

// GET PRODUCT w/ Method Aggregate() MongoDb
/*exports.agt_product = function (req, res) {
    Product.aggregate([{$match: {price: "$1"} }],(err, products) => {
       if (err)
        return res.json({
            success: false,
            error: err
        });
        return res.json({
            success: true,
            products: products
        })
    })
};*/

//DELETE PRODUCT
exports.delete_product = function (req, res) {
    Product.findByIdAndRemove(req.body._id, function(err, data) {
        console.log(data);
    })
    res.json(data);
};
