import axios from "axios";

const BASE_URL="http://localhost:9091/key-perform-parameter?deptId=47&desigId=10&statusCdEnum=A";


class EmployeeKppsService{

    getKPPDetails(){
        return axios.get(BASE_URL)
    }
   
}


export default new EmployeeKppsService();