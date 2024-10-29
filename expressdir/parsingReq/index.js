const express=require("express");

const app=express();

let port=3000;
app.listen(port,()=>
{
    console.log("server is listening the request");
})
app.use((req,res)=>
{
    let code="<h1>Fruits</h1><ul><li>apples</li><li>orange</li><li>banana</li></ul>";
    res.send(code);
})