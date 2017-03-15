const express=require("express")
const path=require("path")
const route=express.Router();
const mysql=require("../mysql.js")
//这是主页
route.get("/index",function(req,res){
    var index=path.resolve(__dirname,"..","www","views","index.html")
    res.sendFile(index)
})
route.get("/banner_all",(req,res)=>{
    var sql="select * from banner"
    mysql.query(sql,[],(err,data)=>{
        res.json(data)
    })
})
//这是关于茗悦
route.get("/about",function(req,res){
    var contents=path.resolve(__dirname,"..","www","views","T_two1.html")
    res.sendFile(contents)
})
route.get("/about/:cate_id",function(req,res){
    var num=req.params.cate_id
    var content=path.resolve(__dirname,"..","www","views","T_two"+num+".html")
    res.sendFile(content)

})
route.get("/about/:cate_id/:page_id",function(req,res){
    var num=req.params.cate_id
    var content=path.resolve(__dirname,"..","www","views","t_content"+num+".html")
    res.sendFile(content)

})
//这是最新动态
route.get("/new",function(req,res){
    var content=path.resolve(__dirname,"..","www","views","new1.html")
    res.sendFile(content)
})
route.get("/new/:cate_id",function(req,res){
    var num=req.params.cate_id
    var content=path.resolve(__dirname,"..","www","views","new"+num+".html")
    res.sendFile(content)

})
route.get("/new/:cate_id/:page_id",function(req,res){
    var num=req.params.cate_id
    var content=path.resolve(__dirname,"..","www","views","newthree"+num+".html")
    res.sendFile(content)

})
//这是培训课程
route.get("/class",function(req,res){
    var content=path.resolve(__dirname,"..","www","views","M_two1.html")
    res.sendFile(content)
})
route.get("/class/:cate_id",function(req,res){
    var num=req.params.cate_id
    var content=path.resolve(__dirname,"..","www","views","M_two"+num+".html")
    res.sendFile(content)

})
route.get("/class/:cate_id/:page_id",function(req,res){
    var num=req.params.page_id
    console.log(num)
    var content=path.resolve(__dirname,"..","www","views","M_three"+num+".html")
    res.sendFile(content)

})
//这是讲座表演
route.get("/perform",function(req,res){
    var content=path.resolve(__dirname,"..","www","views","q_two1.html")
    res.sendFile(content)
})
route.get("/perform/:cate_id",function(req,res){
    var num=req.params.cate_id
    var content=path.resolve(__dirname,"..","www","views","q_two"+num+".html")
    res.sendFile(content)

})
route.get("/perform/:cate_id/:page_id",function(req,res){
    var content=path.resolve(__dirname,"..","www","views","M_three"+num+".html")
    res.sendFile(content)

})
//这是茶学堂
route.get("/school",function(req,res){
    var content=path.resolve(__dirname,"..","www","views","school1.html")
    res.sendFile(content)
})
route.get("/school/:cate_id",function(req,res){
    var num=req.params.cate_id
    var content=path.resolve(__dirname,"..","www","views","school"+num+".html")
    res.sendFile(content)

})
route.get("/school/:cate_id/:page_id",function(req,res){
    var num=req.params.page_id
    console.log(num)
    var content=path.resolve(__dirname,"..","www","views","L_three"+num+".html")
    res.sendFile(content)

})
//这是联系我们
route.get("/contact",function(req,res){
    var contents=path.resolve(__dirname,"..","www","views","t_content.html")
    res.sendFile(contents)
})
module.exports=route
