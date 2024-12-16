const mongoose=require("mongoose");

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

main().then(()=>console.log("connected successfully")).catch((err)=>console.log(err));

const orderSchema = new mongoose.Schema({
    name: String,
    price: Number
});

const Order = mongoose.model("Order", orderSchema);

const customerSchema=new mongoose.Schema({
    name:String,
    order:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Order'
        }
    ]
});

const Customer=mongoose.model("Customer",customerSchema);
const addCustomers=async()=>{
    let customer1=new Customer({
        name:'Ramesh Pelliveela',  
    })
    let order1=await Order.findOne({name:'Samosa'});
    let order2=await Order.findOne({name:'Coke'});
    customer1.order.push(order1);
    customer1.order.push(order2);
    let result=await customer1.save();
    console.log(result);
}

addCustomers();