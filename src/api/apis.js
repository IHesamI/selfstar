import { axiosObj } from "./config";


/**
 * @param {{email:string,password:string}} payload 
 * 
*/
export async function loginApi(payload){
    const result =await axiosObj.post("/users/login", payload);
    return result.data
}


/**
 * @param {{
 * educationHistory:string,
 * email:string,
 * last_name:string,
 * name:string,
 * password:string,
 * links:{title:string,link:string}[],
 * lang:"fa"|"en"
 * }} payload 
 * 
*/
export async function editProfile(payload){
    const result =await axiosObj.put("/profile/profile-edit-infos", payload);
    return result.data
}
