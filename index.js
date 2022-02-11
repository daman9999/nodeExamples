const mongoose = require('mongoose');
const url="mongodb://localhost:27017/Tutorial";

const main=async ()=>{
    await mongoose.connect(url);
    // schemas
    const ProductSchema = new mongoose.Schema(
        {
            name:String,
            price:Number
        }
    );
// modal(collection-name,SCHEMA)
const ProductModal = mongoose.model('videos',ProductSchema);

let data =  new ProductModal({name:"m10",price:1000});

let res= await data.save();
console.log(res)

}

main();