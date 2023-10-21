import React from "react";
import {Route, BrowserRouter as Router, Link, Switch} from 'react-router-dom';
import KeyParameterComponent from './components/KeyParameterComponent/KeyParameterComponent';
import LocationComponent from './components/LocationComponent/LocationComponent';
import RegionComponent from './components/RegionComponent/RegionComponent';

import EmployeeComponent from './components/EmployeeComponent/EmployeeComponent';
import DesignationComponent from './components/DesignationComponent/DesignationComponent';
import EmployeeKPPComponent from './components/EmployeeKPPComponent/EmployeeKPPComponent';
import DepartmentComponent from './components/DepartmentComponent/DepartmentComponent';


function App() {
  return (


    <Router>
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">FutureBizops</a>
        </div>
        <ul className="nav navbar-nav">
          <li className="active"><a href="#">Home</a></li>
          <li><Link to="/department">Department</Link></li>
          <li><Link to="/designation">Designation</Link></li>
          <li><Link to="/employee">Employee</Link></li>
          <li><Link to="/keyparemeter">Key Indicator</Link></li>

          <li><Link to="/location">Location</Link></li>
          <li><Link to="/region">Region</Link></li>
          <li><Link to="/employeekpp">Employee KPP</Link></li>
          
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#"><span className="glyphicon glyphicon-user"></span> e1234</a></li>
          <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
        </ul>
      </div>
    </nav>
    <Switch>
      <Route exact path="/department" component={DepartmentComponent}></Route>
      <Route exact path="/designation"><DesignationComponent/></Route>
      <Route exact path="/employee"><EmployeeComponent/></Route>
      <Route exact path="/keyparemeter" ><KeyParameterComponent/></Route>
      <Route exact path="/location" ><LocationComponent/></Route>
      <Route exact path="/region"><RegionComponent/></Route>
      <Route exact path="/employeekpp"><EmployeeKPPComponent/></Route>
    </Switch>
  </Router>    );
}

export default App;
