const mongoose = require('mongoose');


const orderSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,

    },
    number:{
        type:String,
        required:true
    },
    orderTime:{
        type:Date,
        required:true
    },
    email:{ 
        type:String,
        required:true,
        
    }
});

module.exports = mongoose.model('Order',orderSchema);