import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import Employees from "./components/Employees/Employees";
import AddEmployee from "./components/add-employee/AddEmployee";
import UpdateEmployee from "./components/update-Employee/UpdateEmployee";


function App() {
  return (
    <div className="App">
     <Router>
       <Navbar/>
       <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path="/employees" component={Employees}/>
        <Route exact path="/add-Employee" component={AddEmployee}/>
        <Route exact path="/employees/:_id" component={UpdateEmployee}/>

       </Switch>
     </Router>



    </div>
  );
}

export default App;
