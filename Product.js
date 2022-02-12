// modals and Schemas
const mongoose = require('mongoose');



// schemas
const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String
  }) ;

//   modal
module.exports=mongoose.model('videos',ProductSchema);
// always write modal module.exports


