const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyparser = require("body-parser")
const morgan = require("morgan")

// database  connection 
require("./mongo");
// Models
require("./model/Post");
//Middleware is use to modify to routes & use to json()
app.use(bodyparser.json())
   .use(morgan())
// server main request send krny k lea  post ka variable bnaya
const Post = mongoose.model("Post")
// Create Route 
app.get("/posts", async(req,res)=>{
    try{
        const posts = await Post.find({})
        req.send(posts)
    }catch(err){
        res.status(500)
    }
})
//    post request
app.post("/posts", async(req,res) => {
    res.send(req.body)
    console.log("**responce**",req.body.title) 
    try{// cerate instence post 
        const post = new Post();
        post.title = req.body.title;
        post.content = req.body.content; 
        //post .save async hai to await lagana ho ga 
        await post.save();
        res.send(post)
    }catch(err){
        res.status(1000)
    }   
})

app.listen(1000,() => {
    console.log("servers is start ");
})