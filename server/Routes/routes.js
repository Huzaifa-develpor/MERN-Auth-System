const express= require('express')
const { registerUser, loginUser,viewUsers } = require("../Controllers/authController");
const checkToken=require("../Middleware/authMiddleware")

const router=express.Router()

router.post('/register',registerUser)
router.post('/login',loginUser)

router.get('/view-users',viewUsers)
module.exports=router