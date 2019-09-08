import http from './interface'
import urls from './urls'
/**
 * 将业务所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 * 
 */

// 单独导出(测试接口) import {test} from '@/common/vmeitime-http/'
export const req = (url,data,type) => {
	/* http.config.baseUrl = "http://localhost:8080/api/" */
	//设置请求前拦截器
	http.interceptor.request = (config) => {
		let token = uni.getStorageSync("token")
		config.header = {
			"authToken": token 
		}
	}
	//设置请求结束后拦截器
	http.interceptor.response = (response) => {
		//判断返回状态 执行相应操作
		return response;
	}
    return http.request({
		baseUrl: urls.Public_Url, 
        url: url,
		method:type || "POST",
		dataType: 'json',
        data,
    })
}


// 默认全部导出  import api from '@/common/vmeitime-http/'
export default {
	req,
}