const express = require("express");
const bodyParser = require("body-parser");
const ejs= require ('ejs');
const mongoose = require("mongoose");


const app = express();

mongoose.connect("mongodb://localhost/to-do_express",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


app.use("/", function(req,res){
    res.sendFile(__dirName + routes/app)
});

app.use(express.urlencoded({ extended: true}));

app.use( express.static("public"));

app.set("view engine", "ejs")









app.listen(5000, function(){
    console.log("the  port is now running!");
});