const express=require('express');
const router=express.Router();
router.use(express.json());
const multer = require('multer');
const path = require('path');
var connection=require("../dbconnect/dbconnect");
const fs = require('fs/promises');
router.post("/signup/trekker",(req,res)=>{
    const result = [req.body.Tre_Uname,
        req.body.Tre_Name,
        req.body.Tre_Email,
        req.body.Tre_Mobile,
        req.body.Tre_Adhaar,
        req.body.Tre_Pass,
        req.body.Tre_Dob] ;
//    Tre_Image: null,
    const sql="insert into trekker(`Tre_Uname`,`Tre_Name`,`Tre_Email`,`Tre_Mobile`,`Tre_Adhaar`,`Tre_Pass`,`Tre_Dob`) values(?)"
        connection.query(sql,[result],(err,data)=>{
            if(err){
                console.log(" error in finding data!! "+err);
                res.json(err);
            }
            else{
                console.log(data);
                console.log("Executed Succesfully!!");
                res.json(data);
            }
        });
});
router.post("/signup/guide",(req,res)=>{
    const result = [req.body.G_Uname,
        req.body.G_Name,
        req.body.G_Email,
        req.body.G_Mobile,
        req.body.G_Adhaar,
        req.body.G_Pass,
        req.body.G_Dob,
        0,
        1,
        req.body.G_Lno,
        0];
        const result1=[req.body.G_Lno,req.body.GL_valid,req.body.GL_Color];
//    Tre_Image: null,
    const sql="insert into Guide(`G_Uname`,`G_Name`,`G_Email`,`G_Mob`,`G_Adhaar`,`G_Pass`,`G_Dob`,`G_Totalrating`,`G_Avail`,`G_GLno`,`G_Exp`) values(?)"
    const sql1="INSERT INTO Guide_License (`GL_Lno`,`GL_Valid`,`GL_Color`) VALUES (?)";
    connection.query(sql1,[result1],(err,data)=>{
            if(err){
                console.log(" error in finding data!! "+err);
                res.json(err);
            }
            else{
                connection.query(sql,[result],(err,data)=>{
                    if(err){
                        console.log(" error in finding data!! "+err);
                        res.json(err);
                    }
                    else{
                        console.log("Executed Succesfully!!");
                        res.json(data);
                    }
                });
            }
        });
});

router.get('/guide',(req,res)=>{
    connection.query("select * from guide",(err,data)=>{
        if(err){
            console.log(" error in finding data!! "+err);
            res.json(err);
        }
        else{
            console.log(data);
            console.log("Executed Succesfully!!");
            res.json(data);
        }
    });
});

router.get('/admin',(req,res)=>{
    connection.query("select * from admin",(err,data)=>{
        if(err){
            console.log(" error in finding data!! "+err);
            res.json(err);
        }
        else{
            console.log(data);
            console.log("Executed Succesfully!!");
            res.json(data);
        }
    });
});

router.get('/trekker',(req,res)=>{
    connection.query("select * from trekker",(err,data)=>{
        if(err){
            console.log(" error in finding data!! "+err);
            res.json(err);
        }
        else{
            console.log(data);
            console.log("Executed Succesfully!!");
            res.json(data);
        }
    });
});

router.get('/trekkername',(req,res)=>{
    connection.query("select Tre_Uname from trekker",(err,data)=>{
        if(err){
            console.log(" error in finding data!! "+err);
            res.json(err);
        }
        else{
            console.log(data);
            console.log("Executed Succesfully!!");
            res.json(data);
        }
    });
});
router.get('/trekidname',(req,res)=>{
    connection.query("select Td_Idname,Td_Trekname from trek_details",(err,data)=>{
        if(err){
            console.log(" error in finding data!! "+err);
            res.json(err);
        }
        else{
            console.log(data);
            console.log("Executed Succesfully!!");
            res.json(data);
        }
    });
});
router.post("/slotinsert", (req, res) => {
    const result1 = [1];
  
    connection.query("SELECT COUNT(*) as guideCount FROM Guide WHERE `G_Avail` = ?", [result1], (err, data1) => {
      if (err) {
        console.log("Error in finding data!! " + err);
        res.json(err);
      } else {
        const result = [
          req.body.S_RandomSlot,
          req.body.S_Slotdate,
          data1[0].guideCount, // Replace blank space with guide count
          req.body.S_Tdidname
        ];
  
        const sql = "INSERT INTO slot (`S_RandomSlot`, `S_Slotdate`, `S_GuideAvail`, `S_Tdidname`) VALUES (?)";
  
        connection.query(sql, [result], (err, data) => {
          if (err) {
            console.log("Error in finding data!! " + err);
            if (err.code === 'ER_DUP_ENTRY') {
              res.status(500).json({ errno: 1062, message: 'Duplicate entry found' });
            } else {
              res.status(500).json(err);
            }
          } else {
            console.log("Executed Successfully!!");
            res.json(data);
          }
        });
      }
    });
});

router.post('/addTrek', async (req, res) => {
    try {
      // Read existing trek data
      const filePath = path.join(__dirname, '../../TrailWays/frontend/src/images/images.json');
      const data = await fs.readFile(filePath, 'utf-8');
      const jsonData = JSON.parse(data);
  
      // Add new trek data
      const newTrek = {
        id: parseInt(req.body.Td_Idname),
        imageUrl: req.body.imageUrl,
        title: req.body.Td_Trekname,
        description: req.body.description,
        overview: req.body.overview,
      };
      const result=[req.body.Td_Idname, req.body.Td_Trekname, req.body.Td_Loc, req.body.Td_Difficulty, req.body.Td_Duration, parseFloat(req.body.Td_PerPrice)];
      const sql = "insert into trek_details(`Td_Idname`,`Td_Trekname`,`Td_Loc`,`Td_Difficulty`,`Td_Duration`,`Td_PerPrice`) values(?)";
      // Check for duplicate ID before adding
      const existingTrek = jsonData.find((trek) => trek.id === newTrek.id);
      if (existingTrek) {
        return res.status(400).json({ error: 'Duplicate Trek ID found!' });
      }
  
      jsonData.push(newTrek);
  
      // Write back to the JSON file
      await fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), 'utf-8');
      connection.query(sql, [result], (err, data) => {
        if (err) {
          console.log("Error in finding data!! " + err);
          if (err.code === 'ER_DUP_ENTRY') {
            res.status(500).json({ errno: 1062, message: 'Duplicate entry found' });
          } else {
            res.status(500).json(err);
          }
        } else {
          console.log("Executed Successfully!!");
          res.json(data);
        }
      });
      
    } catch (error) {
      console.error('Error adding trek data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

module.exports=router;