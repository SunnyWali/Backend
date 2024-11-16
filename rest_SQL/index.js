const express=require("express");
const app=express();
const mysql=require("mysql2");
const { faker } = require('@faker-js/faker');
const path=require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'hello',
    password:'Sunnylee@123'
});

let q="Select count(*) from users";
app.get("/",(req,res)=>
{
    try{
        connection.query(q,(err,result)=>
        {
            if(err) throw err;
            console.log(result[0]['count(*)']);
        });
    }
    catch(err)
    {
        console.log(err);
    }
});
app.listen('8080',(req,res)=>
{
    console.log("Server is listening to port 8080");
});