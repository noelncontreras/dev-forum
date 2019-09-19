require("dotenv").config();
const express = require("express");
const app = express();
const massive = require("massive");
const session = require("express-session");
const AC = require("./controllers/authController.js");
const PC = require("./controllers/posts.Controller.js");
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

//put this above your endpoints
app.use(express.json());

//this is to set up session
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24* 7
    }
}));

//how to connect massive to database to backend
massive(CONNECTION_STRING).then(db => {
    app.set("db", db);
    console.log("db connected")
});

//auth endpoints
app.get("/auth/user", AC.getUser);
app.post("/auth/register", AC.registerUser);
app.post("/auth/login", AC.loginUser);
app.post("/auth/logout", AC.logoutUser);


//post endpoints
app.get("/api/topics", PC.topics);
app.get("/api/posts/:topic", PC.posts);
app.post("/api/posts/:topic", PC.addPost);
app.delete("/api/posts/:id", PC.deletePost);




app.listen(SERVER_PORT, () => console.log(`Server listening on ${SERVER_PORT}`));