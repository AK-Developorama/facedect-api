const express = require("express");
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");
const knex = require("knex");
const register = require("./controllers/register");
const signin = require("./controllers/signin");
const profile = require("./controllers/profile");
const image = require("./controllers/image");

/* const PORT = process.env.PORT;
 */
const db = knex({
  client: "pg",
  connection: {
    host: process.env.DATABASE_URL,
   ssl: true,

  },
});

const app = express();

//FIXED CORRS ERROR WITH npm install cors -> used here
app.use(cors());
//REPLACED BODYPARSER WITH THIS:
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//TEST
app.get("/", (req, res) => {
  res.send('it;s working!!');
});

//SIGN IN AN EXISTING USER
app.post("/signin", (req, res) => {
  signin.handleSignin(req, res, db, bcrypt);
});

//REGISTERING A NEW USER
app.post("/register", (req, res) => {
  register.handleRegister(req, res, db, bcrypt);
});

//FOR FUTURE APP EXPANSION
app.get("/profile/:id", (req, res) => {
  profile.handleProfileGet(req, res, db);
});

//COUNTING THE NR OF TIMES YOU USED THE IMAGE DETECTOR
app.put("/image", (req, res) => {
  image.handleImage(req, res, db);
});

app.post("/imageurl", (req, res) => {
  image.handleApiCall(req, res);
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`app is running on port ${process.env.PORT}`);
});
