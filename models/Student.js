
var mongoose = require("mongoose");
// 连接数据库
var db = require("../controller/db");

var studentSchema = new mongoose.Schema({
    sid:Number,
    name:String,
    age:Number,
    sex:String
})

// 创建索引,所有的增删改查都基于地址栏的学号索引
studentSchema.index({sid:1})

// db创建model
var studentModel = db.model("Student",studentSchema);

module.exports = studentModel;

