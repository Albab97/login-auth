const jwt=require('jsonwebtoken');
const JWT_KEY='ggkjghwliuyw675298';

function protectRoute(req,res,next){
    if(req.cookies.login){
        let isVerified = jwt.verify(req.cookies.login,JWT_KEY);
        if(isVerified){
            next();
        }else{
            return res.json({
                message:"user not verified"
            });
        }
    }else{
        return res.json({
            message:"operation not allowed, user needs to login first"
        });
    }
};

module.exports=protectRoute;