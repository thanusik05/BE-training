const mongoose =require('mongoose')
mongoose.connect('mongodb://localhost/excercise')
const courseSchema = new mongoose.Schema({
    name : String,
    author : String,
    tags : [String],
    date : Date,
    ispublished: Boolean,
    price: Number
})