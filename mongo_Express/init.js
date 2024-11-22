const mongoose=require("mongoose");
const Chat=require("./models/chat.js");
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

main().then(()=>{console.log("connection created successfully")}).catch(()=>{console.log("failed to connect")});

let chats=[
    {
        from:'Krishna Yadav',
        msg:'Hello I am here',
        to:'Ramesh Pelliveela',
        created_at:new Date()
    },
    {
        from:'Devanand Kumar Rana',
        msg:'Where have you been',
        to:'Aditya Mehta',
        created_at:new Date()
    },
    {
        from:'Alook Badatya',
        msg:'I am been in the college.Call me.',
        to:'Ghanshyam Kumar Dev',
        created_at:new Date()
    },
    {
        from:'Prakash Nayak',
        msg:'Yeah. I will be calling you.',
        to:'Krishna Triphati',
        created_at:new Date()
    }
];

Chat.insertMany(chats);




