const express = require ('express');

const router=express.Router();

const Post=require('../modules/post.js');

router.get('/',(req,res)=>{
    //  res.send("we are on posts");
     
     Post.find((err,docs)=>{
        if(!err){res.send(docs);}
        else{console.log('error'+json.stringify(err,undefined,2));}
     });
})

router.post('/',async (req,res) => {
    console.log(req.body);
    const post=new Post({
        name:req.body.name,
        rolenumber:req.body.rolenumber,
        mark1:req.body.mark1,
        mark2:req.body.mark2,
        subject1:req.body.subject1,
        subject2:req.body.subject2
    });
     console.log(post)
     try{
    const savedPost=await post.save()
   res.json(savedPost)
     }catch(err) {
         res.json({message:err});

     }
});
router.get('/:postId',async(req,res)=>{
    try{
    const post=await Post.findById(req.params.postId);
    res.json(post);
    }catch(err){
     res.json({message:error});
    }
   })    

   //update
   router.patch('/:postId',async(req,res)=>{
    var emp={
        name:req.body.name,
        age:req.body.age,
        city:req.body.city,
        state:req.body.state,
        employeeId:req.body.employeeId,
        office:req.body.office
       };
       try{
      const post=await Post.updateOne({_id:req.params.postId},{$set:emp});
      res.json(post);
       }catch(err){
           res.json({message:err});
       }
   })

  //delete
  router.delete('/:postId',async (req,res)=>{
      try{
      const post=await Post.remove({_id:req.params.postId});
      res.json(post);
      }catch(err){
          res.json({message:error});
      }
  })  
module.exports=router;


