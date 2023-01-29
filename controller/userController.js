const userModel = require('../Models/userModel');

module.exports.getUsers=async function getUsers(req,res){ 
    // console.log(req.query);
    let allUsers = await userModel.find();
    res.json({
        message:'list of all users',
        data:allUsers
    });
};
module.exports.postUser=function postUser(req,res){
    console.log(req.body);
    users=req.body;
    res.json({
        message:"data received successfully."
    });
};
module.exports.updateUser=function updateUser(req,res){
    console.log('req.body ->',req.body);
    let dataToBeUpdated = req.body;
    for(key in dataToBeUpdated){
        users[key]=dataToBeUpdated[key];
    }
    res.json({
        message:"data patched successfully."
    });
};
module.exports.deleteUser=function deleteUser(req,res){
    users={};
    res.json({
        message:"data has been deleted"
    });
};
// module.exports.getUserById=function getUserById(req,res){
//     console.log(req.params.id);
//     let paramId = req.params.id;
//     let obj={};
//     for(let i=0;i<users.length;i++){
//         if(users[i]['id']==paramId){
//             obj=users[i];
//         }
//     }
//     res.json({
//         message:"req received",
//         data:obj
//     });
// };