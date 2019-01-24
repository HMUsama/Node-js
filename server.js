const express = require("express")
require("express-async-errors");
const app = express()
const mongoose = require("mongoose")
const bodyparser = require("body-parser")
const morgan = require("morgan")

// database  connection 
require("./mongo");
// Models
require("./model/Post");
//Middleware is use to modify to routes &(2) use to json()
app.use(bodyparser.json()).use(morgan())  

//Routes
app.use("/posts",require("./routes/Posts"))



app.listen(2000,() => {
    console.log("servers is start ");
})