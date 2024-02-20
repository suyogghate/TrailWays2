const mysql=require('mysql');

var connection=mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"Happy",
    database:"trailways",
    port:3306
});

connection.connect((err)=>{
    if(!err){
        console.log("connected successfully!!");
    }
    else{
        console.log(" error in connection => ",err);
    }
});

module.exports=connection;