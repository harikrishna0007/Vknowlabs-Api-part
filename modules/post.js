const mongoose =require ('mongoose');

const PostSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    rolenumber:{
        type:Number,
        required:true,
    },
    mark1:{
        type:Number,
        required:true,
    },
    mark2:{
        type:Number,
        required:true,
    },
    subject1:{
        type:String,
        required:true,
    },
    subject2:{
        type:String,
        required:true,
    },
   
})

module.exports=mongoose.model('post',PostSchema);