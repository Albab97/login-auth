const express = require('express');
const app = express();
const userRouter = require('./Routers/userRouter');
const authRouter=require('./Routers/authRouter');
const cookieParser=require('cookie-parser');

app.use(express.json());
app.listen(3000);
app.use(cookieParser()); //so that we can access our cookies in req and res.

app.use('/user',userRouter);
app.use('/auth',authRouter);

// userRouter
// .route("/getCookies")
// .get(getCookies);

// userRouter
// .route("/setCookies")
// .get(setCookies);

// function setCookies(req,res){
//     res.cookie('isPrimeMember',true,{maxAge:1000*60*60*24,secure:true,httpOnly:true});
//     res.send('cookie has been set yaar');
// }
// function getCookies(req,res){
//     let cookies=req.cookies;
//     console.log(cookies);
//     res.send('cookies received');
// }