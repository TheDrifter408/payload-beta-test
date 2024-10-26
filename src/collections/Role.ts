import { isAdmin } from "@/access/isAdmin";
import { CollectionConfig } from "payload";

//Dynamic Roles that the Admin can create

export const Role:CollectionConfig = {
    slug:'role',
    access: {
        create:isAdmin,
        read:isAdmin,
        update:isAdmin,
        delete:isAdmin,
    },
    admin:{
        useAsTitle:'role'
    },
    fields:[
        {
            name:'role',
            label:'Role',
            type:'text',
            hooks:{
                beforeChange: [({ value, operation}) => {
                    if(operation === 'create' || operation === 'update'){
                        value = value.toLowerCase();
                        return value;
                    } 
                }]
            }
        },
        {
            name:'create',
            label:'Create',
            type:'checkbox',
            defaultValue:false,
        },
        {
            name:'read',
            label:'Read',
            type:'checkbox',
            defaultValue:false,
        },
        {
            name:'update',
            label:'Update',
            type:'checkbox',
            defaultValue:false,
        },
        {
            name:'delete',
            label:'Delete',
            type:'checkbox',
            defaultValue:false
        },
    ]
}
