const express=require("express");
const app=express();


const port=8080;
app.listen(port,(req,res)=>
{
    console.log("Server is listening to the client requests");
});
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.get("/request",(req,res)=>
{
    let{user,pass}=req.query;
    console.log(req.query);
    res.send(`Welcome to the account @ ${user}`);
});

app.post("/request",(req,res)=>
{
    let{user,pass}=req.body;
    console.log(req.body);
    res.send(`Welcome to the account @${user}`);
});