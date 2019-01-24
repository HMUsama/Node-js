const mongoose = require('mongoose');
require("dotenv").config();
//error ko hundle krta hai 
const mongoDBError = require("mongoose-mongodb-errors")

mongoose.Promise = global.Promise;
//plugin connect krta hia mongoose sy 
mongoose.plugin(mongoDBError);
// console.log("ENV ***",process.env.MONGO_URI)
mongoose.connect(process.env.MONGO_URI);


