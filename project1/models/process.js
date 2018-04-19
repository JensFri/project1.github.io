const mongoose = require('mongoose')

var ProcessSchema = new mongoose.Schema({
    titel: String,
    name: String,
    lastname: String,   
    created_at: String,
    updated_at: String,
    filename: String
        // modificationDate: {type: Date},
        // name: {type: String },
        // size: {type: Number },
        // type: {type: String },
        // filename: {type: String }
    ,
    modificationDate: {type: Date, "default": Date.now}

},{
    collection: 'process'
})

const Process = mongoose.model('Process', ProcessSchema)

module.exports = Process