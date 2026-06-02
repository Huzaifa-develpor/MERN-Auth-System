const jwt = require('jsonwebtoken')

const getToken=(id)=>{
    return jwt.sign(
        {id},
        process.env.SECRET,
        {expiresIn:"2d"}
    )
}

module.exports=getToken

