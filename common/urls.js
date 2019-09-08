var urls = {
	// Public_Url:'http://39.97.162.124',
	Public_Url:'https://www.htssjt.cn',
	getUerInfo:'/api/user/userInfo',  //获取用户信息
	loginInfo:'/api/user/wxLogin',    //登录
	sendCode:"/api/system/sendms", //发送短信
	evaluate:'/api/system/evaluate' ,//提交评估
	evaluateScores:'/evaluateScores', //获取系统评估总分
	banner:'/api/system/banner',//获取小程序首页广告轮播图
	evaluatePrivilege:'/api/system/evaluatePrivilege',//实时响应资格评估分
	loans:'/api/system/loans',//申请贷款
	saleTicket:'/api/Coupon/info',//优惠券页面数据
	getCoupon:'/api/Coupon/getCoupon',//领取优惠券
	hejian:'/api/Coupon/hejian',//核检二维码-----扫描二维码核对
	companyInfo:'/api/system/companyInfo',//获取站点基本信息
	nearInfo:'/api/user/wealthEvaluateResult' ,//获取最近一次评分
}
export default  Object.assign(urls)