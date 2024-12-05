const express=require("express");
const app=express();
const expressError=require("./customErrr.js");
app.listen(8080,()=>{
    console.log("Server is listening to the port no 8080");
});

const token=((req,res,next)=>{
    let{token}=req.query;
    if(token==="accessgiven"){
        next();
    }
    throw new expressError(404,"Access denied");
});


app.get("/api",token,(req,res)=>{
    res.send("data");
});

app.get("/admin",(req,res)=>{
    throw new expressError(505,"Access to admin is forbidden"); 
})
app.use((err,req,res,next)=>{
    console.log("-----Error-----");
    let{status,message}=err;
    res.status(status).send(message);
});


