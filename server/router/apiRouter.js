const express=require("express");
const router=express.Router();
const Employees=require('../model/Employees')

router.get('/employees',async (request,response)=>{
    try{
        let getAllEmployees=await Employees.find()
        response.json(getAllEmployees)

    }
    catch (err) {
        console.error(err)

    }


})


//To get the Single Employee
router.get('/employees/:_id',async (request,response)=>{
    let employeeId=request.params._id;
    try{
        let getSingleEmployee=await Employees.findById(employeeId);
        response.json(getSingleEmployee)

    }
    catch (err) {
        console.error(err);
        response.json({
            msg:"No Employee Found"
        })

    }


})


//To Create A New Employee
router.post('/employees',async (request,response)=>{
    let createNewEmployee={
        first_name:request.body.first_name,
        last_name:request.body.last_name,
        email:request.body.email,
        gender:request.body.gender,
        ip_address:request.body.ip_address,
        date:new Date()
    }
    try{
        let creatingNewEmployee=new Employees(createNewEmployee);
        await creatingNewEmployee.save();
        response.json({
            msg:"Created Successfully"
        })

    }
    catch (err) {
        console.error(err)
        response.json({
            msg:"Server error"
        })

    }


})

//Update an Employee
router.put('/employees/:_id',async (request,response)=>{
    let employeeId=request.params._id;

    let updateEmployee={
        first_name:request.body.first_name,
        last_name:request.body.last_name,
        email:request.body.email,
        gender:request.body.gender,
        ip_address:request.body.ip_address

    }

  try{
        let holdEmployeeId=await  Employees.findById(employeeId);
        await Employees.findByIdAndUpdate(holdEmployeeId,{
            $set:updateEmployee
        },{new:true})

      response.json({
          msg:"Employee is updated Successfully "
      })
  }
  catch(err){
        console.error(err);
        response.json({
            msg:"Server error"
        })

  }

})

//Delete an Employee
router.delete('/employees/:_id',async (request,response)=>{
    let employeeId=request.params._id;
    try{
        let getSingleEmployeeId=await Employees.findById(employeeId)
        await Employees.findByIdAndRemove(getSingleEmployeeId);
        response.json({
            msg:"Employee is deleted Successfully"
        })

    }
    catch (err) {
        console.error(err);
        response.json({
            msg:"Server error"
        })
    }

})





module.exports=router