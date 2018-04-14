var formidable = require('formidable');

// 引入类
var  Student = require("./Student.js"); //已连接数据库



exports.showIndex = function(req,res,next){
    Student.find({},function(err,result){
        res.render("index",{
            "students": result
        })
    })
}

// 插入表单
exports.showAdd = function(req,res,next){
    res.render("add");
}
// 执行插入
exports.doAdd = function(req,res,next){
    // 上传表单
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        // console.log(fields);
        var studentdoc = fields;
        // 获取数据存入数据库
        Student.create(studentdoc,function(){
            // console.log('插入成功');
            res.redirect("/");
        });

    })
}

// 修改表单
exports.showEdit = function(req,res,next){
    // 获取sid
    var sid = parseInt(req.params["sid"]);
    // 查找数据库展示数据在修改页
    Student.findOne({"sid":sid},function(err,result){
        if(err || !result){
            res.send("error")
            return;
        }
        res.render("edit",{
            'students': result
        });
    })

}

// 提交修改
exports.doEdit = function(req,res,next){
    // 上传表单
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        // 获取sid
        var sid = parseInt(req.params["sid"]);
        // 查找更新数据库
        Student.update({"sid":sid},{$set:fields},function(err,result){
            // res.send("修改成功");
            res.redirect("/");
        })
    })
}

// 删除某条数据
exports.doRemove = function(req,res,next){
    var sid = parseInt(req.params["sid"]);
    Student.remove({"sid":sid},function(err){
        if(err){
            console.log(err);
            return;
        }
        // res.send("删除成功");
        res.redirect("/");
    })
}