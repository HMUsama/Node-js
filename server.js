const express = require("express");

const app = express();
require("./mongo")

app.listen(2001,()=>{
    console.log("servers sdas start now");
})