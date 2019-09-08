<template>
	<view class="pages">
		<view class="content">
			<view class="avater">
				<image :src="infos.avatarUrl" mode="aspectFit"></image>
				<text>{{infos.nickName}}</text>
			</view>
			<view class="videoBox">
				<video id="myVideo" src="https://www.htssjt.cn/uploads/video/introuce.mp4"
				 @error="videoErrorCallback" :danmu-list="danmuList" enable-danmu danmu-btn controls='false'></video>
			</view>
			<view class="item">
				<view class="title">优惠活动</view>
				<view class="txt">
					<image src="../../static/imgs/item1.png" mode=""></image>
					<text  @tap="toGoTicekets">领取优惠券</text>
				</view>
			</view>
			<view class="item">
				<view class="title">公司名称</view>
				<view class="txt">
					<image src="../../static/imgs/item2.png" mode=""></image>
					<text>四川昊廷盛世实业有限公司</text>
				</view>
			</view>
			<view class="item">
				<view class="title">公司地址</view>
				<view class="txt">
					<image src="../../static/imgs/item3.png" mode=""></image>
					<text  @tap="toGoaddr">四川省成都市高新区蜀锦路88号新中泰国际大厦1607室</text>
				</view>
			</view>
			<view class="item">
				<view class="title">联系电话</view>
				<view class="txt">
					<image src="../../static/imgs/item4.png" mode=""></image>
					<text  @tap="toGoTel">028-85245456</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				infos:{},
			}
		},
		onShow() {
			uni.getUserInfo({
				success(ret) {
					console.log(ret);
					uni.setStorageSync('userInfo', ret.userInfo);
					uni.setStorageSync('userAllInfo', ret)
				}
			});	
		},
		onLoad() {
          this.infos=uni.getStorageSync('userInfo')
		},
		methods: {
			toGoTicekets(n) {
				uni.navigateTo({
					url: '/pages/Ticekets/Ticekets'
				})
			},
			toGoaddr() {
			this.$pub_fun.open_map();
			},
			toGoTel() {
				this.$pub_fun.Call_Tel()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.pages {
		background: #f5f5f5;
		height: 100vh;
		overflow-y: scroll;
	}

	.content {
		background: #F1D35E;
		text-align: center;
		height: 400upx;

		.avater {
			padding: 24upx;
			height: 90upx;

			image {
				height: 90upx;
				width: 90upx;
				float: left;
			}

			text {
				float: left;
				margin-left: 20upx;
				font-size: 24upx;
				color: #fff;
				line-height: 90upx;
			}
		}

		video {
			width: 100%;
			border-radius: 20upx;
			height: 100%;
			background: rgba(0, 0, 0, .5);
		}

		.videoBox {
			height: 400upx;
			width: calc(100% - 48upx);
			padding: 0 24upx;
			border-radius: 20upx;
			overflow: hidden;
		}

		image {
			height: 100%;
			width: 100%;
		}
	}
	.item {
		background: #fff;
		border-radius: 15upx;
		margin: 10upx 24upx;
		width: calc(100% - 48upx);
		text-align: left;
		
		.title {
			font-size: 24upx;
			color: #666666;
			padding: 20upx;
			border-bottom: 1upx solid #E6E6E6;
		}
		.txt{
			padding: 20upx;
			height: 35upx;
			width: calc(100% - 40upx);
			image{
				float: left;
				height: 35upx;
				width: 35upx;
			}
			text{
				white-space: nowrap;
				overflow-x: scroll;
				float: left;
				line-height: 35upx;
				margin-left:20upx;
				width: calc(100% - 55upx);
				font-size: 24upx;
		     	color: #666666;
			}
		}
	}
</style>
