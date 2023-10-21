import React from "react";
export default function EmployeeComponent() {
    return (
       
        <div className="row">
        <h2 className="text-center">Employee List</h2>
        <div className="col-md-2"></div>
        <div className="col-md-8">
            <div className="row">
                <div className="col-sm-8">
                    <form className="form-horizontal" action="/action_page.php">
                        <div className="form-group">
                            <label className="control-label col-sm-3" htmlFor="email">Department Search:</label>
                            <div className="col-sm-4">
                                <input type="text" className="form-control" id="deptName" placeholder="Enter Employee Name" />
                            </div>
                            <button type="submit" className="btn btn-primary">Search</button>
                        </div>
                    </form>
                </div>
                <div className="col-sm-4"><button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">Add New Employee</button></div>
            </div>
            <div className="row">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Sr No</th>
                            <th>Department Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                    </tbody>
                </table>
            </div>

        </div>
        <div className="col-md-2"></div>

        <div className="modal fade" id="myModal" role="dialog">
            <div className="modal-dialog modal-lg">


                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h4 className="modal-title">Add Employee</h4>
                    </div>
                    <div className="modal-body">
                        <form className="form-horizontal" action="/action_page.php">
                            <div className="form-group">
                                <div className="row">
                                    <label className="control-label col-sm-2 col-sm-offset-1" htmlFor="empFirstName">Employee Name:</label>
                                    <div className="col-sm-3">
                                        <input type="text" className="form-control" id="empFirstName" placeholder="Enter First Name here"  />
                                    </div>

                                    <div className="col-sm-3">
                                        <input type="text" className="form-control" id="empMiddleName" placeholder="Enter Middle Name here" />
                                    </div>

                                    <div className="col-sm-3">
                                        <input type="text" className="form-control" id="empLastName" placeholder="Enter Last Name here"  />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="row">
                                    <label className="control-label col-sm-2 col-sm-offset-1" htmlFor="empDob">Date Of Birth:</label>
                                    <div className="col-sm-3">
                                    <input type="text" className="form-control" id="empDob"  />
                                       
                                    </div>

                                    <label className="control-label col-sm-2" htmlFor="empPhoto">Upload Photo:</label>

                                    <div className="col-sm-3">
                                        <input type="text"  className="form-control" id="empPhoto"  />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="row">
                                    <label className="control-label col-sm-3" htmlFor="deptId">Department Name:</label>
                                    <div className="col-sm-3">

                                        <select className="form-control" id="deptId" >

                                           

                                        </select>



                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="row">
                                    <label className="control-label col-sm-3" htmlFor="desigId"> Designation Name:</label>
                                    <div className="col-sm-3">

                                        <select className="form-control" id="desigId" >
                                            
                                        </select>

                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="row">
                                    <label className="control-label col-sm-2 col-sm-offset-1" htmlFor="empMobileNo">Mobile No 1:</label>
                                    <div className="col-sm-3">
                                        <input type="text" className="form-control" id="empMobileNo" placeholder="Enter First Name here"  />
                                    </div>

                                    <label className="control-label col-sm-2" htmlFor="empEmerMobileNo">Mobile No 2:</label>

                                    <div className="col-sm-3">
                                        <input type="text" className="form-control" id="empEmerMobileNo" placeholder="Enter Last Name here"  />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="row">
                                    <label className="control-label col-sm-2 col-sm-offset-1" htmlFor="tempAddress">Temporary Address:</label>
                                    <div className="col-sm-3">
                                        <textarea row="6" className="form-control" id="tempAddress" placeholder="Enter First Name here"  />
                                    </div>

                                    <label className="control-label col-sm-2" htmlFor="permAddress">Permenent Address:</label>

                                    <div className="col-sm-3">
                                        <textarea row="6" className="form-control" id="permAddress" placeholder="Enter Last Name here"  />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <label className="control-label col-sm-2 col-sm-offset-1" htmlFor="emailId"> Email Id:</label>
                                    <div className="col-sm-4">

                                        <input type="text" className="form-control" id="emailId" placeholder="Enter Email Id here"  />

                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="row">
                                    <label className="control-label col-sm-2 col-sm-offset-1" htmlFor="empGender">Gender:</label>
                                    <div className="col-sm-3">
                                        <select className="form-control" id="empGender" >
                                            <option value={'Male'}>Male</option>
                                            <option value={'Female'}>Female</option>
                                        </select>
                                    </div>

                                    <label className="control-label col-sm-2" htmlFor="kppObjective" >Blood Group:</label>

                                    <div className="col-sm-3">
                                        <select className="form-control" id="sel1">
                                            <option value={"A+"}>A+ve</option>
                                            <option value={"B+"}>B+ve</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="row">
                                    <label className="control-label col-sm-2 col-sm-offset-1" htmlFor="reamrk">Enter Remark:</label>
                                    <div className="col-sm-8">
                                        <textarea row="4" className="form-control" id="remark" placeholder="Enter Remark here"  />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="submit" className="btn btn-success"  data-dismiss="modal"> Submit</button>
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
    );}