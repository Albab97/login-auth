const express=require('express');
const userModel = require('../Models/userModel');
const cookieParser = require('cookie-parser');

const userRouter = express.Router();

userRouter
.route("/")
.get(getUsers)
.post(postUser)
.patch(updateUser)
.delete(deleteUser);

// userRouter.route("/:id").get(getUserById);

let users=[
    {
        'id':1,
        'name':"Abhishek"
    },{
        'id':2,
        'name':"Jasbir"
    },{
        'id':3,
        'name':"Kartik"
    }
];

// app.get('/user',
// })
// // whatever data we send from frontend to backend , it goes to the body of req.
// app.post('/user',)
// //patch -> update
// app.patch('/user',)
// // to delete data
// app.delete('/user',); 

//Mini-app

async function getUsers(req,res){ 
    // console.log(req.query);
    let allUsers = await userModel.find();
    res.json({
        message:'list of all users',
        data:allUsers
    });
}
function postUser(req,res){
    console.log(req.body);
    users=req.body;
    res.json({
        message:"data received successfully."
    });
};
function updateUser(req,res){
    console.log('req.body ->',req.body);
    let dataToBeUpdated = req.body;
    for(key in dataToBeUpdated){
        users[key]=dataToBeUpdated[key];
    }
    res.json({
        message:"data patched successfully."
    });
};
function deleteUser(req,res){
    users={};
    res.json({
        message:"data has been deleted"
    });
};
function getUserById(req,res){
    console.log(req.params.id);
    let paramId = req.params.id;
    let obj={};
    for(let i=0;i<users.length;i++){
        if(users[i]['id']==paramId){
            obj=users[i];
        }
    }
    res.json({
        message:"req received",
        data:obj
    });
};

module.exports = userRouter;