const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    name:String,
    price:String,
    description:String,
    ratings:String,
    images:[
        {
            images:String
        }
    ],
    category:String,
    seller:String,
    stock:String,
    noOfReviews:String,
    createdAt:Date
})

const productModel=mongoose.model('product',productSchema)

module.exports =productModel;