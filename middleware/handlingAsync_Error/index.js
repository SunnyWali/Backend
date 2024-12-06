const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
const path = require("path");
const methodOverride = require("method-override");
const ExpressError=require("./ExpressError.js");
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/fakeWhatsapp");
}

main().then(() => { console.log("Connection is established successfully"); }).catch((err) => { console.log(err); });


//index route
app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    res.render("index", { chats });
});

//New Route
app.get("/chats/new", (req, res) => {
    throw new ExpressError(404,"Page Not Found !!!");
    res.render("new");
});

//Create Route
app.post("/chats", (req, res) => {
    let { from, msg, to } = req.body;
    let chat = new Chat({
        from: from,
        msg: msg,
        to: to,
        created_at: new Date(),
    });
    chat.save().then(() => console.log("data strored successfully")).catch((err) => console.log(err));
    res.redirect("/chats");
});

//New -Show Route
app.get("/chats/:id",async(req,res,next)=>{
let{id}=req.params;
let chat=await Chat.findById(id);
if(!chat)
{
    next(new ExpressError(500,"Chat Not Found!!!")); 
}
res.render("update",{chat});
})
//edit Route
app.get("/chats/:id/edit", async (req, res) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("update", { chat });
});

//update route
app.put("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let { msg: newMsg } = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(id, { msg: newMsg }, { runValidators: true, new: true });
    console.log(updatedChat);
    res.redirect("/chats");
});

//destroy route
app.delete("/chats/:id",async(req,res)=>
{
    let{id}=req.params;
    let deletedChat=await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
});

//Error Handling Middleware
app.use((err,req,res,next)=>{
    let{status=500,message="Chat not found"}=err;
    res.status(status).send(message);
})

app.listen(8080, () => {
    console.log("Server is listening to the port no 8080");
});

