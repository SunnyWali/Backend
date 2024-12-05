const express=require("express");
const app=express();

app.listen(8080,()=>{
    console.log("Server is listening in port 8080");
});

// creating a midddlware for authenticating the api token
const checkToken=("/api",(req,res,next)=>{
    let{token}=req.query;
    if(token==="giveaccess"){
        next();
    }
    res.send("Error");
});
app.get("/api",checkToken,(req,res)=>{
    res.send("Data");
});
