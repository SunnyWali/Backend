const express=require("express");
const app=express();
const path=require("path");
const port=8080;

app.listen(port,()=>
{
    console.log("Server is listening to the client request");
    console.log("Hello world");
});
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.get("/ig/:username",(req,res)=>
{
    let{username}=req.params;
    const name=['sunny','ramesh','krishna','devanand','prakash'];
    res.render("instagram",{username,name});
});

