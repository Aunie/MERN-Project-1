const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    brand:{
        type:String,
        require:true
    },
    varient:{
        type:String,
        require:true
    },
    color:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    ptaRegistered:{
        type:Boolean,
        default:false
    }
})

const Product = new mongoose.model('Product', productSchema);
module.exports = Product;
