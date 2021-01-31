const express=require('express');
const post_route=express.Router();

post_route.get("/",(req,res)=>{
  res.send("here all posts")
})

module.exports=post_route;