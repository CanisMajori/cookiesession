/**
 * Created by 12934 on 2018/7/31.
 */
const express=require('express');
const cookieParser=require('cookie-parser');
const app=express();

//启用cookieparser并设置秘钥
let coo='h5';
app.use(cookieParser(coo));
app.get('/',(req,res)=>{
    res.cookie('name','qx');
    res.cookie('pas','sss',{path:'/',maxAge:6000000,signed:true});
    res.send('cookie设置好啦');
});

//页面查看cookie
app.get('/get',(req,res)=>{
    console.log(req.cookies);
    console.log(req.signedCo0okies);
    res.send(req.cookies);

});
//清除cookie
app.get('/clear',(req,res)=>{
    res.clearCookie('name');
    res.clearCookie('pas');
    res.send('成功清除cookie啦');
});



app.listen(81);