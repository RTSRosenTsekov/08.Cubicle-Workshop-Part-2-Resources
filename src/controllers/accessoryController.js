const { model } = require('mongoose');

const router = require('express').Router();

router.get('/create' , (req,res)=>{
    res.render('accessory/create')
});



module.exports=router;