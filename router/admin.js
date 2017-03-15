const express=require("express")
const path=require("path")
const router=express.Router()
const mysql=require("../mysql.js")

const fs=require('fs');
const async = require('async');

const multer=require('multer');
const upload=multer({dest:'uploads/'});


router.get("/index",(req,res)=>{
    var admin=path.resolve(__dirname,"..","www","views","admin","admin.html")
    res.sendFile(admin);
})
router.get("/index/:cate_id",function(req,res){
    var content=path.resolve(__dirname,"..","www","views","admin","admin.html")
    res.sendFile(content)

})
router.get("/banner_all",(req,res)=>{
    var sql="select * from banner "
    mysql.query(sql,[],(err,data)=>{
        res.json(data)
    })
})
router.get("/banner/add",(req,res)=>{
    var sql='insert into banner (ban_img) values ("lt_1.png")'
    mysql.query(sql,(err,result)=>{
        res.json(result.insertId);
    })
})
router.get("/banner/del/:id",(req,res)=>{
    mysql.query('delete from banner where ban_id=?',[req.params.id],(err,result)=>{
        if (!err) {
            res.json(result);
        }
    })
})
//这是关于茗悦
router.get("/about",function(req,res){
    var contents=path.resolve(__dirname,"..","www","views","admin","about1.html")
    res.sendFile(contents)
})
router.get("/about/:cate_id",function(req,res){
    var content=path.resolve(__dirname,"..","www","views","admin","about1.html")
    res.sendFile(content)

})
router.get("/about_all",(req,res)=>{
    var sql="select * from about "
    mysql.query(sql,[],(err,data)=>{
        res.json(data)
    })
})
router.get("/min/add",(req,res)=>{
    mysql.query('insert into about (about_china,about_english,about_url) values ("","","t_bg01.png")',(err,result)=>{
        res.json(result.insertId);
    })
})
router.get("/min/del/:id",(req,res)=>{
    mysql.query('delete from about where about_id=?',[req.params.id],(err,result)=>{
        if (!err) {
            res.json(result);
        }
    })
})
router.post('/min/update',(req,res)=>{
    if(req.body.about_china){
        mysql.query('update about set about_china=? where about_id=?',[req.body.about_china,req.body.about_id],(err,result)=>{
            res.json(result);
        })
    }else{
        mysql.query('update about set about_english=? where about_id=?',[req.body.about_english,req.body.about_id],(err,result)=>{
            res.json(result);
        })
    }

});
//这是最新动态
router.get("/new",function(req,res){
    var contents=path.resolve(__dirname,"..","www","views","admin","new.html")
    res.sendFile(contents)
})
router.get("/new/:cate_id",function(req,res){
    var content=path.resolve(__dirname,"..","www","views","admin","new.html")
    res.sendFile(content)
})
//这是培训课程
router.get("/class",function(req,res){
    var contents=path.resolve(__dirname,"..","www","views","admin","class1.html")
    res.sendFile(contents)
})
router.get("/class/:cate_id",function(req,res){
    var content=path.resolve(__dirname,"..","www","views","admin","class1.html")
    res.sendFile(content)
})

//这是讲座表演
router.get("/perform",function(req,res){
    var contents=path.resolve(__dirname,"..","www","views","admin","perform.html")
    res.sendFile(contents)
})
router.get("/perform/:cate_id",function(req,res){
    var num=req.params.cate_id
    var content=path.resolve(__dirname,"..","www","views","admin","perform.html")
    res.sendFile(content)
})
//这是茶学堂
router.get("/school",function(req,res){
    var contents=path.resolve(__dirname,"..","www","views","admin","school.html")
    res.sendFile(contents)
})
router.get("/school/:cate_id",function(req,res){
    var content=path.resolve(__dirname,"..","www","views","admin","school.html")
    res.sendFile(content)

});
router.get("/school_all",(req,res)=>{
    var sql="select * from school_cat "
    mysql.query(sql,[],(err,data)=>{
        res.json(data)
    })
})
router.get("/min/add",(req,res)=>{
    mysql.query('insert into school_cat (cat_china,cat_english,cat_url) values ("","","t_bg01.png")',(err,result)=>{
        res.json(result.insertId);
    })
})
router.get("/min/del/:id",(req,res)=>{
    mysql.query('delete from school_cat where cat_id=?',[req.params.id],(err,result)=>{
        if (!err) {
            res.json(result);
        }
    })
})
router.post('/min/update',(req,res)=>{
    if(req.body.cat_china){
        mysql.query('update school_cat set cat_china=? where cat_id=?',[req.body.cat_china,req.body.cat_id],(err,result)=>{
            res.json(result);
        })
    }else{
        mysql.query('update school_cat set cat_english=? where cat_id=?',[req.body.cat_english,req.body.cat_id],(err,result)=>{
            res.json(result);
        })
    }

});
//这是联系我们
router.get("/contact",function(req,res){
    var contents=path.resolve(__dirname,"..","www","views","admin","contact.html")
    res.sendFile(contents)
})
//这是在线报名
router.get("/contact/:cate_id",function(req,res){
    var content=path.resolve(__dirname,"..","www","views","admin","apply.html")
    res.sendFile(content)

});
//文件上传
/*
router.post('/upload',upload.single('file'),function (req,res) {
    async.series([
        function(callback){
            fs.createReadStream(req.file.path).pipe(fs.createWriteStream(path.resolve('uploads/',req.file.originalname)));
            callback(null)
        },
        function (callback) {
            fs.unlink(path.resolve(req.file.path));
            callback(null);
        }
    ],function () {
        res.end('ok');
    })
});
//富文本编辑器上传图片
router.post('/txt',upload.single('wangEditorH5File'),function (req,res) {
    var arr=req.file.originalname.split(".");
    var suffix=arr[arr.length-1]
    var o=fs.createWriteStream('www/public/images/'+req.file.filename+"."+suffix);
    fs.createReadStream(req.file.path).pipe(o);
    o.on('finish',(req,res)=>{
        fs.unlink(path.resolve(req.file.path));
    });
    res.end('/public/images/'+req.file.filename+"."+suffix);
});
*/

module.exports=router