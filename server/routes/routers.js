const express = require("express");
let myrouter = express.Router();
let connection = require("../db/dbconnect");

myrouter.get("/treks",(req,res)=>{
    connection.query(" select * from trekker",(err,data,fields)=>{
        if(err){
            res.status(500).send("No data found!!!");
        }
        else{
            console.log(data);
            console.log(fields);
            res.send(data);
        }
    })
});

//it will pass the reference of myrouter in router variable of app.js file
module.exports=myrouter;