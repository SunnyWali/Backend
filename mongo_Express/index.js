const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Chat=require("./models/chat.js");
const path=require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
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


