
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
 .then(()=> console.log("connected to monogodb.."))
 .catch(err=>console.error('could not connect...'));

 const CourseSchema = mongoose.Schema({
   name:String,
   author : String,
   tags : [String],
   date : {type:Date,default:Date.now},
   ispublished : Boolean
 });
 const Course = mongoose.model('courses',CourseSchema)
 async function createcourse(){
    
    const course = new Course({
       name : 'Angular course',
       author : 'Mosh ',
       tags : ['angular','frontend'],
       ispublished:true
    });
   const result = await course.save();
   console.log(result);
 }
 
 createcourse();
 async function getcourse(){
    const courses = await Course
    .find({author:'Mosh ', ispublished:true})
    .limit(10)
    .sort({name:1})
    .select({name:1,author:1});
    console.log(courses);
 }
 //getcourse();
