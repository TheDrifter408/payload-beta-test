import { User } from "@/payload-types";
import { FieldAccess } from "payload";

export const canCreateField:FieldAccess<User> = ({ req:{ user } }) => {
    if(user && typeof user.role?.value !== 'number'){
        if(user.role?.value.create === true){
            return true;
        } else {
            return false;
        }
    }   
    return false;
}
export const canReadField:FieldAccess<User> = ({ req:{ user } }) => {
    if(user && typeof user.role?.value !== 'number'){
        if(user.role?.value.read === true){
            return true;
        } else {
            return false;
        }
    }   
    return false;
}
export const canUpdateField:FieldAccess<User> = ({ req:{ user } }) => {
    if(user && typeof user.role?.value !== 'number'){
        if(user.role?.value.update === true){
            return true;
        } else {
            return false;
        }
    }   
    return false;
}
export const canDeleteField:FieldAccess<User> = ({ req:{ user } }) => {
    if(user && typeof user.role?.value !== 'number'){
        if(user.role?.value.delete === true){
            return true;
        } else {
            return false;
        }
    }   
    return false;
}