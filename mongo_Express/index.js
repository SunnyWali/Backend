const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Chat=require("./models/chat.js");
const path=require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

main().then(()=>{console.log("Connection is established successfully");}).catch((err)=>{console.log(err);});
app.listen(8080,()=>{
    console.log("Server is listening to the port no 8080");
});

//index route
app.get("/chats", async(req,res)=>{
    let chats=await Chat.find();
    res.render("index",{chats});
});

//New Route
app.get("/chats/new",(req,res)=>
{
    res.render("new");
});

//Create Route
app.post("/chats",(req,res)=>
{
    let{from,msg,to}=req.body;
    let chat=new Chat({
        from:from,
        msg:msg,
        to:to,
        created_at:new Date(),
    });
    chat.save().then(()=>console.log("data strored successfully")).catch((err)=>console.log(err));
    res.redirect("/chats");
});


