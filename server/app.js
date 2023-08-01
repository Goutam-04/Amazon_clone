require("dotenv").config();


const express = require("express");
const app=express();
const mongoose = require("mongoose");

require("./db/conn")
const Products=require("./models/productsSchema")

const DefaultData = require("./defaultdata");



const port = 8005;


app.listen(port,function(){
    console.log(`my server is running on port number ${port}`);
})

DefaultData();