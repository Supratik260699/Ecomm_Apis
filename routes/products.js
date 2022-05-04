const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const Ecom = require('../models/ecom');

//to get the list of products
router.get("/",function(req,res){
    Ecom.find({},function(err,found){
        if(err)
        {
            console.log(err);
        }
        return res.json(200,{data:found,message:"success"});
    });
});


//to add a new product to the list
router.post("/create",function(req,res){

   /* const EcomOne = new Ecom({
        id:count,
        name : req.body.name,
        quantity : req.body.quantity
    });
    count++;
    EcomOne.save();
    return res.json(200,{data:EcomOne,message:"success"});*/
   // console.log(req.body);
    Ecom.create(req.body,function(err,ecom){
        if(err)
        {
            console.log(err);
        }
        console.log(ecom);
        return res.status(200).json({
            status: "Success",
            message: "Product added successfully",
            product: ecom
        });

    });

});

//to delete a product
router.delete("/:id",function(req,res){
    Ecom.findById(req.params.id,function(err,product){
        if(!err)
        {
            product.remove();
            return res.json(200,{message:"product Deleted"});
        }
        else
        {
            console.log(err);
            return res.json(200,{message:"Error while deleting the product"});
        }
    });
});

//to update the quantity of the product
router.put("/:id/update_quantity",function(req,res){
    console.log(req.body);
    Ecom.findByIdAndUpdate(
        req.params.id,
        {$set: { quantity:  req.body.quantity}},
        {new:true},
        function(err,done)
        {
            if(err)
            {
                console.log(err);
                return res.json(200,{message:"Error while deleting the product"});
            }
            return res.json(200,{data:done,message:"updated successfully"});
        }
    )
});
module.exports = router