const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/Tutorial'

// connect to mongo
mongoose.connect(url)
// schemas
const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String
})

const saveInDB = async () => {
  const ProductModal = mongoose.model('videos', ProductSchema);
  let data = new ProductModal({
    name: 'm10',
    price: 1000,
    brand: 'samsung',
    category: 'phone'
  })
  let res = await data.save()
  console.log(res)
}

// ----------*******UPDATE*******--------------
const updateInDB = async () => {
  const ProductModal = mongoose.model('videos', ProductSchema)
  let data = await ProductModal.updateOne(
    { name: 'm40' },
    {
      $set: { name: 'm90' }
    }
  );
  console.log(data)

}


// ----------*******DELETE*******--------------
const deleteInDB = async () => {
    const ProductModal = mongoose.model('videos', ProductSchema)
    let data = await ProductModal.deleteOne(
      { name: 'm10' },
    );
    console.log(data)
  
  }
  
  
// ----------*******FIND*******--------------
const findInDB = async () => {
    const ProductModal = mongoose.model('videos', ProductSchema)
    let data = await ProductModal.find({});
    console.log(data)
  
  }
  findInDB();
  
  