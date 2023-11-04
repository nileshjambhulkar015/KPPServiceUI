import axios from "axios";

const DEPARTMENT_URL = "http://localhost:9091/designation/department";
const DESIGNATION_URL = "http://localhost:9091/designation/by";
const BASE_URL = "http://localhost:9091/employee";



class EmployeeService {

    getDpartmentDetails() {
        return axios.get(DEPARTMENT_URL)
    }

    getDesignationByDeptId(deptId) {
     console.log(DESIGNATION_URL)
        return axios.get(`http://localhost:9091/designation/by/${deptId}`)
    }
    
    saveEmployeeDetails(employee) {
        return axios.post(BASE_URL, employee)
    }

    getEmployeeDetailsByPaging() {
        return axios.get("http://localhost:9091/employee/search?statusCd=A&page=0&size=20&sort=emp.emp_fname");
    }

    getEmployeeById(empId) {
        console.log(empId)
        return axios.get(BASE_URL + '/empId?empId=' + empId)
    }

    getDepartmentById(deptId) {
        console.log("grt call")
        return axios.get(BASE_URL + '/' + deptId)
    }

    updateEmployeeDetails(employee) {

        return axios.put(BASE_URL, employee)
    }



}

export default new EmployeeService()
