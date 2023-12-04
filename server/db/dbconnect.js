//the file for database connection
const mysql = require("mysql");
let mysqlconnection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root1234',
    database:'trailways',
    port:3306
});

mysqlconnection.connect((err) => {
    if(!err){
        console.log("connected successfully!!!");
    }
    else{
        console.log("error in connection",err);
    }
});

module.exports=mysqlconnection;