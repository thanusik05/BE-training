const express = require('express');
const router = express.Router()

const genre =[{id:1,genre:"horror"},
    {id:2,genre:"comedy"}
    ,{id:3,genre:"thriller"},
    {id:4,genre:"suspense"},
    {id:5,genre:"romance"}];
router.get('/',(req,res)=>{
    res.send(genre);
});
router.get('/:genre',(req,res)=>{
    const genres=genre.find(c=>c.genre===req.params.genre);
    if(!genres) return res.status(404).send("the genre with the given name was not found");
    res.send(genres); 
});
router.post('/',(req,res)=>{
    const {error} = genrevalidation(req.body);
    if(error){
        res.status(400).send(error.details[0].message);
        return;
    }
    const genres={
        id:genre.length+1,
        "genre":req.body
    }
    
    genre.push(genres);
    res.send(genres);
});
router.put('/:id',(req,res)=>{
    const genres=genre.find(c=>c.id===parseInt(req.params.id));
    if(!genres) res.status(404).send("the course with the given id was not found");
    const {error} = genrevalidation(req.body);
    if(error){
        res.status(400).send(result.error.details[0].message);
        return;
    }
    console.log('GENRES =>', genres)
    const modifiedGenre = genre.map((eachGenre) => {
        if(eachGenre.id === parseInt(req.params.id)){
            eachGenre.genre = req.body.genre
        }
        return eachGenre
    })
    // genres.genre = req.body.genre;
    res.send(modifiedGenre);
        
});
router.delete('/:genre',(req,res)=>{
    const genres=genre.find(c=>c.genre===req.params.genre);
    if(!genres) res.status(404).send("the genre with the given id was not found");
    const index = genre.indexOf(genres);
    genre.splice(index,1);
    res.send(genres);
});
router.listen(5000,()=>console.log("listening in port 5000"));
function genrevalidation(genre){
    const schema = Joi.object({
        genre:Joi.string().min(3).required()
    })
    return schema.validate(genre);
    
}

module.exports=router;