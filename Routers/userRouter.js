const express=require('express');
const userModel = require('../Models/userModel');
const protectRoute = require('./authHelper');
const {getUsers,postUser,updateUser,deleteUser,getUserById}=require('../controller/userController.js');

const userRouter = express.Router();

userRouter
.route("/")
.get(protectRoute,getUsers)
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

module.exports = userRouter;