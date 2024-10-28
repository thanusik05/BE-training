
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
 .then(()=> console.log("connected to monogodb.."))
 .catch(err=>console.error('could not connect...'));

 const CourseSchema = mongoose.Schema({
   name:{type:String,required:true,minlength:4,maxlength:233},
   author : String,
   tags : {type:Array , validate:{
            isAsync : true,
            validator : function(v){
            return new Promise ((resolve,reject)=>{
            setTimeout(()=>{
            const result = v && v.length >0;
            resolve(result)                
            },4000);
            })
            },
            message: 'A Course should have atleast one tag'
        }
   },
    
   date : {type:Date,default:Date.now},
   ispublished : Boolean,
   price : {type: Number , required:{function (){
    return this.ispublished;},
    min:10,
    max:200}}
 });
 const Course = mongoose.model('courses',CourseSchema)
 async function createcourse(){
    
    const course = new Course({
       name : 'python  course',
       author : 'thanusik ',
       //tags : ['python'],
       ispublished:true,
       price:15
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
/*
 async function updateCourse(id) {
    const course = await Course.findById(id);
    if(!course) return 'not found';
    course.ispublished = true;
    course.author = 'Another Author';
    const result = await course.save();
    console.log(result);
    
}
*/
async function updateCourse(id) {
    const course = await Course.findByIdAndUpdate(id,{
        $set:{
            author:'jack',
            ispublished: false
        }
    },{new: true});
    
    console.log(course);
    
}
//updateCourse('6718db16dd9f94ea686d98ec');

async function removeCourse(id) {
    // const result = await Course.deleteMany({_id: id});
    // console.log(result);
    const course = await Course.findByIdAndDelete(id);
    console.log(course);
    
}
//removeCourse('6718db16dd9f94ea686d98ec');