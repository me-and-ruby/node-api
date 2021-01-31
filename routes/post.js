const express=require('express');
const post_route=express.Router();
const Post=require("../model/post")

post_route.get("/",(req,res)=>{
  Post.find((err,doc)=>{
     if(!err){
       res.send(doc)
     }
     else{
       res.send(JSON.stringify(err,null,2))
     }
  })
})
post_route.post("/",(req,res)=>{
  res.send("add a post")
})
post_route.get("/:id",(req,res)=>{
  res.send("get post by id")
})
post_route.delete("/",(req,res)=>{
  res.send("remove a post")
})

module.exports=post_route;