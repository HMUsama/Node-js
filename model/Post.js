const mongoose = require("mongoose");

const post_schema =new mongoose.Schema(
    {
        title:{
            type: String,
            // required:true
            required:"Title is required"
        },
        content: {   
            type: String,
            // required:true
            required:"Content is required"
        }
    },
    {// timestamps =>jo bhi value ko update 
        //krty han woh batata hai ye value 
        //update hoe hai or is ko schema ky bahar likhty han
        timestamps: true
    }
)

module.exports = mongoose.model("Post",post_schema)