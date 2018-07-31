/**
 * Created by 12934 on 2018/8/1.
 */
const express=require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const svgcaptcha=require('svg-captcha');
const server=express();
let cookiesigned='h5';
server.use(cookieParser(cookiesigned));
server.use(session({
    secret:cookiesigned,
    name:'sessid',
    resave:true,
    saveUninitialized:false,
    cookie:{maxAge:5959595}
}));
server.get('/coderimg',function (req,res) {
    var captcha=svgcaptcha.create({
        size:6,
        ignoreCase:'o0li1z2',
        noise:5,
        color:true,
        background:'#f57',
        width:100,
        height:52
    });
    req.session.captcha=captcha.text;
    res.type('svg');
    res.status(200).send(captcha.data);



});

server.listen(81);