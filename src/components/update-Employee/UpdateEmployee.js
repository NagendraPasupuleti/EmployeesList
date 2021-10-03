import React, {Fragment, useRef,useEffect, useState} from "react";
import {useParams,useHistory} from "react-router-dom"
import {Link} from "react-router-dom";
import Axios from "axios"
let UpdateEmployee=()=>{
    let [checked,setChecked]=useState(false)
    let buttonEl=useRef(null)
    let employeeId=useParams()._id
    let histroy=useHistory()
    let [employee,setEmployee]=useState({
        first_name:'',
        last_name:'',
        email:'',
        gender:'',
        ip_address:''

    },{
        isSubmitted:false
    })
    let updateInput=(e)=>{
        setEmployee({
            ...employee,
            [e.target.name]:e.target.value
        })

    }
    useEffect(()=>{
        Axios.get(`http://127.0.0.1:8500/api/employees/${employeeId}`).then(res=>{
            setEmployee(res.data)
        }).catch(err=>{
            console.error(err)
        })

    },[employeeId])

    let updateEmployee=(e)=>{
        e.preventDefault();
        Axios.put(`http://127.0.0.1:8500/api/employees/${employeeId}`,employee).then(res=>{
            setEmployee({
                isSubmitted: true
            })

        }).catch(err=>{
            console.log(err._message)
        })

    }


    let updateCheck=()=>{
        setChecked(!checked)
        buttonEl.current.disabled=checked

    }

    return(
        <Fragment>
            {
                (employee.isSubmitted === true) ? histroy.push('/employees') :


                    <div className="container mt-2">
                        <pre>{JSON.stringify(checked)}</pre>
                        <div className="row">
                            <div className="col">
                                <h2 className="text-white  text-center">Welcome To Update Employees section</h2>
                                <p className="text-success">Please Fill The below details</p>
                            </div>

                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h2>Update Employee</h2>
                                </div>
                                <form action="" className='form-inline' onSubmit={updateEmployee}>
                                    <div className="form-group">
                                        <lable className="mx-2">First Name:</lable>
                                        <input
                                            onChange={updateInput}
                                            name="first_name"
                                            value={employee.first_name}
                                            required={true}
                                            type="text"
                                            className="form-control my-3 mx-3"
                                            size="40" placeholder="Enter First Name "/>
                                    </div>
                                    <div className="form-group">
                                        <lable className="mx-2">Last Name:</lable>
                                        <input
                                            onChange={updateInput}
                                            name="last_name"
                                            value={employee.last_name}
                                            required={true}
                                            type="text"
                                            className="form-control my-3 mx-3"
                                            size="40" placeholder="Enter Last Name "/>
                                    </div>
                                    <div className="form-group">
                                        <lable className="mx-2"> Email :</lable>
                                        <input
                                            name="email"
                                            onChange={updateInput}
                                            value={employee.email}
                                            required={true}
                                            type="text"
                                            className="form-control my-3 mx-lg-5"
                                            size="40" placeholder="Enter First Name "/>
                                    </div>
                                    <div className="form-group  ">
                                        <lable className="mx-2">Gender :</lable>
                                        <select onChange={updateInput}
                                                value={employee.gender}name="gender" id="selectgender" className="form-control mx-lg-4 my-2 ">
                                            <option value="">Select Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <lable className="mx-2">IPAddress :</lable>
                                        <input
                                            name="ip_address"
                                            onChange={updateInput}
                                            value={employee.ip_address}
                                            required={true}
                                            type="text"
                                            className="form-control my-3 mx-3"
                                            size="40" placeholder="Enter Ip_Address"/>
                                    </div>
                                    <br/>
                                    <div className="form-check form-group mx-3">
                                        <input onChange={updateCheck} type="checkbox" className="form-check-input mx-2" id="defaultCheck1"/>

                                        <Link to="" target="_blank" className="form-check-label mx-0" htmlFor="defaultCheck1">Accept Terms & Conditions</Link>
                                        
                                    </div>
                                    <div>
                                        <input ref={buttonEl} type="submit" value="Update Employee"
                                               className="form-control btn btn-sm btn-outline-success mybtn " disabled/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
            }

        </Fragment>
    )
}
export  default  UpdateEmployee