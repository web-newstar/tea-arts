const express=require("express")
const path=require("path")
const router=express.Router()
const loginSql=require(path.resolve(__dirname,"..","mysql.js"))
const crypto=require("crypto")
router.get("/",(req,res)=>{
    if(req.session.login){
        res.redirect('/admin/index');
        return;
    }
    if(req.cookies.hash){
        loginSql.query("select * from admin_user where hash=?",[req.cookies.hash],(err,data)=>{
            if(data.length){
                req.session.login=true
                res.redirect('/admin/index');
            }else{
                var login=path.resolve(__dirname,"..","www","views","login.html")
                res.sendFile(login)
            }

        })
    }else{
        var login=path.resolve(__dirname,"..","www","views","login.html")
        res.sendFile(login)
    }


})
router.get("/loginOut",(req,res)=>{
    req.session.login=null;
    res.clearCookie('hash',{path:'/'});
    res.redirect('/login');
})
router.post("/check",(req,res)=>{
    const hash = crypto.createHash('md5');
    hash.update(req.body.password);
    const password=hash.digest('hex');
    var sql="select * from admin_user where account=? and password=?"
    loginSql.query(sql,[req.body.userName,password],(err,data)=>{
        if(data.length){
            console.log(req.body.remember)
            if(req.body.remember){
                res.cookie('hash',data[0].hash,{expires:new Date(Date.now()+9000000),path:'/'});
            }
            req.session.login=true;
            res.json('ok');
        }else{
            res.json("err")
        }

    })

});
//导入后台评论页面
router.get('/messageAdmin',function (req,res) {
    res.sendFile(path.resolve('./www/views/admin/school.html'));
});
module.exports=router
