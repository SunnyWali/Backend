const mongoose = require("mongoose");

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

main().then(() => {
    console.log("successfully connected");
})
    .catch(() => {
        console.log("error in connecting to the mongodb database");
    });

const userSchema = new mongoose.Schema({
    name: 'String',
    city: 'String',
    age: 'Number'
});

const User = mongoose.model("User", userSchema);

const user2 = new User({
    name: 'Ramesh',
    city: 'Hyderabad',
    age: 24,
});

user2.save().then((result) => { console.log(result); }).catch((err) => { console.log(err); });

User.insertMany([
    {name:'Krishna',city:'Siwan',age:24},
    {name:'Alook',city:'Odisha',age:24},
    {name:'Devanand',city:'Jharkhand',age:24},
    {name:'Aditya',city:'Bihar',age:24},
]).then((data)=>{console.log(data);}).catch((err)=>{console.log(err);});