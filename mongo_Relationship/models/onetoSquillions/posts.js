const mongoose = require("mongoose");


async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

main().then(() => console.log("connected successfully")).catch((err) => console.log(err));

const postSchema = new mongoose.Schema({
    content: String,
    likes: Number,
    people:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'People',
    }]
});

const peopleSchema = new mongoose.Schema({
    name:String,
    email:String,
});


const Post=mongoose.model("Post",postSchema);
const People=mongoose.model("People",peopleSchema);

const addData=async()=>{
    // let post=new Post({
    //     content:'Hello this is me',
    //     likes:150,
    // });
    let people=await People.findOne({name:'Sunny Wali'});
    let post1=new Post({
        content:'Hello World',
        likes:550
    });
    // let people=new People({
    //     name:'Sunny Wali',
    //     email:'sunnywali777@gmail.com',
    // });

    post1.people=people;
    // await people.save();
    await post1.save();
}
addData();