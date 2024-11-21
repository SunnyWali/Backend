const mongoose=require("mongoose");

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

main().then(()=>
{
    console.log("successfully connected");
})
.catch(()=>
{
    console.log("error in connecting to the mongodb database");
});

const userSchema=new mongoose.Schema({
    name:'String',
    city:'String',
    age:'Number'
});

const Employee=mongoose.model("Employee",userSchema);