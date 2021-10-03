const mongoose=require("mongoose");


let EmployeeSchema=new mongoose.Schema({
    first_name:{
        required:true,
        type:String
    },
    last_name:{
        required:true,
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    gender:{
        type:String,
        required:true,
    },
    ip_address:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:new Date()
    }
})
let Employees=mongoose.model('employees',EmployeeSchema);
module.exports=Employees;