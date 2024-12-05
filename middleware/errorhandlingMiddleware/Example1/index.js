const express=require("express");
const app=express();

app.listen(8080,(req,res)=>{
    console.log("Server is listening to the port no 8080");
});

app.get("/err",(req,res)=>{
    abcd=abcd;
});

app.use((err,req,res,next)=>{
    console.log("-----Error1-----");
    next(err);
});

app.use((err,req,res,next)=>{
    console.log("-----Error2-----");
    next(err); //by writing this code the error is handled by the express default error-handling middleware
});

app.get("/err",(req,res)=>{
    res.send("Hello");
});
