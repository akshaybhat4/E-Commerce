const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    desc : {type: String, required: true, unique: true },
    title : {type: String, required: true, unique : false},
    img : {type : String, required: true},
    category : {type : Array},
    size : {type : Array },
    color : {type : Array },
    price : {type : String, required: true},
    basePrice :  {type : String, required: true},
    offer : {type : String, required: true},
    inStock : {type : String}
 },
 {timestamps: true}
 );

 module.exports = mongoose.model("Product", productSchema);