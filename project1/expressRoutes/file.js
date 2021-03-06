 var express = require('express')
 var _router = express.Router()
var multer = require('multer')


var store = multer.diskStorage({
    destination:function(req, file, cb){
        cb(null, './uploads')
    },
    filename:function(req, file, cb){
        cb(null, file.originalname);
    }
})

var _upload = multer({storage:store}).single('file');

_router.post('/fileUpload', function(req, res, next){
    _upload(req, res, function(err){
        if(err){
            return res.status(501).json({error:err})
        }
        return res.json({originalname:req.file.originalname, uploadname:req.file.filename})
    })
})


/ _router.post('/download', function(req,res,next){
        filepath = path.join(__dirname, '../uploads') + '/' + req.body.filename;
         res.sendFile(filepath);
     })
 module.exports = _router