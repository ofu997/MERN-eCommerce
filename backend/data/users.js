import bcrypt from 'bcryptjs' 

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true, 
  },
  {
    name: 'Mickey Mouse',
    email: 'admin@yahoo.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true, 
  },
  {
    name: 'Jake The Dog',
    email: 'admin@icloud.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true, 
  }, 
]

export default users