import { Access } from "payload";
import { User } from "@/payload-types";
 
export const isAdmin:Access<User> = ({ req:{ user } }) => {
    if(user && typeof user.role?.value !== 'number'){
        if(user.role?.value?.role === 'admin'){
            return true;
        } else {
            return false;
        }
    }   
    return false;
}