const mongoose=require('mongoose');

const Post=mongoose.model('Post',{
  title:{type:String},
  body:{type:String},
  comments:[{
    c_body: {type:String},
    c_date: {type: String}
    }]
  })

module.exports=Post;