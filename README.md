# Payload Beta test
The purpose is to show role based access, where the admin can create the roles with levels of access.

## Password credentials:
1. Admin:
    email:admin@admin.com
    pass:admin
2. Editor:
    email:editor@editor.com
    pass:editor
3. Contributer:
    email:contributer@contributer.com
    pass:contributer

# What Works:

- Admins can create roles with names and each role having either **All** *CRUD* access or some.
- Admin has access to *create*,*read*,*update* and *delete* to all 
- Editor *create* and *update* articles
- Editor and Contributer **CANNOT** delete an article
- Contributer can **ONLY** read articles

# What I haven't achieved:
I haven't been able to configure it so that a particular user with the role `contributer` being able to update only an individual field 'Comments' in the articles table.

## How to run it:
```bash
git clone git@github.com:TheDrifter408/payload-beta-test.git
```

```bash
cd payload-beta-test
npm install npm run dev
```