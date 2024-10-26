import { canCreate, canDelete, canRead, canUpdate } from "@/access/DynamicAccess";
import { CollectionConfig } from "payload";

export const Article:CollectionConfig = {
    slug:'article',
    access:{
        create:canCreate,
        read:canRead,
        update:canUpdate,
        delete:canDelete
    },
    admin:{
        useAsTitle:'title'
    },
    fields:[
        {
            name:'title',
            type:'text',
        },
        {
            name:'body',
            type:'text',
        },
        {
            name:'comments',
            type:'text',
        },
        {
            name:'createdBy',
            label:'Created By',
            type:'relationship',
            relationTo:'users',
            access:{
                create: () => false,
                update: () => false,
                read: () => true,
            }
        }
    ],
    hooks: {
        beforeChange:[
            ({req,operation,data}) => {
                if(operation === 'create'){
                    if(req.user){
                        data.createdBy = req.user.id;
                        return data;
                    }
                }
            }
        ]
    }
}