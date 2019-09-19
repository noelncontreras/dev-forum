require("dotenv").config();
const express = require("express");
const app = express();
const AC = require("./controllers/authController.js");
const PC = require("./controllers/posts.Controller.js");
const {SERVER_PORT} = process.env;


//auth endpoints
app.get("/api/user", AC.getUser);
app.post("/api/register", AC.registerUser);
app.post("/api/login", AC.loginUser);
app.post("/api/logout", AC.logoutUser);


//post endpoints
app.get("/api/forums", PC.getForums);
app.get("/api/posts/:topic", PC.topics);
app.post("/api/posts/:topic", PC.addPost);
app.delete("/api/posts/:id", PC.deletePost);




app.listen(SERVER_PORT, () => console.log(`Server listening on ${SERVER_PORT}`));