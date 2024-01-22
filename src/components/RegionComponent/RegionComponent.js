import React, { useEffect, useState } from "react";

import RegionService from "../../services/RegionService";

export default function RegionComponent() {
    const [regionId, setRegionId] = useState('');
    const [regionName, setRegionName] = useState('');
    const [remark, setRemark] = useState('');
    

    const [regionNameSearch, regionNameSearchSearch] = useState('');
    const [regions, setRegions] = useState([])

    useEffect(() => {
        RegionService.getRolesDetailsByPaging().then((res) => {
            setRoles(res.data.responseData.content);
        });
    }, []);

    const searchRoleName = (e) => {
        RegionService.getRolesDetailsByRoleNamePaging(e).then((res) => {
            setRoles(res.data.responseData.content);
        });
    }
    

    const saveRole = (e) => {
        e.preventDefault()
        let statusCd = 'A';
        let region = { regionName, remark, statusCd };

        RegionService.saveRolesDetails(role).then(res => {
            console.log("res=", res.data)
            RegionService.getRolesDetailsByPaging().then((res) => {
                setRoles(res.data.responseData.content);
                setRoleName('');
                setRemark('');
            });
        }
        );
        // window.location.reload(); 
    }

    const showRoleById = (e) => {

        RegionService.getRoleById(e).then(res => {
            let region = res.data;
            setRegionId(region.regionId)
            setRegionName(region.regionName)
            setRemark(region.remark)
        }
        );
    }


    const deleteRoleById = (e) => {
        RegionService.getRoleById(e).then(res => {
            let role = res.data;
            let roleId = role.roleId;
            let roleName = role.roleName;
            let remark = role.remark;
            let statusCd = 'I';
            let updateRole = { roleId, roleName, remark, statusCd };

            RegionService.updateRoleDetails(updateRole).then(res => {
                RegionService.getRolesDetailsByPaging().then((res) => {
                    setRoles(res.data.responseData.content);
                    console.log(res.data.responseData.content)
                });
            }
            );
        }
        );
    }

    const updateRole = (e) => {

        e.preventDefault()
        let statusCd = 'A';
        let role = { roleId, roleName, remark, statusCd };

        RegionService.updateRoleDetails(role).then(res => {
            RegionService.getRolesDetailsByPaging().then((res) => {
                setRoles(res.data.responseData.content);
            });
            console.log("Region update");
        }
        );

    }
    return (

        <div>
            <div className="row">
                <h2 className="text-center">Role List</h2>
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="form-group">
                                <form className="form-horizontal">
                                    <label className="control-label col-sm-3" htmlFor="regionNameSearch">Enter Region Name:</label>
                                    <div className="col-sm-4">
                                        <input type="text" className="form-control" id="regionNameSearch" placeholder="Enter Region Name"  value={regionNameSearch} onChange={(e) => setRoleNameSearch(e.target.value)}/>
                                    </div>
                                </form>
                                <button type="submit" className="btn btn-primary" onClick={() => searchRoleName(regionNameSearch)}>Search</button>
                            </div>
                        </div>
                        <div className="col-sm-4"><button type="button" className="btn btn-primary" data-toggle="modal" data-target="#saveRole">Add Region</button></div>
                    </div>

                    <div className="row">

                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th className="text-center">Sr No</th>
                                    <th className="text-center">Region Name</th>
                                    <th className="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    regions.map(
                                        (region, index) =>   //index is inbuilt variable of map started with 0
                                            <tr key={region.regionId}>
                                                <td className="text-center">{index + 1}</td>
                                                <td>{role.roleName}</td>
                                                <td> <button type="submit" className="btn btn-info" data-toggle="modal" data-target="#updateRole" onClick={() => showRoleById(region.regionId)}>Update</button>
                                                    <button type="submit" className="btn col-sm-offset-1 btn-danger" onClick={() => deleteRoleById(region.regionId)}>Delete</button>
                                                    <button type="submit" className="btn col-sm-offset-1 btn-success" data-toggle="modal" data-target="#showData" onClick={() => showRoleById(region.regionId)}>View</button></td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>

                </div>
                <div className="col-md-2"></div>

            </div>

            {/* Modal for save role details */}
            <div className="modal fade" id="saveRegion" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Add Region</h4>
                        </div>
                        <div className="modal-body">
                            <form className="form-horizontal">
                                <div> <input type="hidden" id="regionId" name="regionId" value={regionId} /></div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4" htmlFor="deptName">Enter Region Name:</label>
                                    <div className="col-sm-8">
                                        <input type="text" className="form-control" id="regionName" placeholder="Enter Region Name here" value={regionName} onChange={(e) => setRegionName(e.target.value)} />
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
                            <button type="submit" className="btn btn-success" data-dismiss="modal" onClick={(e) => saveRole(e)} > Submit</button>
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                    </div>

                </div>
            </div>

            {/* Modal for update Role details */}
            <div className="modal fade" id="updateRole" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Update Role</h4>
                        </div>
                        <div className="modal-body">
                            <form className="form-horizontal">
                                <div> <input type="hidden" id="roleId" name="roleId" value={roleId} /></div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4" htmlFor="roleName">Enter Role Name:</label>
                                    <div className="col-sm-8">
                                        <input type="text" className="form-control" id="roleName" placeholder="Enter Role Name here" value={roleName} onChange={(e) => setRoleName(e.target.value)} />
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
                            <button type="submit" className="btn btn-success" data-dismiss="modal" onClick={(e) => updateRole(e)} > Submit</button>
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                    </div>

                </div>
            </div>


            {/* Modal for show Role when user click on view button */}
            <div className="modal fade" id="showData" role="dialog">
                <div className="modal-dialog">

                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Role Details</h4>
                        </div>
                        <div className="modal-body">
                            <form className="form-horizontal">
                                <div> <input type="hidden" id="roleId" name="roleId" value={roleId} /></div>
                                <div className="form-group">
                                    <label className="control-label col-sm-4" htmlFor="roleName" >Role Name:</label>
                                    <div className="col-sm-8">
                                        {roleName}
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