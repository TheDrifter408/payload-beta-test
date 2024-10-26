import { User } from "@/payload-types"
import { Access } from "payload"

export const canCreate:Access<User> = ({ req: { user } }) => {
    if(user && typeof user.role?.value !== 'number'){
        if(user.role?.value.create === true){
            return true;
        } else {
            return false;
        }
    }   
    return false;
}

export const canRead:Access<User> = ({ req: { user } }) => {
    if(user && typeof user.role?.value !== 'number'){
        if(user.role?.value.read === true){
            return true;
        } else {
            return false;
        }
    }   
    return false;
}

export const canUpdate:Access<User> = ({ req: { user } }) => {
    if(user && typeof user.role?.value !== 'number'){
        if(user.role?.value.update === true){
            return true;
        } else {
            return false;
        }
    }   
    return false;
}

export const canDelete:Access<User> = ({ req: { user } }) => {
    if(user && typeof user.role?.value !== 'number'){
        if(user.role?.value.delete === true){
            return true;
        } else {
            return false;
        }
    }   
    return false;
}