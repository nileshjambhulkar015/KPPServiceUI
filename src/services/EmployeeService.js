import axios from "axios";

const DEPARTMENT_URL="http://localhost:9091/designation/department";
const BASE_URL="http://localhost:9091/employee";



class EmployeeService{

    getDpartmentDetails(){
        return axios.get(DEPARTMENT_URL)
    }

    saveEmployeeDetails(employee){
        return axios.post(BASE_URL,employee)
    }

    getEmployeeDetailsByPaging(){
        return axios.get("http://localhost:9091/employee/search?statusCd=A&page=0&size=20&sort=emp.emp_fname");
    }
    
    getEmployeeById(empId){
 console.log(empId)
        return axios.get(BASE_URL+'/empId?empId='+empId)
    }
    
    getDepartmentById(deptId){
        console.log("grt call")
        return axios.get(BASE_URL+'/'+deptId)
    }

    updateEmployeeDetails(employee){

        return axios.put(BASE_URL, employee)
    }

   

}

export default new EmployeeService()
