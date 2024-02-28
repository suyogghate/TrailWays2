const express=require('express');
const cors=require('cors');
const routes=require('./routes/routes');
var connection=require("./dbconnect/dbconnect");
const { promisify } = require('util');
const cron = require('node-cron');
const bodyparser=require('body-parser');
const app=express();
app.use(cors());
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use('/',routes);

const query = promisify(connection.query).bind(connection);

cron.schedule('0 0 * * *', async () => {
    try {
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() - 1); // One day before today
  
      const formattedDate = currentDate.toISOString().split('T')[0];
  
      // Execute the SQL query to delete slots older than the formatted date
      const deleteQuery = `DELETE FROM Slot WHERE S_Slotdate < '${formattedDate}'`;
      await query(deleteQuery);
  
      console.log('Deleted previous slots.');
    } catch (error) {
      console.error('Error deleting slots:', error.message);
    }
  });
  

app.listen(9000,()=>{
    console.log("Server Listening on port 9000!!");
})

module.exports=app;