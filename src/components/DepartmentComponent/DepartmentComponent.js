import React, { useEffect, useState } from "react";
import DepartmentService from "../../services/DepartmentService";

export default function DepartmentComponent() {
    const [deptId, setDeptId] = useState('');
    const [deptName, setDeptName] = useState('');
    const [remark, setRemark] = useState('');

    const [departments, setDepartments] = useState([])

    useEffect(() => {
        DepartmentService.getDpartmentDetailsByPaging().then((res) => {
            setDepartments(res.data.responseData.content);
            console.log(res.data)
        });
    }, []);


    const saveDepartment = (e) => {
        e.preventDefault()
        let statusCd = 'A';
        let department = { deptName, remark, statusCd };

        DepartmentService.saveDpartmentDetails(department).then(res => {
            DepartmentService.getDpartmentDetailsByPaging().then((res) => {
                setDepartments(res.data.responseData.content);
                console.log(res.data)
                setDeptName('');
                setRemark('');
            });
            console.log("Department added");
        }
        );
        // window.location.reload(); 
    }

    const showDepartmentById = (e) => {

        DepartmentService.getDepartmentById(e).then(res => {
            let department = res.data;
            setDeptId(department.deptId)
            setDeptName(department.deptName)
            setRemark(department.remark)
        }
        );
        // window.location.reload(); 
    }


    const deleteDepartmentById = (e) => {
        DepartmentService.getDepartmentById(e).then(res => {
            let department = res.data;
            let deptId = department.deptId;
            let deptName = department.deptName;
            let remark = department.remark;
            let statusCd = 'I';
            let updateDepartment = { deptId, deptName, remark, statusCd };

            DepartmentService.updateDepartmentDetails(updateDepartment).then(res => {
                DepartmentService.getDpartmentDetailsByPaging().then((res) => {
                    setDepartments(res.data.responseData.content);
                    console.log(res.data.responseData.content)
                });
                console.log("Department deleted");
            }
            );
        }
        );
    }

    const updateDepartment = (e) => {

        e.preventDefault()
        let statusCd = 'A';
        let department = { deptId, deptName, remark, statusCd };

        DepartmentService.updateDepartmentDetails(department).then(res => {
            DepartmentService.getDpartmentDetailsByPaging().then((res) => {
                setDepartments(res.data.responseData.content);
                console.log(res.data)
            });
            console.log("Department added");
        }
        );

    }
    return (

        <div>
            <div className="row">
                <h2 className="text-center">Department List</h2>
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-sm-8">

                            <div className="form-group">
                                <label className="control-label col-sm-3" htmlFor="email">Department Search:</label>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control" id="searchString" placeholder="Enter Department Name" />
                                </div>
                                <button type="submit" className="btn btn-primary">Search</button>
                            </div>

                        </div>
                        <div className="col-sm-4"><button type="button" className="btn btn-primary" data-toggle="modal" data-target="#saveDepartment">Add Department</button></div>
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
                                {
                                    departments.map(
                                        (department, index) =>   //index is inbuilt variable of map started with 0
                                            <tr key={department.deptId}>
                                                <td>{index + 1}</td>
                                                <td>{department.deptName}</td>
                                                <td> <button type="submit" className="btn btn-info" data-toggle="modal" data-target="#updateDepartment" onClick={() => showDepartmentById(department.deptId)}>Update</button>
                                                    <button type="submit" className="btn col-sm-offset-1 btn-info" onClick={() => deleteDepartmentById(department.deptId)}>Delete</button>
                                                    <button type="submit" className="btn col-sm-offset-1 btn-danger" data-toggle="modal" data-target="#showData" onClick={() => showDepartmentById(department.deptId)}>View</button></td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>

                </div>
                <div className="col-md-2"></div>

            </div>

            {/* Modal for save department details */}
            <div className="modal fade" id="saveDepartment" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Add Department</h4>
                        </div>
                        <div className="modal-body">
                            <form className="form-horizontal">
                                <div> <input type="hidden" id="deptId" name="deptId" value={deptId} /></div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4" htmlFor="deptName">Enter Department Name:</label>
                                    <div className="col-sm-8">
                                        <input type="text" className="form-control" id="deptName" placeholder="Enter Department Name here" value={deptName} onChange={(e) => setDeptName(e.target.value)} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4" htmlFor="reamrk">Enter Remark:</label>
                                    <div className="col-sm-8">
                                        <textarea row="5" className="form-control" id="remark" placeholder="Enter Remark here" value={remark} onChange={(e) => setRemark(e.target.value)} />
                                    </div>
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-success" data-dismiss="modal" onClick={(e) => saveDepartment(e)} > Submit</button>
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                    </div>

                </div>
            </div>

            {/* Modal for update user details */}
            <div className="modal fade" id="updateDepartment" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Update Department</h4>
                        </div>
                        <div className="modal-body">
                            <form className="form-horizontal">
                                <div> <input type="hidden" id="deptId" name="deptId" value={deptId} /></div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4" htmlFor="deptName">Enter Department Name:</label>
                                    <div className="col-sm-8">
                                        <input type="text" className="form-control" id="deptName" placeholder="Enter Department Name here" value={deptName} onChange={(e) => setDeptName(e.target.value)} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4" htmlFor="reamrk">Enter Remark:</label>
                                    <div className="col-sm-8">
                                        <textarea row="5" className="form-control" id="remark" placeholder="Enter Remark here" value={remark} onChange={(e) => setRemark(e.target.value)} />
                                    </div>
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-success" data-dismiss="modal" onClick={(e) => updateDepartment(e)} > Submit</button>
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                    </div>

                </div>
            </div>


            {/* Modal for show data when user click on view button */}
            <div className="modal fade" id="showData" role="dialog">
                <div className="modal-dialog">

                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Department Details</h4>
                        </div>
                        <div className="modal-body">
                            <form className="form-horizontal">
                                <div> <input type="hidden" id="deptId" name="deptId" value={deptId} /></div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4" htmlFor="deptName" >Department Name:</label>
                                    <div className="col-sm-8">
                                        {deptName}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4" htmlFor="reamrk" >Remark :</label>
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
    );
}