const {Customer, validate} = require('../models/customer')
const mongoose = require('mongoose');
const express = require('express');
const Joi = require("joi");
const router = express.Router();




router.get('/', async (req,res)=>{
    const customer = await Customer.find().sort('name');
    res.send(customer);
});
router.get('/:genre',async (req,res)=>{
    const customer = await Customer.findById(req.params.id);
    if(!customer) return res.status(404).send("the genre with the given name was not found");
    res.send(customer); 
});
router.post('/',async(req,res)=>{
    const {error} = validate(req.body);
    if(error){
        res.status(400).send(error.details[0].message);
        return;
    }
    let customer= new Customer({"name":req.body.name,
      phone : req.body.phone,
      isGold : req.body.isGold

     });
    
    customer = await customer.save();
    res.send(customer);
});


module.exports = router;