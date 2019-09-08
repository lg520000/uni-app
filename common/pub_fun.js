import store from '../store/index.js'
import http from '@/common/request.js'
import urls from '../common/urls.js'
var pub_funs = {
		//登录
		isLogin(Obj) {
			if (!this.isPhoneNumber(Obj.phone)) {
				return uni.showToast({
					title: '请正确输入手机号',
					icon: 'none'
				})
			}
			if (!Obj.code) {
				return uni.showToast({
					title: '请正确输入验证码',
					icon: 'none'
				})
			}
			http.req(urls.loginInfo, Obj).then((res) => {
						console.log("login:", res);
						if (res.data.code == 200) {
							uni.setStorageSync('token', res.data.data.authToken);
							uni.showToast({
								title: '登录成功',
								icon: 'none',
								duration: 2000
							});
							setTimeout(() => {
								store.state.Timer = 60;
								store.state.TimerRet = false;
								uni.switchTab({
									url: '/pages/qutlit/qutlit'
								})
							}, 2000)
						}
					})
					// uni.getUserInfo({
					// 	success(ret) {
					// 		console.log(ret);
					// 		uni.setStorageSync('userInfo', ret.userInfo);
					// 		uni.setStorageSync('userAllInfo', ret)
					// 	}
					// });
					// uni.login({
					// 	success(ret) {
					// 		console.log(ret);
					// 		let item = uni.getStorageSync('userAllInfo');
					// 		let Obj = {
					// 			rawData: item.rawData,
					// 			code: ret.code,
					// 			signature: item.signature,
					// 			encryptedData: item.encryptedData,
					// 			iv: item.iv
					// 		}
					// 		http.req(urls.loginInfo, Obj).then((res) => {
					// 			console.log("login:",res);
					// 			if (res.data.code == 200) {
					// 				uni.setStorageSync('token', res.data.data.authToken);
					// 				uni.showToast({
					// 					title: '登录成功',
					// 					icon: 'none',
					// 					duration: 2000
					// 				});
					// 				setTimeout(() => {
					// 					uni.switchTab({
					// 						url: '/pages/qutlit/qutlit'
					// 					})
					// 				}, 2000)
					// 			}
					// 		},Error((err)=>{
					// 			console.log(err);
					// 		}))
					// 	}
					// })
				},
				//立即申请
				nowReplay(Obj, types) {
					// var Obj=JSON.parse(items);
					console.log("Obj：", Obj);
					console.log("types：" + types);
					if (!this.isPhoneNumber(Obj.phone)) {
						return uni.showToast({
							title: '请正确输入手机号',
							icon: 'none'
						})
					}
					if (!Obj.code) {
						return uni.showToast({
							title: '请正确输入验证码',
							icon: 'none'
						})
					}
					if (types == 2) { //立即评测
						let retObj = uni.getStorageSync('evaluateTotalScores');
						retObj.sex = Obj.sex;
						retObj.username = Obj.name;
						retObj.phone = Obj.phone;
						retObj.code = Obj.code;
						http.req(urls.evaluate, retObj).then((res) => {
							if (res.data.code == 200) {
								uni.showToast({
									title: '提交成功',
									icon: 'none'
								});

								setTimeout(() => {
									store.state.Timer = 60;
									store.state.TimerRet = false;
									uni.redirectTo({
										url: '/pages/qutlit/qutlit3'
									})
								}, 1000)
								return store.state.TimerRet = true;
							}
						})
					}
					if (types == 1) {
						http.req(urls.loans, Obj).then((res) => {
							if (res.data.code == 200) {
								uni.showToast({
									title: '提交成功',
									icon: 'none'
								});
								
								setTimeout(() => {
									store.state.Timer = 60;
									store.state.TimerRet = false;
									uni.redirectTo({
										url: '/pages/qutlit/qutlit3'
									})
								}, 1000)
								return store.state.TimerRet = true;
							}
						})
					}

				},
				//拨打电话
				Call_Tel() { //sharetype
					uni.makePhoneCall({
						phoneNumber: '028-85245456'
					})
				},
				//打开地图
				open_map() {
					uni.getLocation({
						success(res) {
							uni.openLocation({
								address: '四川省成都市高新区蜀锦路88号',
								latitude: 30.578300,
								longitude: 104.063057
							})
						}
					})
				},
				//是否为手机号码
				isPhoneNumber: function(str) {
					return /^[1][3,4,6,5,7,8,9][0-9]{9}$/.test(str);
				},
				//倒计时开始
				countTimerDown(n) {
					console.log(n);
					if (!this.isPhoneNumber(n)) {
						return uni.showToast({
							title: '请正确输入手机号',
							icon: 'none'
						})
					}
					if (store.state.Timer < 60) {
						return uni.showToast({
							title: store.state.Timer + '后重试',
							icon: 'none'
						})
					}
					http.req(urls.sendCode, {
						phone: n,
						template_id: '80615'
					}).then((res) => {
						if (res.data.code == 200) {
							uni.showToast({
								title: '发送成功',
								icon: 'none'
							});
							let Timer = setInterval(() => {
								store.state.Timer--;
								// console.log(store.state.Timer +"==="+store.state.TimerRet)
								if (store.state.Timer <= 0 || store.state.TimerRet) {
									clearInterval(Timer);
									store.state.Timer = 60;
									store.state.TimerRet = false;
									console.log(store.state.Timer + "----" + store.state.TimerRet)
								}
							}, 1000);
						}
					})

				}
		}
		export default pub_funs;
