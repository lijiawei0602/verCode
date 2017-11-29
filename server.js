var express = require("express");
var cookieParser = require("cookie-parser");
var session = require("express-session");
// var redisStore = require('connect-redis')(session);//redis缓存

var login = require("./routes/login.js");
var verCode = require("./routes/verCode.js");

var app = express();
app.use(cookieParser());
app.use(session({
	//name: "power",//设置 cookie 中保存 session 的字段名称默认为connect_sid
	//store: new redisStore(),//session 的存储方式，默认存放在内存中
	secret: "123456",// 通过设置的 secret 字符串，来计算 hash 值并放在 cookie 中，使产生的 signedCookie 防篡改
	cookie: {
		httpOnly: true,
		maxAge: 24 * 60 * 60 * 1000
	},
	secure: true//即使 session 没有被修改，也保存 session 值，默认为 true。
}));

app.use("/verCode", function(req,res){
	verCode(req,res);
});

app.use("/login", function(req,res){
	login(req,res);
});

app.listen(2234);