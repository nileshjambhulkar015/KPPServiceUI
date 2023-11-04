import axios from "axios";

const DEPARTMENT_URL = "http://localhost:9091/department";
const DESIGNATION_URL = "http://localhost:9091/designation";



class DesignationService {

    getDpartmentDetails() {
        return axios.get(DEPARTMENT_URL)
    }


    getDesignationDetailsByPaging() {
        return axios.get("http://localhost:9091/designation/search?statusCd=A&page=0&size=20&sort=role.role_id")
    }


    saveDesignationDetails(designation) {
        return axios.post(DESIGNATION_URL, designation)
    }

    getDesignationById(desigId) {
        console.log(desigId)
        return axios.get(DESIGNATION_URL + '/' + desigId)
    }

    updateDesignationDetails(designation) {

        return axios.put(DESIGNATION_URL, designation)
    }

}

export default new DesignationService()