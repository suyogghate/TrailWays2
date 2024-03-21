const express=require('express');
const router=express.Router();
router.use(express.json());
const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
var connection=require("../dbconnect/dbconnect");
const fs = require('fs/promises');
const { promisify } = require('util');
const fs1 = require('fs').promises;
const storage1 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../TrailWays/frontend/src/images/trekker/'); // Define the destination folder for storing images
  },
  filename: function (req, file, cb) {
    const trekker_uname = req.body.Tre_Uname || ''; // Ensure a default value if undefined
    cb(null, trekker_uname + path.extname(file.originalname)); // Use Tre_Uname as the filename
  },
});
const storage2 = multer.diskStorage({
    destination: function (req, file, cb) {
      // Choose destination folder based on file field name
      if (file.fieldname === 'G_Image') {
        cb(null, '../TrailWays/frontend/src/images/guide/');
      } else if (file.fieldname === 'GL_Image') {
        cb(null, '../TrailWays/frontend/src/images/guide/license/');
      } else {
        cb(new Error('Invalid file field name'));
      }
    },
    filename: function (req, file, cb) {
      // Generate unique filename for each file
      const guide_uname = req.body.G_Uname || '';
      const ext = path.extname(file.originalname);
      const filename = `${guide_uname}`+ ext;
      cb(null, filename);
    },
  });

const upload1 = multer({ storage: storage1 });
const upload2 = multer({ storage: storage2 });
router.post("/signup/trekker", upload1.single('Tre_Image'), async (req, res) => {
  try {
    const result = [
      req.body.Tre_Uname,
      req.body.Tre_Name,
      req.body.Tre_Email,
      req.body.Tre_Mobile,
      req.body.Tre_Adhaar,
      req.body.Tre_Pass,
      req.body.Tre_Dob
    ];

    const sql = "INSERT INTO trekker (`Tre_Uname`, `Tre_Name`, `Tre_Email`, `Tre_Mobile`, `Tre_Adhaar`, `Tre_Pass`, `Tre_Dob`) VALUES (?)";

    // Inserting trekker data into the database
    const dbInsertResult = await promisify(connection.query).bind(connection)(sql, [result]);

    // Make sure that req.body.Tre_Uname exists before using it
    const trekker_uname = req.body.Tre_Uname || '';

    // Save the file path in the JSON file
    const filePath = req.file.path;
    const trekkerFilePath = path.join(__dirname, '../frontend/src/images/trekker/trekker.json');

    // Read the existing JSON file or create a new one
    let trekkerData = {};
    try {
      const data = await fs1.readFile(trekkerFilePath, 'utf-8');
      trekkerData = JSON.parse(data);
      // Add the new file path to the existing data
      const imgdata = { trekker_uname: trekker_uname, imagePaths: filePath };
      trekkerData.push(imgdata);

    } catch (error) {
      // File does not exist, create a new one
      return res.status(500).json({ error: 'Error in the file path' }); // Return early to avoid further execution
    }
    // Write the updated data back to the JSON file
    await fs1.writeFile(trekkerFilePath, JSON.stringify(trekkerData, null, 2));

    // Send the response once after both file and database operations are completed
    res.json({ filePath, dbInsertResult });
  } catch (error) {
    console.error('Error handling file upload:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
router.post("/signup/guide", upload2.fields([{ name: 'G_Image' }, { name: 'GL_Image' }]), async (req, res) => {
    try {
      const result = [
        req.body.G_Uname,
        req.body.G_Name,
        req.body.G_Email,
        req.body.G_Mobile,
        req.body.G_Adhaar,
        req.body.G_Pass,
        req.body.G_Dob,
        0, // Assuming default value for G_Totalrating
        1, // Assuming default value for G_Avail
        req.body.G_Lno,
        0, // Assuming default value for G_Exp
      ];
  
      const result1 = [req.body.G_Lno, req.body.GL_valid, req.body.GL_Color];
  
      const sql = "INSERT INTO Guide (`G_Uname`,`G_Name`,`G_Email`,`G_Mob`,`G_Adhaar`,`G_Pass`,`G_Dob`,`G_Totalrating`,`G_Avail`,`G_GLno`,`G_Exp`) VALUES (?)";
      const sql1 = "INSERT INTO Guide_License (`GL_Lno`,`GL_Valid`,`GL_Color`) VALUES (?)";
  
      // Inserting guide data into the database
      connection.query(sql1, [result1], (err, data) => {
        if (err) {
          console.log("Error in finding data for Guide License!! " + err);
          return res.status(500).json(err);
        } else {
          connection.query(sql, [result], async (err, data) => {
            if (err) {
              console.log("Error in finding data for Guide!! " + err);
              return res.status(500).json(err);
            } else {
              // Save the file paths in the JSON file
              const filePath = req.files['G_Image'][0].path;
              const licenseFilePath = req.files['GL_Image'][0].path;
              const guideFilePath = path.join(__dirname, '../frontend/src/images/guide/guide.json');
  
              // Read the existing JSON file or create a new one
              let guideData = {};
              try {
                const guideDataStr = await fs1.readFile(guideFilePath, 'utf-8');
                guideData = JSON.parse(guideDataStr);
                // Add the new file paths to the existing data
                const imgdata = { guide_uname: req.body.G_Uname, imagespaths1: filePath, imagespaths2: licenseFilePath };
                guideData.push(imgdata);
              } catch (error) {
                // File does not exist, create a new one
                return res.status(500).json({ error: 'Error in the file path' }); // Return early to avoid further execution
              }
  
              // Write the updated data back to the JSON file
              await fs1.writeFile(guideFilePath, JSON.stringify(guideData, null, 2));
  
              // Send the response once after both file and database operations are completed
              res.json({ filePath, data });
            }
          });
        }
      });
    } catch (error) {
      console.error('Error handling file upload:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
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
        
    const result = [
        req.body.S_RandomSlot,
        req.body.S_Slotdate,
        req.body.S_Tdidname
    ];

    const sql = "INSERT INTO slot (`S_RandomSlot`, `S_Slotdate`, `S_Tdidname`) VALUES (?)";

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
  router.get('/slots/:id',(req,res)=>{
    connection.query("select S_RandomSlot, S_Slotdate, S_Tdidname from slot where S_TdIdname = ? and S_Slotdate > CURDATE()",req.params.id,(err,data)=>{
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
router.get('/guidelicense',(req,res)=>{
    connection.query('CALL ResetGuideAvailability()', (error, results) => {
        if (error) {
          console.error('Error calling stored procedure:', error);
        } else {
            connection.query("select `G_Uname`,`G_Name`,`GL_Color` from Guide G left join Guide_license Gl on G.G_Glno=Gl.Gl_lno where G.G_avail=1 and Gl.GL_Valid >= CURDATE() order by Gl.GL_Color",(err,data)=>{
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
        }
      });
});
router.get('/trekdetails/:id',(req,res)=>{
  connection.query("select * from trek_details where Td_Idname = ?",req.params.id,(err,data)=>{
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
router.post('/bookings', (req, res) => {
    const b = new Date();
    const B_Bdate = b.toISOString().slice(0, 19).replace("T", " ");
    const B_Randombid = uuidv4();

    const result = [
        new Date(req.body.A_Slotdate).toISOString().slice(0, 19).replace("T", " "),
        req.body.A_Totalpeople,
        0,
        req.body.A_TrekIdname,
        req.body.A_Trekkeruname,
        req.body.A_Guide,
        B_Randombid
    ];

    const book = [B_Randombid, B_Bdate, req.body.B_TotalAmount, "online"];

    // Start a transaction
    connection.beginTransaction(function (err) {
        if (err) {
            throw err;
        }

        // Insert into booking table
        connection.query("INSERT INTO booking (`B_Randombid`, `B_Bdate`, `B_TotalAmount`, `B_paymethod`) VALUES (?)", [book], (err, data) => {
            if (err) {
                // Rollback on error
                connection.rollback(function () {
                    console.log("Error in inserting into booking table!! " + err);
                    res.status(500).json(err);
                });
            } else {
                // Insert into activity_pastdetails table
                connection.query("INSERT INTO activity_pastdetails (`A_Date`, `A_Totalpeople`, `A_Guiderated`, `A_TrekIdname`, `A_Trekkeruname`, `A_Guideuname`, `A_Bookingid`) VALUES (?)", [result], (err, data) => {
                    if (err) {
                        // Rollback on error
                        connection.rollback(function () {
                            console.log("Error in inserting into activity_pastdetails table!! " + err);
                            res.status(500).json(err);
                        });
                    } else {
                        // Commit the transaction
                        connection.commit(function (err) {
                            if (err) {
                                // Rollback on error
                                connection.rollback(function () {
                                    console.log("Error in committing transaction!! " + err);
                                    res.status(500).json(err);
                                });
                            } else {
                                // Release the connection
                                console.log("Transaction completed successfully!!");
                                res.json(data);
                            }
                        });
                    }
                });
            }
        });
    });
});

router.get('/trekkerprevious', (req, res) => {
    connection.query("SELECT A.A_Randomid, A.A_Date, A.A_Totalpeople, T.Td_Trekname, G.G_Name, B.B_TotalAmount, A.A_Trekkeruname FROM activity_pastdetails A, guide G, Trek_details T, Booking B WHERE A.A_Guideuname=G.G_Uname AND A.A_TrekIdname=T.Td_Idname AND B.B_Randombid=A.A_Bookingid AND A.A_Date < CURDATE()",(err, data) => {
        if (err) {
            console.log("Error in finding data:", err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            console.log("Executed Successfully:", data);
            res.json(data);
        }
    });
});

  router.get('/trekkerupcoming',(req,res)=>{
    connection.query("select A.A_Randomid,A.A_Date,A.A_Totalpeople,T.Td_Trekname,G.G_Name,B.B_TotalAmount,A.A_Trekkeruname from activity_pastdetails A,guide G,Trek_details T,Booking B where A.A_Guideuname=G.G_Uname and A.A_TrekIdname=T.Td_Idname and B.B_Randombid=A.A_Bookingid and A.A_Date > curdate()",(err,data)=>{
        if(err){
            console.log(" error in finding data!! "+err);
            res.status(500).json({ error: 'Internal Server Error' });
        }
        else{
            console.log(data);
            console.log("Executed Succesfully!!");
            res.json(data);
        }
    });
  });

router.get('/guideprevious', (req, res) => {
    connection.query("select A.A_Randomid,A.A_Date,A.A_Totalpeople,T.Td_Trekname,Tr.Tre_name,B.B_TotalAmount,A.A_Guideuname from activity_pastdetails A,Trekker Tr,Trek_details T,Booking B where A.A_Trekkeruname=Tr.Tre_Uname and A.A_TrekIdname=T.Td_Idname and B.B_Randombid=A.A_Bookingid and A.A_Date < curdate()", (err, data) => {
        if (err) {
            console.log("Error in finding data:", err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            console.log("Executed Successfully:", data);
            res.json(data);
        }
    });
});

  router.get('/guideupcoming',(req,res)=>{
    connection.query("select A.A_Randomid,A.A_Date,A.A_Totalpeople,T.Td_Trekname,Tr.Tre_name,B.B_TotalAmount,A.A_Guideuname from activity_pastdetails A,Trekker Tr,Trek_details T,Booking B where A.A_Trekkeruname=Tr.Tre_Uname and A.A_TrekIdname=T.Td_Idname and B.B_Randombid=A.A_Bookingid and A.A_Date > curdate()",(err,data)=>{
        if(err){
            console.log(" error in finding data!! "+err);
            res.status(500).json({ error: 'Internal Server Error' });
        }
        else{
            console.log(data);
            console.log("Executed Succesfully!!");
            res.json(data);
        }
    });
  });

 
  

module.exports=router;