const mongoose = require('mongoose');
const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');

const db_link='mongodb+srv://albabahmed97:1tc6eJcBATRlxoyW@cluster0.tosuya4.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(db_link)
.then(function(db){
    // console.log(db);
    console.log('db connected');
})
.catch(function(err){
    console.log(err);
})

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:function(){
            return emailValidator.validate(this.email);
        }
    },
    password:{
        type:String,
        required:true,
        minLength:8
    },
    confirmPassword:{
        type:String,
        required:true,
        minLength:8,
        validate:function(){
            return this.confirmPassword == this.password;
        }
    }
});

//hooks
// userSchema.pre('save',function(){
//     console.log('before saving in db',this);
// });
// userSchema.post('save',function(doc){
//     console.log('after saving in db',doc);
// });

userSchema.pre('save',function(){
    console.log('before saving in db');
    this.confirmPassword=undefined;
});

// Hashing - using bcrypt
userSchema.pre('save',async function(){
    let salt=await bcrypt.genSalt();
    let hashedString=await bcrypt.hash(this.password,salt);
    this.password = hashedString;
    // console.log(hashedString);
});

//Model
const userModel = mongoose.model('userModel',userSchema);

// (async function createUser(){
//     let user={
//         name:'Abhishek',
//         email:'abc@gmail.com',
//         password:'12345678',
//         confirmPassword:'12345678'
//     };
//     let data=await userModel.create(user);
//     console.log(data);
// })();

module.exports = userModel;