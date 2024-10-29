const express=require("express");
const app=express();

let port=3000;
app.listen(port,(req,res)=>
{
    console.log("Server is listening to the request");
});

app.get("/search",(req,res)=>
{
    let{q}=req.query;
    if(!q)
    {x
        res.send("there is no response");
    }
    else{
    res.send(`The search result is ${q}`);
    }
});