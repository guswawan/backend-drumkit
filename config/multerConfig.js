const multer = require('multer');

// === LOCAL STORAGE === //
//storage multer
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, 'public/images/')
//     },
//     filename: (req, file, cb) => {
//       cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
//     },
//     fileFilter: function(req, file, cb) {
//       let ext = path.extname(file.originalname)
//       if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
//         return cb(null, false)
//       }
//       cb(null, true)
//     }      
// });
// const upload = multer({storage: storage});
// === END === //

module.exports = upload;