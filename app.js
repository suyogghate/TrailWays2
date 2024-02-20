const express=require('express');
const cors=require('cors');
const routes=require('./routes/routes');
const bodyparser=require('body-parser');

const app=express();
app.use(cors());
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use('/',routes);

app.listen(9000,()=>{
    console.log("Server Listening on port 9000!!");
})

module.exports=app;