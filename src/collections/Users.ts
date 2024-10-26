import { isAdmin } from '@/access/isAdmin'
import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  access:{
    create:isAdmin,
    update: isAdmin,
    read:isAdmin,
    delete: isAdmin,
  },
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      name:'name',
      type:'text'
    },
    {
      name:'role',
      type:'relationship',
      saveToJWT:true,
      relationTo:["role"],
      hasMany:false,
    }
  ],
}
