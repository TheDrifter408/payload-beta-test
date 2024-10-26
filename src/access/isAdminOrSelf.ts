import { User } from "@/payload-types";
import { Access } from "payload";


export const isAdminOrSelf:Access<User> = ({ req:{ user } }) => {
    if(user && typeof user.role?.value !== 'number'){
        if(user.role?.value.role === 'admin'){
            return true;
        } else {
            return {
                id:{
                    equals:user.id
                }
            }
        }
    }
    return false;
}