const mongoose = require ("mongoose");
require("dotenv").config();

mongoose.Promise = global.Promise;
console.log("ENV",process.env.MONGO_URI)
// mongoose.connect()


