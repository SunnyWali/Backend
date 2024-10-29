const express=require("express");

const app=express();

let port=3000;

app.listen(port,()=>
{
    console.log("Server is listening the request");
});
app.get("/",(req,res)=>
{
    res.send("hello world");
});

app.get("/apple",(req,res)=>
{
    res.send("this is the apple path");
});

app.get("/banana",(req,res)=>{
    res.send("this is the banana path");
});

app.get("/orange",(req,res)=>
{
    res.send("this is the orange path");
});

app.post("/",(req,res)=>
{
    res.send("this is the root path of post");
});