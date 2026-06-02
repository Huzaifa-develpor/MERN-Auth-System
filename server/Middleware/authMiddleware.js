const jwt = require("jsonwebtoken")

const checkToken=(req,res,next)=>{
    const authHeader=req.header('Authorization')
    if(!authHeader){
        return res.send({
            message:"No token "
        })
    }

    const token=authHeader.replace("Bearer","")
    const decoded=jwt.verify(token,process.env.SECRET)
    req.user=decoded

    next()
}

module.exports=checkToken