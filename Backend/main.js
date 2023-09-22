// importing base libraries
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const app = express();


// configuring the path for cofig.env for string 
dotenv.config({path:'./config.env'}) ;
require('./db/conn');
app.use(express.json());

// importing cookies library
const cookieParser = require("cookie-parser");
app.use(cookieParser()) ;

// for creation of authentication 
const jwt = require("jsonwebtoken");

// creation of session keys 
const session = require('express-session');

//Set up of Session Middleware
app.use(session({
    secret : process.env.SESSIONSECRET ,
    resave : false,
    saveUninitialized : true ,
    cookie : {secure : false}
})) 


app.listen(PORT,(err)=>{
    if(err){
        console.log(err);
    }else {
        console.log(`Server is running at port no ${PORT}`);
    }
})