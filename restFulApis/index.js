const express=require("express");
const app=express();
const port=8080;
const path=require("path");
// const { ppid } = require("process");
const { v4: uuidv4 } = require('uuid');
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
const methodOverride=require("method-override");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
app.use(methodOverride("_method"));
let posts=[
    {
        id:uuidv4(),
        username:"Sunny Wali",
        content:"I am from Jammu and Kashmir and i belong to kashmiri pandit group",
    },
    {
        id:uuidv4(),
        username:"Krishna Yadav",
        content:"I am from bihar and i am a full stack developer",
    },
    {
        id:uuidv4(),
        username:"Ramesh Pellivella",
        content:"I am from hyderabad and i am a backend developer",
    },
];

app.get("/posts",(req,res)=>
{
    // res.send("Server is working on 8080 port to display the posts");
    console.log("Server is working on 8080 port to display the posts");
    res.render('index',{posts});
});

app.get("/posts/new",(req,res)=>
{
    // res.send("Server is working on the get requests to display the form");
    console.log("Server is working on the get requests to display the form");
    res.render("new");
});


app.post("/posts",(req,res)=>
{
    let id=uuidv4();
    let{username,content}=req.body;
    // res.send("Server is working on post request");
    console.log("Server is working on post request");
    posts.push({id,username,content});
    res.redirect("/posts");
});

app.get("/posts/:id",(req,res)=>
{
    let{id}=req.params;
    let post=posts.find((p)=>id===p.id);
    res.render("show",{post});
});

app.get("/posts/:id/edit",(req,res)=>
{
    let{id}=req.params;
    let post=posts.find((p)=>id===p.id);
    res.render("update",{post});
});

app.patch("/posts/:id",(req,res)=>
{
    let{id}=req.params;
    let post=posts.find((p)=>id===p.id);
    let newContent=req.body.content;
    post.content=newContent;
    res.redirect("/posts");
});

app.delete("/posts/:id",(req,res)=>
{
    let{id}=req.params;
    console.log(id);
    posts=posts.filter((p)=>id != p.id);
    res.redirect("/posts");
});

app.listen(port,()=>
    {
        console.log("Server is listening to the port no: 8080");
    });