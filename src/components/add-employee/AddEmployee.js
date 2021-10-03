import React, {Fragment, useRef, useState} from "react";
import {Link} from "react-router-dom";
import Axios from "axios"
import {useHistory} from "react-router-dom"
let AddEmployee=()=>{

    let histroy=useHistory()
    let buttonElement=useRef(null)
    let [checked,setChecked]=useState(false)

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
    let submitEmployee=(e)=>{
        e.preventDefault()
        Axios.post('http://127.0.0.1:8500/api/employees',employee).then(res=>{
            setEmployee({
                isSubmitted: true
            })

        }).catch((err)=>{

        })

    }
    let updateCheck=()=>{
        setChecked(!checked)
       buttonElement.current.disabled=checked;

    }
    return(
        <Fragment>
            {
                (employee.isSubmitted === true) ? histroy.push('/employees') :


                    <div className="container mt-2">
                        <pre>{JSON.stringify(checked)}</pre>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-header">
                                        <h2>Add Employee</h2>
                                    </div>
                                    <form action="" className='' onSubmit={submitEmployee}>
                                        <div className="form-group">
                                            <lable className="mx-2">First Name:</lable>
                                            <input
                                                onChange={updateInput}
                                                name="first_name"
                                                value={employee.first_name}
                                                required={true}
                                                type="text"
                                                className="mt-2"
                                                placeholder="Enter First Name "/>
                                        </div>
                                        <div className="form-group">
                                            <lable className="mx-2">Last Name:</lable>
                                            <input
                                                onChange={updateInput}
                                                name="last_name"
                                                value={employee.last_name}
                                                required={true}
                                                type="text"
                                                className="mt-2"
                                                 placeholder="Enter Last Name "/>
                                        </div>
                                        <div className="form-group">
                                            <lable className="mx-2"> Email :      </lable>
                                            <input
                                                size="20"
                                                name="email"
                                                onChange={updateInput}
                                                value={employee.email}
                                                required={true}
                                                type="email"
                                                className="mt-2 mx-4"
                                                 placeholder="Enter First Name "/>
                                        </div>
                                        <div className="form-group  ">
                                            <lable className="mx-2">Gender :</lable>
                                            <select onChange={updateInput}
                                                    name="gender" id="select" className="mt-2" size="">
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
                                                className="mt-2"
                                                 placeholder="Enter Ip_Address"/>
                                        </div>

                                        <div className="form-check form-group">
                                            <input onChange={updateCheck} className="form-check-input mx-1" type="checkbox" id="defaultCheck1"/>
                                            <lable className="form-check-label mx-4" htmlFor="defaultCheck1">Accept Terms & Conditions</lable>

                                        </div>
                                        <div className="form-group">
                                            <input ref={buttonElement} type="submit" value="Add Employee"
                                                   className="form-control btn btn-sm btn-success "id="button1" disabled/>
                                        </div>
                                    </form>
                                </div>
                            </div>


                        </div>

                    </div>

            }

        </Fragment>
    )
}
export default  AddEmployee
