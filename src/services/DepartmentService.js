import axios from "axios";

const BASE_URL="http://localhost:9091/department";


class DepartmentService{

    getDpartmentDetails(){
        return axios.get(BASE_URL)
    }

    saveDpartmentDetails(department){
        return axios.post(BASE_URL,department)
    }

    getDepartmentById(deptId){

        return axios.get(BASE_URL+'/'+deptId)
    }

    updateDepartmentDetails(department){
        return axios.put(BASE_URL, department)
    }
    getDpartmentDetailsByPaging(){
        return axios.get("http://localhost:9091/department/search?statusCd=A&page=0&size=20&sort=role.role_name asc")
    }

    getDpartmentDetailsByDeptNamePaging(deptName){
        return axios.get(`http://localhost:9091/department/search?deptName=${deptName}&statusCd=A&page=0&size=20&sort=dept.dept_name`)
    }

    //Get all roles present in department table for designation form
    getRolesInDept(){
        return axios.get("http://localhost:9091/roles/department/role")
    }

       //Get all roles present in department table for designation form
       getDepartmentByRoleId(roleId){
        console.log(roleId);
        return axios.get(BASE_URL+'/dept/'+roleId)
    }

         //Get all roles present in department table from designation for KPP
         getDepartmentByRoleIdFromDesign(roleId){
            console.log(roleId);
            return axios.get(BASE_URL+'/desig/'+roleId)
        }
   
}


export default new DepartmentService();