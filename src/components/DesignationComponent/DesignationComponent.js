import React from "react";
import DesignationService from "../../services/DesignationService";
import { useState } from "react";
import { useEffect } from "react";
export default function DesignationComponent() {

    const [desigId, setDesigId] = useState('');
    const [deptId, setDeptId] = useState('');
    const [deptName, setDeptName] = useState('');   
    const [desigName, setDesigName] = useState('');
    const [remark, setRemark] = useState('');

    const [designations, setDesignations] = useState([])
    const [departments, setDepartments] = useState([])

    useEffect(() => {
        DesignationService.getDesignationDetailsByPaging().then((res) => {
            setDesignations(res.data.responseData.content);
            console.log(res.data)
        });

        DesignationService.getDpartmentDetails().then((res) => {
            setDepartments(res.data);
        });
    }, []);

    const saveDesignationDetails = (e) => {
        e.preventDefault()
        let statusCd = 'A';
        let designation = { deptId, desigName, remark, statusCd };

        DesignationService.saveDesignationDetails(designation).then(res => {
            DesignationService.getDesignationDetailsByPaging().then((res) => {
                setDesignations(res.data.responseData.content);
                console.log(res.data)
            });
            
        }
        );
        // window.location.reload(); 
    }

    
    const showDesignationById = (e) => {

        DesignationService.getDesignationById(e).then(res => {
            let designation = res.data;
            setDesigId(designation.desigId)
            setDeptId(designation.deptId)
            setDeptName(designation.deptName)
            setDesigName(designation.desigName)
            setRemark(designation.remark)
          
        }
        );
        // window.location.reload(); 
    }

    const updateDesignationDetails = (e) => {

        e.preventDefault()
        let statusCd = 'A';
        let updateDesignation = {desigId,deptId, desigName,remark, statusCd };
        
        DesignationService.updateDesignationDetails(updateDesignation).then(res => {
            DesignationService.getDesignationDetailsByPaging().then((res) => {
                setDesignations(res.data.responseData.content);
            });
           
        }
        );

    }

    const deleteDesignationById = (e) => {
       

        DesignationService.getDesignationById(e).then(res => {
            let designation = res.data;
            let desigId = designation.desigId;
           let deptId =designation.deptId;
          
           let desigName=designation.desigName;
            let remark =designation.remark;

            let statusCd = 'I';
            let deleteDesignation = {desigId,deptId,desigName, remark, statusCd };

           
            DesignationService.updateDesignationDetails(deleteDesignation).then(res => {
                DesignationService.getDesignationDetailsByPaging().then((res) => {
                    setDesignations(res.data.responseData.content);
                });
                console.log("designation deleted");
            }
            );
        }
        );
        // window.location.reload(); 
    }
    return (
       
        <div>
        <div className="row">
            <h2 className="text-center">Designation List</h2>
            <div className="col-md-2"></div>
            <div className="col-md-8">
                <div className="row">
                    <div className="col-sm-8">
                        <form className="form-horizontal">
                            <div className="form-group">
                                <label className="control-label col-sm-3" htmlFor="email">Designation Search:</label>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control" id="deptName" placeholder="Enter Designation Name" />
                                </div>
                                <button type="submit" className="btn btn-primary">Search</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-sm-4"><button type="button" className="btn btn-primary" data-toggle="modal" data-target="#saveDesignation">Add Designation</button></div>
                </div>
                <div className="row">

                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Sr No</th>
                                <th>Department Name</th>
                                <th>Designation Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                                    designations.map(
                                        (designation, index) =>   //index is inbuilt variable of map started with 0
                                            <tr key={designation.desigId}>
                                                <td>{index + 1}</td>
                                                <td>{designation.deptName}</td>
                                                <td>{designation.desigName}</td>
                                                <td className="col-sm-3"> <button type="submit" className="btn btn-info" data-toggle="modal" data-target="#updateDesignation" onClick={() => showDesignationById(designation.desigId)}>Update</button>
                                                    <button type="submit" className="btn col-sm-offset-1 btn-info" onClick={() => deleteDesignationById(designation.desigId)}>Delete</button>
                                                    <button type="submit" className="btn col-sm-offset-1 btn-danger" data-toggle="modal" data-target="#showDesignation" onClick={() => showDesignationById(designation.desigId)}>View</button></td>
                                            </tr>
                                    )
                                } 
                        </tbody>
                    </table>
                </div>

            </div>
            <div className="col-md-2"></div>

        </div>
        {/**Save designation */}

        <div className="modal fade" id="saveDesignation" role="dialog">
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
                                <select className="form-control" id="deptId" onChange={(e) => setDeptId(e.target.value)}>
                                        <option>--Select Department--</option>
                                                    {
                                                        departments.map(
                                                            department =>
                                                                <option key={department.deptId} value={department.deptId}>{department.deptName}</option>
                                                        )
                                                    };

                                        </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-4" htmlFor="reamrk">Designation Name:</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="desigName" value={desigName} onChange={(e) => setDesigName(e.target.value)} placeholder="Enter Designation Name here"  />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-4" htmlFor="reamrk">Enter Remark:</label>
                                <div className="col-sm-8">
                                    <textarea row="5" className="form-control" id="remark" value={remark} onChange={(e) => setRemark(e.target.value)}  placeholder="Enter Remark here" />
                                </div>
                            </div>

                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="submit" className="btn btn-success" data-dismiss="modal" onClick={(e) => saveDesignationDetails(e)}> Submit</button>
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>
                </div>

            </div>
        </div>

{/**Update Designation */}

<div className="modal fade" id="updateDesignation" role="dialog">
            <div className="modal-dialog">


                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h4 className="modal-title">Update Designation</h4>
                    </div>
                    <div className="modal-body">
                        <form className="form-horizontal" action="/action_page.php">
                        <div> <input type="hidden" id="desigId" name="desigId" value={desigId} /></div>
                            <div className="form-group">
                                <label className="control-label col-sm-4" htmlFor="deptName">Department Name:</label>
                                <div className="col-sm-8">
                                {deptName}
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-4" htmlFor="reamrk">Designation Name:</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="desigName" value={desigName} onChange={(e) => setDesigName(e.target.value)} placeholder="Enter Designation Name here"  />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-4" htmlFor="reamrk">Enter Remark:</label>
                                <div className="col-sm-8">
                                    <textarea row="5" className="form-control" id="remark" value={remark} onChange={(e) => setRemark(e.target.value)}  placeholder="Enter Remark here" />
                                </div>
                            </div>

                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="submit" className="btn btn-success" data-dismiss="modal" onClick={(e) => updateDesignationDetails(e)}> Submit</button>
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>
                </div>

            </div>
        </div>


        {/**show designations */}

        <div className="modal fade" id="showDesignation" role="dialog">
            <div className="modal-dialog">


                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h4 className="modal-title">View Designation</h4>
                    </div>
                    <div className="modal-body">
                        <form className="form-horizontal" action="/action_page.php">
                            <div className="form-group">
                                <label className="control-label col-sm-4" htmlFor="deptName">Select Department Name:</label>
                                <div className="col-sm-8">
                                {deptName}
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-4" htmlFor="reamrk">Designation Name:</label>
                                <div className="col-sm-8">
                                   {desigName}
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-4" htmlFor="reamrk">Enter Remark:</label>
                                <div className="col-sm-8">
                                    {remark}
                                </div>
                            </div>

                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>
                </div>

            </div>
        </div>
       
        </div>
    
    );}