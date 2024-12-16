const mongoose = require("mongoose");

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

main().then(() => console.log("Successfully connected")).catch((err) => console.log(err));

const orderSchema = new mongoose.Schema({
    name: String,
    price: Number
});

const Order = mongoose.model("Order", orderSchema);

const addOrders = async () => {
    let res=await Order.insertMany([
        {
            name: 'Samosa',
            price: 15
        },
        {
            name: 'Coke',
            price: 25
        },
        {
            name: 'Chocolate',
            price: 40
        }
    ]
    );
    console.log(res);
}

addOrders();