const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId:String,
    name: String,
    price: String,
    category: String
});

module.exports = mongoose.model("order", orderSchema);