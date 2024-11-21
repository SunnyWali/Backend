const mongoose = require("mongoose");

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

main().then(() => { console.log("connection successful"); }).catch(() => { console.log("error to connect with mongodb database"); });

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true,
    },
    author:{
        type:String,
    },
    price:{
        type:Number
    }
});

const Book=mongoose.model("Book",bookSchema);

let book1=new Book({
    title:'The power of your sub-conscious mind',
    author:'Dr. Joseph Murphy',
    price:"120"
});

book1.save().then(result=>{console.log(result);});