var mongoose = require("mongoose");
var db = require("../controller/db");

// 创建schema
var kechengSchema = new mongoose.Schema({
    kid:Number,
    name:String,
    students:[]     //学生sid的数组
})
// 设置课程id索引
kechengSchema.index({kid:1});

// 创建model
var kechengModel = db.model("Kecheng",kechengSchema);



module.exports = kechengModel;