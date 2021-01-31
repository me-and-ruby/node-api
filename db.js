const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/Posting',{ useNewUrlParser: true,useUnifiedTopology: true },(err)=>{
   if (err){
      console.log(JSON.stringify(err,undefined,2))
   }else{
     console.log('You are connected to database.........')
   }
})
module.exports=mongoose;