const express=require("express");
const app=express();

let port=3000;
app.listen(port,()=>
{
    console.log("Server is listening to the request");
});

app.get("/:username/:id",(req,res)=>
{
    let{username,id}=req.params;
    res.send(`This is the page of @ ${username}`);
});