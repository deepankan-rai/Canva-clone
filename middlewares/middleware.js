const jwt = require('jsonwebtoken')

const auth = async (req,res,next) => {
    const {authorization} = req.headers

    if(authorization){
        const token = authorization.split(' ')[1]
        if(token){
            try {
                const userInfo = await jwt.verify(token,'Deepankan')
                req.userInfo = userInfo
                next()
            } catch (error) {
                return res.status(401).json({
                    message:"Unauthorized"
                })
            }
        }else{
            return res.status(401).json({
                message:"Unauthorized"
            })
        }
    }else{
        return res.status(401).json({
            message:"Unauthorized"
        })
    }

}

module.exports= auth