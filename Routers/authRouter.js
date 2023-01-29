const express=require('express');
const userModel = require('../Models/userModel');

const authRouter = express.Router();

authRouter
.route("/signup")
.get(getSignUp)
.post(postSignUp)
.patch(updateUser)
.delete(deleteUser)

authRouter
.route("/login")
.post(loginUser)

function getSignUp(req,res){
    console.log(req.body);
}
async function postSignUp(req,res){
    let dataObj = req.body;
    let user = await userModel.create(dataObj);
    console.log(dataObj);
    res.json({
        message:'user signed up',
        data:user
    });
}
async function updateUser(req,res){
    let dataToBeUpdated = req.body;
    let user = await userModel.findOneAndUpdate({email:'ag11@gmail.com'},dataToBeUpdated);
    res.json({
        message:'user updated successfully'
    });
}
async function deleteUser(req,res){
    let dataToBeDeleted = req.body;
    let user = await userModel.findOneAndDelete(dataToBeDeleted);
    res.json({
        message:'User deleted successfully',
        data:user
    });
}

async function loginUser(req,res){
    let dataObj = req.body;
    let user = await userModel.findOne({email:dataObj.email});
    try{
        if(user){
            if(user.password == dataObj.password){
                res.json({
                    message:"user successfully logged in",
                    data:user
                });
            }else{
                res.json({
                    message:"Incorrect password"
                });
            }
        }else{
            res.json({
                message:"user doesn't exist"
            });
        }
    }catch(err){
        res.json({
            message:err
        });
    }
}

module.exports=authRouter;