import React, { useState } from "react";
export default function KeyParameterComponent() {
   
    return (
        <div className="row">
        <h2 className="text-center">Key Parameter List</h2>
        <div className="col-md-2"></div>
        <div className="col-md-8">
            <div className="row">
                <div className="col-sm-8">
                    <form className="form-horizontal" action="">
                        <div className="form-group">
                            <label className="control-label col-sm-3" htmlFor="email">Department Search:</label>
                            <div className="col-sm-4">
                                <input type="text" className="form-control" id="deptName" placeholder="Enter Department Name" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-sm-4"><button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">Add Key Parameter</button></div>
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
                        <h4 className="modal-title">Add Key Parameter</h4>
                    </div>
                    <div className="modal-body">
                        <form className="form-horizontal">
                            <div className="form-group">
                                <label className="control-label col-sm-4" htmlFor="deptId">Select Department Name:</label>
                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <select className="form-control" id="deptId" >
                                           

                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="control-label col-sm-4" htmlFor="desigId">Select Designation Name:</label>
                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <select className="form-control" id="desigId">
                                           
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="control-label col-sm-4" htmlFor="kppObjective">KPP Objective:</label>
                                <div className="col-sm-8">
                                    <textarea row="4" className="form-control" id="kppObjective" placeholder="KPP Objective here"  />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="control-label col-sm-4" htmlFor="kppPerformanceIndi">Kpp Performance Indicator:</label>
                                <div className="col-sm-8">
                                    <textarea row="4" className="form-control" id="kppPerformanceIndi" placeholder="Enter KPP Performance Infdicator here"  />
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="row">
                                    <label className="control-label col-sm-3 col-sm-offset-1" htmlFor="kppOverallTarget">Overall Target:</label>
                                    <div className="col-sm-2">
                                        <input type="text" className="form-control" id="kppOverallTarget" placeholder="Enter KPP ObjectiveOverall Target here" />
                                    </div>
                                    <label className="control-label col-sm-3" htmlFor="kppTargetPeriod">Target Period:</label>
                                    <div className="col-sm-2">
                                        <input type="text" className="form-control" id="kppTargetPeriod" placeholder="Enter KPP Kpp Target Period here"  />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="row">
                                    <label className="control-label col-sm-3 col-sm-offset-1" htmlFor="kppUoM">Unit of Measurement:</label>
                                    <div className="col-sm-2">
                                        <input type="text" className="form-control" id="kppUoM" placeholder="Enter KPP Kpp Target Period here"  />
                                    </div>
                                    <label className="control-label col-sm-3" htmlFor="kppOverallWeightage">Kpp Target Period:</label>
                                    <div className="col-sm-2">
                                        <input type="text" className="form-control" id="kppOverallWeightage" placeholder="Enter KPP Kpp Target Period here"  />
                                    </div>
                                </div>
                            </div>



                            <div className="form-group">
                                <div className="row">
                                    <label className="control-label col-sm-3 col-sm-offset-1" htmlFor="kppRating1">Rating 1:</label>
                                    <div className="col-sm-2">
                                        <input type="text" className="form-control" id="kppRating1" placeholder="Enter KPP Rating 1 here"  />
                                    </div>
                                    <label className="control-label col-sm-3" htmlFor="kppRating1">Rating 2:</label>
                                    <div className="col-sm-2">
                                        <input type="text" className="form-control" id="kppRating2" placeholder="Enter KPP Rating 2 here"  />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="row">
                                    <label className="control-label col-sm-3 col-sm-offset-1" htmlFor="kppRating3">Rating 3:</label>
                                    <div className="col-sm-2">
                                        <input type="text" className="form-control" id="kppRating3" placeholder="Enter KPP Rating 3 here"  />
                                    </div>
                                    <label className="control-label col-sm-3" htmlFor="kppRating1">Rating 4:</label>
                                    <div className="col-sm-2">
                                        <input type="text" className="form-control" id="kppRating4" placeholder="Enter KPP Rating 4 here"  />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="row">
                                    <label className="control-label col-sm-3 col-sm-offset-1" htmlFor="kppRating5">Rating 5:</label>
                                    <div className="col-sm-2">
                                        <input type="text" className="form-control" id="kppRating5" placeholder="Enter KPP Rating 5 here"  />
                                    </div>

                                </div>
                            </div>


                            <div className="form-group">
                                <label className="control-label col-sm-4" htmlFor="reamrk">Enter Remark:</label>
                                <div className="col-sm-8">
                                    <textarea row="4" className="form-control" id="remark" placeholder="Enter Remark here"  />
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