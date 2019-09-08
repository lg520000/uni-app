<script>
	import http from '@/common/request.js'
	import pub_fun from '@/common/pub_fun.js'
	export default {
		onLaunch: function() {
			if (!uni.getStorageSync('token') || uni.getStorageSync('token') == null || uni.getStorageSync('token') == undefined) {
				uni.showToast({
					title:'请先登录',
					icon:'none',
					duration:2000
				})
				// pub_fun.isLogin();
				setTimeout(()=>{
					uni.reLaunch({
						url:'/pages/Login/Login'
					})
				},2000)
			}
		},
		onShow: function() {

		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	page {
		overflow-y: scroll;
	}
</style>
