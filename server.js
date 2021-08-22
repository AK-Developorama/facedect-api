const express = require("express");
const app = express();
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");
const knex = require("knex");
//controllers imported:
const register = require("./controllers/register");
const signin = require("./controllers/signin");
const profile = require("./controllers/profile");
const image = require("./controllers/image");

//DATABASE LINKED:
const db = knex({
  client: "pg",
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  },
});


//FIXED CORRS ERROR WITH npm install cors -> used here
app.use(express.json());
app.use(cors());
//REPLACED BODYPARSER WITH THIS:
app.use(express.urlencoded({ extended: false }));


//TEST
app.get("/", (req, res) => {
  res.send("it is working!!");
});

//SIGN IN AN EXISTING USER
/* app.post("/signin", (req, res) => {
  signin.handleSignin(req, res, db, bcrypt);
});
 */
app.post("/signin", signin.handleSignin(db, bcrypt));

//REGISTERING A NEW USER
app.post("/register", (req, res) => {
  register.handleRegister(req, res, db, bcrypt)
});

//FOR FUTURE APP EXPANSION
app.get("/profile/:id", (req, res) => {
  profile.handleProfileGet(req, res, db)})

//COUNTING THE NR OF TIMES YOU USED THE IMAGE DETECTOR
app.put("/image", (req, res) => {
  image.handleImage(req, res, db)});

app.post("/imageurl", (req, res) => {
  image.handleApiCall(req, res)});

//SET LOCAL PORT:
app.listen(process.env.PORT || 3000, () => {
  console.log(`app is running on port ${process.env.PORT}`)});
