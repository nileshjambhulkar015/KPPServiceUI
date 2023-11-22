import axios from "axios";

const DEPARTMENT_URL = "http://localhost:9091/designation/department";
const DESIGNATION_URL = "http://localhost:9091/designation/by";
const BASE_URL = "http://localhost:9091/employee";



class EmployeeService {

     //Get all roles present in designation table 
     getRolesInDesignation(){
        return axios.get("http://localhost:9091/roles/designation/roles")
    }



    /*getDpartmentDetails() {
        return axios.get(DEPARTMENT_URL)
    }*/

  /*  getDesignationByDeptId(deptId) {
     console.log(DESIGNATION_URL)
        return axios.get(`http://localhost:9091/designation/by/${deptId}`)
    }*/
    
    saveEmployeeDetails(employee) {
        return axios.post(BASE_URL, employee)
    }

    getEmployeeDetailsByPaging() {
        return axios.get("http://localhost:9091/employee/search?statusCd=A&page=0&size=20&sort=emp.emp_fname");
    }

    getEmployeeDetailsByEmpFirstNamePaging(empFirstName){
        return axios.get(`http://localhost:9091/employee/search?empFirstName=${empFirstName}&statusCd=A&page=0&size=20&sort=emp.emp_name`)
    }

    getEmployeeById(empId) {
        console.log(empId)
        return axios.get(BASE_URL + '/' + empId)
    }

    /*getDepartmentById(deptId) {
        console.log("grt call")
        return axios.get(BASE_URL + '/' + deptId)
    }*/

    updateEmployeeDetails(employee) {

        return axios.put(BASE_URL, employee)
    }

    getEmployeeSuggest(roleId) {
        console.log("EmployeeService"+roleId)
      
       // return axios.get("http://localhost:9091/employee/suggest?roleId="+roleId+"&deptId="+deptId+"&desigId="+desigId);
       return axios.get("http://localhost:9091/employee/suggest?roleId="+roleId);
    }


}

export default new EmployeeService()
