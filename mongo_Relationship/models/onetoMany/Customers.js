const mongoose=require("mongoose");

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

main().then(()=>console.log("Connection created Successfully")).catch((err)=>console.log(err));

const customerSchema=new mongoose.Schema({
    name:String,
    email:String,
    order:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Order'
    }]
});

const orderSchema=new mongoose.Schema({
    title:String,
    price:Number
});
//mongoose Middleware to delete the order when customer is deleted.
customerSchema.post("findOneAndDelete",async(customer)=>{
    let res=await Order.deleteMany({_id: {$in:customer.order}});
    console.log(res);
});
const Customer=mongoose.model("Customer",customerSchema);
const Order=mongoose.model("Order",orderSchema);
const addData=async()=>{
    let customer=new Customer({
        name:'Sunny Wali',
        email:'sunnywali777@gmail.com'
    })
    // let customer=await Customer.findById("675ff3ba7ce55f0397c02101");
    let order=new Order({
        title:'Samosa',
        price:12
    });
    customer.order=order;
    await customer.save();
    await order.save();
}

// addData();
const delCustomer=async()=>{
    let result=await Customer.findByIdAndDelete('675ff3ba7ce55f0397c02101');
    console.log(result);
}

delCustomer();