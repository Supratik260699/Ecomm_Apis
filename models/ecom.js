const mongoose = require('mongoose');
const ecomSchema = {
    name: {
        type:String,
        required:true
    },
    quantity: {
        type:Number,
        required:true
    }
};
const eCom = mongoose.model("eCom",ecomSchema);
module.exports = eCom;