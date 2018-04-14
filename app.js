var express = require("express");
var app = express();
var router = require("./models/router.js")

// 模板引擎
app.set("view engine","ejs")
// 静态资源
app.use(express.static("./public"));

// 路由
app.get("/",router.showIndex);
app.get("/add",router.showAdd);
app.post("/doadd",router.doAdd);
app.get("/edit/:sid",router.showEdit);
app.post("/doedit/:sid",router.doEdit);
app.get("/remove/:sid",router.doRemove);


app.listen(8888,()=>{console.log("server running at http://127.0.0.1:8888")})