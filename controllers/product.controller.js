const Product = require('../models/product.model');


//==POST PRODUCT==//
exports.create_product = function (req, res) {
    var product = new Product(
        {
        productName : req.body.productName,
        price : req.body.price,
        description : req.body.description,
        imagePath : req.files[0].url,
        imageId : req.files.public_id
        }  
    );
    console.log("file image uploaded")
    console.log(product);
    
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
    // try {
    //     // var productDetails = {
    //     //     productName: req.body.productName

    //     // };
    //     var productDetails = {
    //                 // productName: req.body.productName,
    //                 // price: req.body.price,
    //                 // description: req.body.description,
    //                 imagePath: req.files[0].path,
    //                 imageId: ''
    //     }
    //     // Product.find({productName: productDetails.productName}, (err, cb) => {
    //     //     if (err) {
    //     //         res.json({
    //     //             err: err,
    //     //             message: "there was a problem uploading image"
    //     //         })
    //     //     }
    //     //     // else if( cb.length >= 1 ) {
    //     //     //     res.json({
    //     //     //         message: "file already exist"
    //     //     //     })
    //     //     // } 
    //     //     else {
    //     //         var productDetails = {
    //     //             productName: req.body.productName,
    //     //             price: req.body.price,
    //     //             description: req.body.description,
    //     //             imagePath: req.files[0].path,
    //     //             imageId: ''
    //     //         }
    //     //     }
    //         Cloud.uploads(productDetails.imagePath).then((result) => {
    //             console.log(result)
    //             var productDetails = {
    //                 productName: req.body.productName,
    //                 price: req.body.price,
    //                 description: req.body.description,
    //                 imagePath: result.url,
    //                 imageId: result.id
    //             }


    //             if (result) {
    //                 res.json({
    //                     result: result,
    //                     message: "bisa"
    //                 })
    //                 } 

    //             //then create file in database
    //             // Product.create(productDetails, (err, created) => {
    //             //     if (err) {
    //             //         res.json({
    //             //             err: err,
    //             //             message: "could not upload, try again!"
    //             //         })
    //             //     } else {
    //             //         res.json({
    //             //             created: created,
    //             //             message: "image uploaded successfully!"
    //             //         })
    //             //     }
    //             // })
    //         })
    //     // });
    // }catch(execptions){
    //     console.log(execptions)
    // }

};

//==GET ALL PRODUCT==//
exports.all_products = function (req, res) {
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

//==GET PRODUCT DETAIL==//
exports.detail_product = function (req, res) {
	Product.findById(req.params.id, (err, product) => {
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

//==DELETE PRODUCT==//
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
