-- create database trailways;
-- USE trailways;
-- CREATE table Trek(
-- Tre_id int primary key,
-- Tre_name varchar(20),
-- Tre_email varchar(20),
-- Tre_mobile int,
-- Tre_adhar varchar(12),
-- Tre_pass varchar(20)
-- );

-- Create table Guides(
-- G_Id int primary key,

-- )
-- use trailways;
-- SELECT * FROM trekkers;
-- Alter table trekkers
-- add Tre_Dob date;
-- SELECT * FROM trekkers;
-- ALTER table trekkers
-- add Tre_img varchar(10);
-- SELECT * FROM trekkers;
----------------------------------------
-- CREATE table Guide(
-- 	G_Id int primary key,
--     G_Email varchar(30),
--     G_Mob int,
--     G_Adhaar char(12),
--     G_Dob date,
--     G_Totalrating int,
--     G_Avail boolean,
--     G_img varchar(20),
--     G_Lid int,
--     G_Eid int,
--     CONSTRAINT foreign key (G_Lid) REFERENCES Guide_License(GL_Id),
--     CONSTRAINT foreign key (G_Eid) REFERENCES Guide_Experience(E_Id)
-- );
-- ---------------------------------------
-- CREATE table Guide_Experience(
-- 	E_Id int primary key,
--     E_Beforeexp int,
--     E_Afterexp int
-- );
-- --------------------------------------------
-- CREATE table License_Level(
-- 	L_Level int,
--     L_Color varchar(10)
-- );
-- -------------------------------------------
-- CREATE table Booking(
-- 	B_Bid int primary key,
--     B_Bdate date,
--     B_Btotalamount decimal,
--     B_Paystatus varchar(30),
--     B_Paymethod varchar(15)
-- );
-- ------------------------------------------
-- CREATE table Image(
-- 	I_Imgid int primary key,
--     I_Img1 varchar(15),
--     I_Img2 varchar(15),
--     I_Img3 varchar(15),
--     I_Img4 varchar(15)
-- );
-- ----------------------------------------
-- CREATE table Guide_License(
-- 	GL_Id int primary key,
--     GL_Lno varchar(20),
--     GL_valid date,
--     GL_Level int,
--     GL_img varchar(20),
--     CONSTRAINT foreign key (GL_Level) REFERENCES License_Level(L_Level)
-- );
-- ---------------------------------------------
-- CREATE table Trek_Details(
-- 	Td_Id int primary key,
--     Td_Trekname varchar(25),
--     Td_Loc varchar(15),
--     Td_Difficulty varchar(10),
--     Td_Duration varchar(5),
--     Td_Cost decimal,
--     Td_Desc text,
--     Tdi_Imgid int,
--     CONSTRAINT foreign key (Tdi_Imgid) REFERENCES Image(I_Imgid)
-- );
-- -------------------------------------------
-- Unable to create the below two tables(doubt)
-- CREATE table Slot(
-- 	S_Slotid int primary key,
--     S_Slotdate date,
--     S_Availslots int,
--     S_GuideAvail int,
--     S_tripid int,
--     CONSTRAINT foreign key (S_tripid) REFERENCES --- 
-- );
-- ----------------------------------------------
-- CREATE table Activity(
-- 	A_Id int primary key,
--     A_Date date,
--     A_Totalpeople int,
--     A_Guiderated int,
--     A_Trekkerid int,
--     A_Guideid int,
--     A_Bookingid int,
--     A_Slotid int primary key
-- );

-- alter table trailways;
drop table trailways;
