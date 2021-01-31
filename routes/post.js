const express=require('express');
const post_route=express.Router();

post_route.get("/",(req,res)=>{
  res.send("here all posts")
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