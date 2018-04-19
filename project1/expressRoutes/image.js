 var express = require('express')
 var _router = express.Router()
// var path = require('path')
// var crypto = require('crypto')
// var mongoose = require('mongoose')
// mongoose.connect(config.DB)
// var conn = mongoose.createConnection(config.DB)
// var multer = require('multer')
// var GridFsStorage = require('multer-gridfs-storage')
// var Grid = require('gridfs-stream')

// let gfs

// conn.once('open', () => {
//     //Init stream
//     gfs = Grid(conn.db, mongoose.mongo)
//     gfs.collection('uploads')
// })

// var storage = new GridFsStorage({
//     url: config.DB,
//     file: (req, file) => {
//         return new Promise((resolve, reject) => {
//             crypto.randomBytes(16, (err, buf) => {
//                 if (err) {
//                   return reject(err);
//                 }           
//                 var filename = buf.toString('hex') + path.extname(file.originalname);
//                 var fileInfo = {
//                     filename: filename,
//                     bucketName: 'uploads'
//                 };
//                 resolve(fileInfo)
//             });
//         });
//     }
// });

// // var store = multer.diskStorage({
// //     destination:function(req,file,cb){
// //         cb(null, './uploads');

// //     },
// //     filename:function(req,file,cb){
// //         cb(null, Date.now()+'.'+file.originalname)
// //     }
// // });

// var upload = multer({storage}).single('file');

// _router.post('/upload', function(req,res,next){
//     upload(req,res,function(err){
//         if(err){
//             return res.status(501).json({error:err});
//         }

//         return res.json({originalname:req.file.originalname, uploadname:req.file.filename});
//     });
// });

// // @route GET /files
// // @desc  Display all files in JSON
// _router.get('/files', (req, res) => {
//     gfs.files.find().toArray((err, files) => {
//       // Check if files
//       if (!files || files.length === 0) {
//         return res.status(404).json({
//           err: 'No files exist'
//         });
//       }
  
//       // Files exist
//       return res.json(files);
//     });
//   });

// //   // @route GET /
// // // @desc Loads form
// // app.get('/', (req, res) => {
// //     gfs.files.find().toArray((err, files) => {
// //       // Check if files
// //       if (!files || files.length === 0) {
// //         res.render('index', { files: false });
// //       } else {
// //         files.map(file => {
// //           if (
// //             file.contentType === 'image/jpeg' ||
// //             file.contentType === 'image/png'
// //           ) {
// //             file.isImage = true;
// //           } else {
// //             file.isImage = false;
// //           }
// //         });
// //         res.render('index', { files: files });
// //       }
// //     });
// //   });

// _router.post('/download', function(req,res,next){
//     filepath = path.join(__dirname, '../uploads') + '/' + req.body.filename;
//     res.sendFile(filepath);
// })

 module.exports = _router;
