const mongoose=require("mongoose");

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

main().then(()=>console.log("connection successful")).catch((err)=>console.log(err));

const userSchema=new mongoose.Schema({
    name:String,
    address:[{
        _id:false,
        location:String,
        city:String,
    }]
});

const User=mongoose.model("User",userSchema);

const addUsers=async()=>{
    let user1=new User({
        name:'Ramesh Pellivella',
        address:[{
            location:'4th lane narshid road',
            city:'Hyderabad'
        }],
    });
    user1.address.push({location:'DurgaNagar Sector 1 Lane No 4',city:'Jammu'});
    let result=await user1.save();
    console.log(result);
}

addUsers();

