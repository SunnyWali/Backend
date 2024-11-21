const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Chat=require("./models/chat.js");
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

main().then(()=>{console.log("Connection is established successfully");}).catch((err)=>{console.log(err);});
app.listen(8080,()=>{
    console.log("Server is listening to the port no 8080");
});

let chat1=new Chat({
    from:"Ramesh",
    to:'Krishna',
    msg:'Hello World',
    created_at:new Date()
});

chat1.save().then((result)=>{console.log(result);}).catch((err)=>{console.log(err)});


