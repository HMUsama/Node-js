const express = require("express")
require("express-async-errors");
const app = express()
const bodyparser = require("body-parser")
const morgan = require("morgan")

//_database  connection 
require("./mongo");
//_Models
require("./model/Post");
//_Middleware is use to modify to routes &(2) use to json()
app.use(bodyparser.json())
// .use(morgan())  
//_Routes
app.use("/posts",require("./routes/Posts"))

app.listen(2000,() => {
    console.log("servers is start ");
})