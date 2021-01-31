const express=require('express');
const bodyparser=require('body-parser');
const post_route=require('./routes/post');
const db=require("./db")

const app=express();
const port=3000 ;
app.use(bodyparser.json());

app.use('/',post_route);

app.listen(port,()=>{
  console.log("Listening on port: "+ port)
})