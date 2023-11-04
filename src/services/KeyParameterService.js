import axios from "axios";

const DEPARTMENT_URL="http://localhost:9091/designation/department";
const BASE_URL="http://localhost:9091/key-perform-parameter";



class KeyParameterService{

    
    getDpartmentDetails(){
        return axios.get(DEPARTMENT_URL)
    }

    saveKPPDetails(kpp){
        console.log("save kpp")
        return axios.post(BASE_URL,kpp)
    }

    getKPPDetails(){
        return axios.get(BASE_URL)
    }

    getKPPDetailsByPaging(){
        return axios.get("http://localhost:9091/key-perform-parameter/search?statusCd=A&page=0&size=20&sort=dept.dept_name");
    }
    
    getKppById(kppId){
 console.log(kppId)
        return axios.get(BASE_URL+'/'+kppId)
    }
    
    getDepartmentById(deptId){
        console.log("grt call")
        return axios.get(BASE_URL+'/'+deptId)
    }

    updateKppDetails(kpp){

        return axios.put(BASE_URL, kpp)
    }

   

}

export default new KeyParameterService()
