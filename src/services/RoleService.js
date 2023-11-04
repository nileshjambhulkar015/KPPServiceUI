import axios from "axios";

const BASE_URL="http://localhost:9091/roles";


class RoleService{

    getRoles(){
        return axios.get(BASE_URL)
    }

    saveRolesDetails(role){
        return axios.post(BASE_URL,role)
    }

    getRoleById(roleId){

        return axios.get(BASE_URL+'/'+roleId)
    }

    updateRoleDetails(role){
        return axios.put(BASE_URL, role)
    }
    
    getRolesDetailsByPaging(){
        return axios.get("http://localhost:9091/roles/search?searchEnum=BY_STATUS&statusCdEnum=A&page=0&size=20&sort=roleName")
    }
   
}


export default new RoleService();