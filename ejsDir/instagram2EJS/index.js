const express=require("express");
const app=express();
const path=require("path");
const port=8080;

app.listen(port,()=>
{
    console.log("Server is listening to the client request");
});

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"public/css")));
app.use(express.static(path.join(__dirname,"public/js")));

app.get("/:username",(req,res)=>
{
    let{username}=req.params;
    const data=require("./data.json");
    const userData=data[username];
    if(userData)
    {
    res.render("instagram",{userData});
    }
    else
    {
        res.render("error");
    }
})