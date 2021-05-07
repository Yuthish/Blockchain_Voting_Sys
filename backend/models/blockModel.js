const mongoose = require("mongoose");



const blockschema = mongoose.Schema({
    prev_hash:String,
    hash:String,
    vote:String,
    size:Number,
    party:String,
}, {timestamps:true});


var Block = mongoose.model("Block", blockschema)




module.exports = Block