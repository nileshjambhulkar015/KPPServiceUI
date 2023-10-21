import React from "react";
export default function DesignationComponent() {
    return (
       
        <div>
        <div className="row">
            <h2 className="text-center">Designation List</h2>
            <div className="col-md-2"></div>
            <div className="col-md-8">
                <div className="row">
                    <div className="col-sm-8">
                        <form className="form-horizontal" action="/action_page.php">
                            <div className="form-group">
                                <label className="control-label col-sm-3" htmlFor="email">Designation Search:</label>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control" id="deptName" placeholder="Enter Designation Name" />
                                </div>
                                <button type="submit" className="btn btn-primary">Search</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-sm-4"><button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">Add Designation</button></div>
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

        </div>

        <div className="modal fade" id="myModal" role="dialog">
            <div className="modal-dialog">


                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h4 className="modal-title">Add Designation</h4>
                    </div>
                    <div className="modal-body">
                        <form className="form-horizontal" action="/action_page.php">
                            <div className="form-group">
                                <label className="control-label col-sm-4" htmlFor="deptName">Select Department Name:</label>
                                <div className="col-sm-8">
                                    <select className="form-control" id="sel1">
                                       
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-4" htmlFor="reamrk">Designation Name:</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="desigName" placeholder="Enter Designation Name here"  />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-4" htmlFor="reamrk">Enter Remark:</label>
                                <div className="col-sm-8">
                                    <textarea row="5" className="form-control" id="remark" placeholder="Enter Remark here" />
                                </div>
                            </div>

                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="submit" className="btn btn-success" data-dismiss="modal"> Submit</button>
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>
                </div>

            </div>
        </div>
        </div>
    
    );}