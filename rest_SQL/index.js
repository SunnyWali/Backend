const express = require("express");
const app = express();
const mysql = require("mysql2");
const { faker } = require('@faker-js/faker');
const path = require("path");
const methodOverride=require("method-override");
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'hello',
    password: 'Sunnylee@123'
});

let q = "Select count(*) from users";
app.get("/", (req, res) => {
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let count = result[0]['count(*)'];
            res.render("home", { count });
            // console.log(result[0]['count(*)']);
        });
    }
    catch (err) {
        console.log(err);
    }
});

//Home Route
app.get("/users", (req, res) => {
    let q="Select * from users";
try {
    connection.query(q,(err,users)=>
    {
        if(err) throw err;
        res.render("show",{users});
    });
} catch (err) {
    res.send("error in db !");
}
});

//Edit Route
app.get("/users/:id/edit",(req,res)=>
{
    let {id}=req.params;
    let q=`Select * from users where id ='${id}'`;
    try{
        connection.query(q,(err,result)=>
        {
            if(err) throw err;
            let user=result[0];
            res.render("update",{user});
        });
    }
    catch(err)
    {
        console.log(err);
    }
});

//Update Route
app.patch("/users/:id",(req,res)=>
{
    let{id}=req.params;
    let{name:newUsername,passsword:formpassword}=req.body;
    let q=`Select * from users where id='${id}'`;
    try {
        connection.query(q,(err,result)=>
        {
            let user=result[0];
            if(err) throw err;
            if(formpassword!=user.passsword)
            {
                res.send('Incorrect Password');
            }
            else
            {
                try {
                    let q=`Update users set name='${newUsername}' where id='${id}'`;
                    connection.query(q,(err,result)=>{
                        if(err) throw err;
                        res.redirect("/users");
                    })
                } catch (err) {
                    res.send("Failed to update the username");
                }
            }
        });
    } catch (err) {
        console.log(err);
    }
});
app.listen('8080', (req, res) => {
    console.log("Server is listening to port 8080");
});