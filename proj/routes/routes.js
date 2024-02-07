const express=require('express');
const router=express.Router();
router.use(express.json());

var connection=require("../dbconnect/dbconnect");

router.get("/",(req,res)=>{
    connection.query("select * from car",(err,data)=>{
        if(err){
            res.status(500).send("no data found!!");
        }
        else{
            console.log(data);
            res.status(200).json(data);
        }
    });
});
module.exports=router;