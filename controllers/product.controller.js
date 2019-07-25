// const Product = require('../models/product.model');
const Cloud = require('../config/cloudinaryConfig');



//POST PRODUCT
exports.create_product = function (req, res) {
    try {
        // var productDetails = {
        //     productName: req.body.productName

        // };
        var productDetails = {
                    // productName: req.body.productName,
                    // price: req.body.price,
                    // description: req.body.description,
                    imagePath: req.files[0].path,
                    imageId: ''
        }
        // Product.find({productName: productDetails.productName}, (err, cb) => {
        //     if (err) {
        //         res.json({
        //             err: err,
        //             message: "there was a problem uploading image"
        //         })
        //     }
        //     // else if( cb.length >= 1 ) {
        //     //     res.json({
        //     //         message: "file already exist"
        //     //     })
        //     // } 
        //     else {
        //         var productDetails = {
        //             productName: req.body.productName,
        //             price: req.body.price,
        //             description: req.body.description,
        //             imagePath: req.files[0].path,
        //             imageId: ''
        //         }
        //     }
            Cloud.uploads(productDetails.imagePath).then((result) => {
                console.log(result)
                var productDetails = {
                    productName: req.body.productName,
                    price: req.body.price,
                    description: req.body.description,
                    imagePath: result.url,
                    imageId: result.id
                }


                if (result) {
                    res.json({
                        result: result,
                        message: "bisa"
                    })
                    } 

                //then create file in database
                // Product.create(productDetails, (err, created) => {
                //     if (err) {
                //         res.json({
                //             err: err,
                //             message: "could not upload, try again!"
                //         })
                //     } else {
                //         res.json({
                //             created: created,
                //             message: "image uploaded successfully!"
                //         })
                //     }
                // })
            })
        // });
    }catch(execptions){
        console.log(execptions)
    }

    // var product = new Product(
    //     {
    //     productName : req.body.productName,
    //     price : req.body.price,
    //     description : req.body.description,
    //     imagePath : req.file.path
    //     }  
    // )
    // console.log("file image uploaded to server")
    // console.log(product);
    
    //CLOUDINARY
    // const path = req.file.path
    // const uniqueFilename = new Date().toISOString()
    // cloudinary.uploader.upload(
    //     path,
    //     { public_id: `drumkit/${uniqueFilename}`},
    //     function (err, result) {
    //         if (err)
    //         return res.send(err)
    //     console.log('file uploaded to Cloudinary')

    
    //     //remove file image from server
    //     const fs = require('fs');
    //     fs.unlinkSync(path)
        
    //     res.end(result)
    //     }
    // )

    // product.save(function (err, product) {
    //     if (err)
    //     return res.json({
    //         success: false,
    //         error: err
    //     });
    //     return res.json({
    //         success: true,
    //         product: product
    //     })
    // })
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
    Product.findByIdAndDelete({
        _id:req.params.id
    }, (err, deleted) => {
        if (err)
        return res.status(400).json({
            success: false,
            error: err,
            message: "cant deleted!"
        });
        return res.status(200).json({
            success: true,
            message: "deleted!"
        })
    })
};
