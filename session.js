/**
 * Created by 12934 on 2018/7/31.
 */
const express=require('express');
const cookieParser=require('cookie-parser');
const session=require('express-session');

const server=express();

//启用cookie parser 设置秘钥
let cookiesigned='h5';
server.use(cookieParser(cookiesigned));

//启用session中间件
server.use(session({
    secret:cookiesigned,//使用cookie签名加密
    name:'sessid',
    resave:true,//刷新重置生命周期
    saveUninitialized:false,//无论有没有sseeion cookie 每次请求都设置session cookie  默认标志 connect.id
    cookie:{maxAge:1655616566} //生命周期
}));
server.get('/set',(req,res)=>{
    req.session.username='qux';
    req.session.age=20;
    res.send('session shezhiwanc');
});
server.get('clear',(req,res)=>{
    delete req.session.username;

});



server.listen(81);