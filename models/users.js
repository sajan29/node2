const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    Name:{
        required:true,
        type:String
    },
    Age:{
        required:true,
        type:Number
    },
    Date:{
        type:Date,
        default:Date.now
    }
});


mongoose.model("User",userSchema);