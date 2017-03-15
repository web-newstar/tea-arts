//搭建服务器
var express=require("express");
var app=express();
const path=require("path")
const cookieParser=require("cookie-parser")
app.use(cookieParser());
//压缩
const compression = require('compression');
app.use(compression());
//构建静态目录
const www=path.resolve(__dirname,"www")
app.use(express.static(www))
//处理post
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const index=path.resolve(__dirname,"router","index");
const login=path.resolve(__dirname,"router","login");
const admin=path.resolve(__dirname,"router","admin");

//创建session
const session = require('express-session');
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));


const indexRouter=require(index)
const loginRouter=require(login)
const adminRouter=require(admin)
app.use("/login",loginRouter)
app.use("/admin",(req,res,next)=>{
    if(req.session.login){
        next()
    }else{
        res.redirect("/login")
    }
})

app.use("/login",loginRouter)
app.use('/',indexRouter)
app.use("/admin",adminRouter)
app.listen(4000,()=>{
    console.log("服务已经启动")
    console.log("访问4000接口")
})

