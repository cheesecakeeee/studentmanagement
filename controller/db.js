// 引包 
var mongoose = require("mongoose");
// 连接数据库
mongoose.connect('mongodb://localhost/studentmanagement');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("数据库打开")
});

module.exports = db;