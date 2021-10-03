import React, {Fragment, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Axios from "axios"

let Employees=()=>{
    let [employees,setEmployees]=useState([])

    useEffect(()=>{
        getAllEmployees()

    },[])

    let getAllEmployees=()=>{
        Axios.get('http://127.0.0.1:8500/api/employees').then((response)=>{
            setEmployees(response.data)

        }).catch(err=>{
            console.error(err)
        })

    }


    let deleteEmployee=(employeeId)=>{
        Axios.delete(`http://127.0.0.1:8500/api/employees/${employeeId}`).then(res=>{
            getAllEmployees()

        }).catch()

    }
    return(
        <Fragment>
            <pre>{JSON.stringify({employees})}</pre>
          <div className="container mt-lg-5">
              <div className="row">
                  <div className="col">
                      <h2 className="text-white bg-dark">Welcome To Employees section</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus adipisci aliquid asperiores autem cum delectus, dicta dignissimos ducimus earum et facilis fugiat iste modi molestiae nihil pariatur porro quas repellat repudiandae saepe soluta veniam. Beatae, consectetur dignissimos enim et iste molestiae nam, necessitatibus nesciunt quam, reiciendis reprehenderit suscipit? Autem!</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus adipisci aliquid asperiores autem cum delectus, dicta dignissimos ducimus earum et facilis fugiat iste modi molestiae nihil pariatur porro quas repellat repudiandae saepe soluta veniam. Beatae, consectetur dignissimos enim et iste molestiae nam, necessitatibus nesciunt quam, reiciendis reprehenderit suscipit? Autem!</p>
                     <p>lectus, dicta dignissimos ducimus earum et facilis fugiat iste modi molestiae nihil pariatur porro quas repellat repudiandae saepe soluta veniam. Beatae, consectetur dignissimos enim et iste molestiae nam, necessitatibus nesciunt quam, reiciendis reprehenderit suscipit? Autem!</p>


                  </div>
                  <table className="table table-hover table-striped table-primary text-center">
                      <thead>
                      <th>SNO</th>
                      <th>FIRST NAME</th>
                      <th>LAST NAME</th>
                      <th>EMAIL</th>
                      <th>GENDER</th>
                      <th>ACTIONS</th>
                      </thead>
                      <tbody className="bg-success text-white">
                      {
                          employees.length>0?<Fragment>
                              {
                                  employees.map((emp,index)=>{
                                      return(
                                          <tr>
                                              <td>{index+1}</td>
                                              <td>{emp.first_name}</td>
                                              <td>{emp.last_name}</td>
                                              <td>{emp.email}</td>
                                              <td>{emp.gender}</td>
                                              <td>
                                                  <Link to={`/employees/${emp._id}`} className="btn btn-sm btn-warning">update</Link>
                                                  <button onClick={deleteEmployee.bind(this,`${emp._id}`)} className="btn btn-sm btn-danger">Delete</button>
                                              </td>
                                          </tr>
                                      )

                                  })
                              }
                          </Fragment>:<Fragment>
                              <tr >
                                  <td colSpan="6" className="text-danger">No Data Found</td>
                              </tr>
                          </Fragment>
                      }

                      </tbody>
                  </table>

              </div>
          </div>

        </Fragment>
    )
}
export default  Employees