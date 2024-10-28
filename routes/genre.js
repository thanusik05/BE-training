const mongoose = require('mongoose');
const express = require('express');
const Joi = require("joi");
const router = express.Router();

const {Genre , validategenre} = require('../models/genre')



router.get('/', async (req,res)=>{
    const genre = await Genre.find().sort('name');
    res.send(genre);
});
router.get('/:genre',async (req,res)=>{
    const genre = await Genre.findById(req.params.id);
    if(!genre) return res.status(404).send("the genre with the given name was not found");
    res.send(genre); 
});
router.post('/',async(req,res)=>{
    const {error} = validategenre(req.body);
    if(error){
        res.status(400).send(error.details[0].message);
        return;
    }
    let genre= new Genre({"name":req.body.name });
    
    genre = await genre.save();
    res.send(genre);
});
router.put('/:id',async(req,res)=>{
    const {error} = validategenre(req.body);
    if(error){
       return res.status(400).send(error.details[0].message);
    
    }
    const genre = await Genre.findByIdAndUpdate(req.params.id,{name : req.body.name},{
     new : true   
    });

   
    
    if(!genre) res.status(404).send("the course with the given id was not found");
    res.send(genre);
    
        
});
router.delete('/:id', async (req,res)=>{
    const genre = await Genre.findByIdAndDelete(req.params.id)
    
    if(!genre) res.status(404).send("the genre with the given id was not found");
    
    res.send(genre);
});

//router.listen(5000,()=>{console.log("listening in port 5000")});



module.exports=router;