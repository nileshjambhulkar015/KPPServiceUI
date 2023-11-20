import React from "react";
import {Route, BrowserRouter, Link, Routes} from 'react-router-dom';
import KeyParameterComponent from './components/KeyParameterComponent/KeyParameterComponent';

import EmployeeComponent from './components/EmployeeComponent/EmployeeComponent';
import DesignationComponent from './components/DesignationComponent/DesignationComponent';

import DepartmentComponent from './components/DepartmentComponent/DepartmentComponent';
import EmployeeKppComponent from "./components/EmployeeKppsComponent/EmployeeKppsComponent";
import RoleComponent from "./components/RoloComponent/RoleComponent";

function App() {
  return (
    <BrowserRouter>
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">FutureBizops</a>
        </div>
        <ul className="nav navbar-nav">
          <li className="active"><a href="#">Home</a></li>
          <li><Link to="/role">Role</Link></li>
          <li><Link to="/department">Department</Link></li>
          <li><Link to="/designation">Designation</Link></li>
          <li><Link to="/employee">Employee</Link></li>
          <li><Link to="/keyparemeter">Key Indicator</Link></li>
          <li><Link to="/employeekpp">Employee KPP</Link></li>
          
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#"><span className="glyphicon glyphicon-user"></span> e1234</a></li>
          <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
        </ul>
      </div>
    </nav>
    <Routes>
      
    <Route exact path="/" element={<DepartmentComponent />}></Route>
    <Route exact path="/role" element={<RoleComponent/>}></Route>
      <Route exact path="/department" element={<DepartmentComponent/>}></Route>
      <Route exact path="/designation" element={<DesignationComponent/>}></Route>
      <Route exact path="/employee" element={<EmployeeComponent/>}></Route>
      <Route exact path="/keyparemeter" element={<KeyParameterComponent/>} ></Route>
      <Route exact path="/employeekpp" element={<EmployeeKppComponent/>}></Route>
    </Routes>
  </BrowserRouter>    
  );
}

export default App;
