const router = require("express").Router();
const mongoose = require("mongoose")

// server main request send krny k lea  post ka variable bnaya
const Post = mongoose.model("Post")
//1) Create Route 
// Get Request => Read
router.get("/",async(req,res)=>{
    try{
        const posts = await Post.fine()
        console.log("ab kia karon ",posts)
        res.send(posts)
    }catch(err){
        res.status(500)
        console.log("**************Error hai kia***********",err)
    }
});
//get request mein ID dali hai 
router.get("/:postId", async (req, res)=>{
    console.log("ab kia hoga***")
    // try{
    //     const post = await Post.find({ _id: req.params.postId })
    //     console.log("post",post)
    //     res.send(post)
    // } catch (err){
    //     res.status(500);
    // }
});
// Put Request =>  Modify/Edit
router.put("/:postId", async (req, res)=>{
    console.log("ab kia karon put ")
    try{
        const post = await Post.findByIdAndUpdate({
              _id: req.params.postId },req.body);
              console.log("ID",_id)
        res.send(post)
    } catch (err){
        res.status(500);
    }
});
// Post Request => Create
router.post("/", async(req,res) => {
    try{// cerate instence post  
        const post = new Post();
        post.title = req.body.title;
        post.content = req.body.content;
        //post .save async hai to await lagana ho ga 
        // await post.save();
        console.log("~~POST~~",post.title) 
        res.send(post)
    }catch(err){
        res.status(500)
    }   
})


module.exports = router