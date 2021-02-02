const express=require('express');
const post_route=express.Router();
const Post=require("../model/post");
const id=require('mongoose').Types._ObjectId;

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
  var names=req.body.comments;
  if (names.length >= 1){
    
  }
  console.log(names)
  var pst= new Post({
    title: req.body.title,
    body: req.body.body,
    comments: names
  })
  pst.save((err,doc)=>{
     if(err){
       res.send(JSON.stringify(err,null,2))
     }
     else{
       res.send("Doc saved successfully")
     }
  })
})
post_route.get("/_id",(req,res)=>{
  if(req.params.id !=id){
    res.send("bad id")
  }
  Post.findById(req.params.id, (err,doc)=>{
     if(!err){
       res.send(doc);
     }
     else{
       res.send("Error occured: "+JSON.stringify(err, null,2))
     }
  })
})
post_route.delete("/:id",(req,res)=>{
  Post.findByIdAndDelete(req.params.id, (err,doc)=>{
    if(err){
      res.send("Error occured")
    }
    else{
      res.send("record deleted successfully")
    }
  })
})

module.exports=post_route;



// 6018e22e4b746817bcb3b160
