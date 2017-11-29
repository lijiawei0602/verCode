var login = function(req,res){
	var verCode = req.query.verCode;
	if(req.session.verCode){
		console.log(verCode);
		if(req.session.verCode == verCode){
			res.jsonp({
				result: true,
				data: "验证正确"
			});
		}else{
			res.jsonp({
				result: false,
				data: "验证失败"
			});
		}
	}
};

module.exports = login;