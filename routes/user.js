// localhost/user/

const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
require("../models/users");


const Users = mongoose.model('User');



router.get('/',(req,res)=>{
res.render("users/landing");
});
router.get('/register',(req,res)=>{
    res.render("users/register");
})

router.post('/register',(req,res)=>{
   const tempUser = new Users({
       Name:req.body.name,
       Age:req.body.age
   });

   tempUser.save().then(()=>{console.log("Data saved")});

  res.redirect('/');
})

module.exports = router;