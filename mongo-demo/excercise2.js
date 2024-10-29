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
            .or([{tags:'backend'},{tags:'frontend'}])
            .sort({price:-1})
            .select({name:1,author:1});

}
async function run() {
    const courses = await getcourses();
    console.log(courses);
}
run();