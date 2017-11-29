var svgCaptcha = require("svg-captcha");

var verCode = function(req,res){
	var captcha = svgCaptcha.create({
		fontSize: 50,
		width: 100,
		background: "#cc9966",
		color: true,
	});

	req.session.verCode = captcha.text;
	console.log(captcha.text);
	res.setHeader('Content-Type', 'image/svg+xml');	//不可缺少
	res.end(captcha.data);
};

module.exports = verCode;