const { hash } = require('bcrypt')
/* write your server code here */
const {Router} = require('express')
const checkToken = require('../middleware/auth')
const router =router()
const USERS =[
  { email: "admin@email.com", name: "admin", password: "hash(Rc123456!)", isAdmin: true }
]
const INFORMATION =[]
router.post('/register',(req,res)=>{
  const {email, user, password} = req.body
  const user = USERS.find(x=>x.email===email)
  if(user){
    USERS.push({
      email, name:user, password:hash(password), isAdmin:false
    })
    INFORMATION.push({
      name:user, info: `${user} info`
    })
    res.status(201).send("Register Success")
  }else{
    res.status(409).send("user already exists")
  }

})
router.post('/login',(req,res)=>{
  const {email,password} = req.body
  const user = USERS.find(x=>x.email===email)
  if(!user){
    res.status(404).send("user already exists")
  }else{
    const passwordHash = hash(password)
    if(user.password===passwordHash){
      res.status(200).json({
        accessToken,refreshToken,userName:user.name,isAdmin
      })
    }else
  }
})


module.exports= router