const express=require("express");
const app=express();
const port=8080;
const path=require("path");
app.listen(port,()=>
{
    console.log("Server is listening to the port no: 8080");
});

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
let posts=[
    {
        username:"Sunny Wali",
        content:"I am from Jammu and Kashmir and i belong to kashmiri pandit group",
    },
    {
        username:"Krishna Yadav",
        content:"I am from bihar and i am a full stack developer",
    },
    {
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
    let{username,content}=req.body;
    // res.send("Server is working on post request");
    console.log("Server is working on post request");
    posts.push({username,content});
    res.redirect("/posts");
})
