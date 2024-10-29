const mongoose =require('mongoose');

mongoose.connect('mongodb://localhost/excercise')
const courseSchema = new mongoose.Schema({
    name : String,
    author : String,
    tags : [String],
    date : Date,
    isPublished: Boolean,
    price: Number
});

const Course = mongoose.model('Course',courseSchema);

async function getcourses() {
 return await Course
            .find({ isPublished: true})
            .or([
                {price : {$gte : 15}},
                { name : /.*by.*/i}
            ])
            .sort({price:-1})
            .select({name:1,author:1,price:1});

}
async function run() {
    const courses = await getcourses();
    console.log(courses);
}
run();