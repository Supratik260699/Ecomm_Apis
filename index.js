const express = require("express"); //requiring express
const bodyParser = require("body-parser"); //requiring bodyparser
const app = express();
const ejs = require("ejs");
const PORT = process.env.PORT || 1200
const mongoose = require('mongoose'); //requiring mongoose
app.set('view engine','ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
mongoose.connect("mongodb+srv://admin:broadband@cluster0.z5jxk.mongodb.net/eComDB",{ useNewUrlParser: true});   //https://cloud.mongodb.com/v2/625d24881c48766ffe5fa246#metrics/replicaSet/625d27100cbb8a7c6b6d1122/explorer/eComDB/ecoms/find
app.use('/',require('./routes'));
app.listen(PORT,function(req,res){
    console.log("Server is running on port 1200");
});