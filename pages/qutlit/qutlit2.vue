<template>
	<view class="box">
		<image src="../../static/imgs/qult2.png" mode="aspectFill"></image>
		<view class="contBody">
			<view class="title">
				完善您的信息量身定制方案
			</view>
			<view class="contTxt">
				<view class="item">请选择您的性别</view>
				<view class="avater">
					<image src="../../static/imgs/man.png" @tap="toChooiseSex(1)" :class="ItemData.sex==1?'act':''" mode="aspectFit"></image>
					<image src="../../static/imgs/woman.png" @tap="toChooiseSex(2)" :class="ItemData.sex==2?'act':''" mode="aspectFit"></image>
				</view>
				<view class="intBox" style="margin-top: 50upx;">
					<image src="../../static/imgs/my.png"  mode="aspectFit"></image>
					<input type="text" placeholder-style="font-size:20upx" v-model="ItemData.name" placeholder="请输入您的姓名" />
				</view>
				<view class="intBox">
					<image src="../../static/imgs/tel.png" mode="aspectFit"></image>
					<input type="text" placeholder-style="font-size:20upx" v-model="ItemData.phone" placeholder="请输入您的手机号" />
				</view>
				<view class="intBox">
					<image src="../../static/imgs/pwd.png" mode="aspectFit"></image>
					<input type="text" v-model="ItemData.code" placeholder-style="font-size:20upx" placeholder="请输入验证码" />
					<view class="getCode" @tap="get_Code">
						{{Timers==60?'获取验证码':'已发送：'+Timers+"s"}}
					</view>
				</view>
				<!--  -->
				<view class="chatUs" style="margin-top: 50upx;">
					<image src="../../static/imgs/carImg/6.png" mode="aspectFit"></image>
					<view class="addr" @tap="goAddr">
						<text>四川昊廷盛世实业有限公司</text>
						<text >四川省成都市高新区蜀锦路88号新中泰国际大厦 A座1607室</text>
					</view>
				</view>
				<view class="chatUsEmpty"> </view>
				<view class="chatUs">
					<image src="../../static/imgs/carImg/2.png" mode="aspectFit"></image>
					<view class="tels" @tap="callS()">
						<text>028-85245456</text>
					</view>
				</view>
				<!--  -->
				<view class="btn" @tap="toGoNext">
					立即评估
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				 ItemData:{
					 sex:1,
					 name:'',
					 phone:'',
					 code:''
				 },
			}
		},
		computed:{
			Timers(){
				return 	this.$store.state.Timer
			}
		},
		methods:{
			toChooiseSex(n){
				this.ItemData.sex=n;
			},
			toGoNext(){
				if(this.ItemData.code && this.ItemData.phone && this.ItemData.name){
				 uni.setStorageSync('info_evaluateTotalScores',this.ItemData)
				  this.$pub_fun.nowReplay(this.ItemData,2)
				}else{
					uni.showToast({
						title:'请先完善资料',
						icon:'none'
					})
				}
				
			},
			callS(){
				this.$pub_fun.Call_Tel();
			},
			goAddr(){
				this.$pub_fun.open_map();
			},
			get_Code(){  //倒计时
				this.$pub_fun.countTimerDown(this.ItemData.phone);
			},
		}
	}
</script>

<style scoped lang="scss">
	.box {
		position: relative;
		height: 100vh;
		width: 100vw;
		overflow: hidden;
		text-align: center;

		image {
			height: 100%;
			width: 100%;
		}

		.contBody {
			position: absolute;
			top: 0;
			left: 0;
			text-align: center;
			// overflow: hidden;
			width: 100%;

			.title {
				display: inline-block;
				width: 290upx;
				margin: 30upx auto;
				font-size: 48upx;
				word-break: break-all;
				color: #F1D35E;
			}

			.contTxt {
				background: #fff;
				width: calc(100% - 180upx);
				margin: 0 90upx;
				border-radius: 15upx;
				height: 800upx;

				.item {
					text-align: center;
					font-size: 24upx;
					color: #999999;
					padding-top: 15upx;
				}

				.avater {
					clear: both;
					margin-top: 50upx;
					text-align: center;

					image {
						height: 120upx;
						width: 120upx;
						display: inline-block;
						border:5upx solid transparent;
					}

					image:nth-child(2) {
						margin-left: 100upx;
					}
					.act{
						border:5upx solid #F1D35E;
					}
				}

				.btn {
					color: #fff;
					background: #F1D35E;
					text-align: center;
					line-height: 80upx;
					font-size: 28upx;
					margin: 30upx auto;
					border-radius: 50upx;
					width: 250upx;
				}

				.intBox {
					height: 50upx;
					border-radius: 50upx;
					margin: 10upx 90upx 30upx 90upx;
					clear: both;
					border: 2upx solid #F1D35E;
					overflow: hidden;

					image {
						display: inline-block;
						color: #666666;
						width: 30upx;
						height: 30upx;
						margin-top: 10upx;
						float: left;
						text-align: center;
						padding-left: 15upx;
					}

					input {
						float: left;
						display: inline-block;
						width: calc(100% - 180upx);
						font-size: 22upx;
						padding-left: 15upx;
						text-align: left;
						line-height: 50upx;
						font-size: 24upx;
						height: 50upx;
					}

					// text::after{
					// 	content: '⊙',
					// }
					.getCode {
						float: right;
						color: #fff;
						background: #F1D35E;
						text-align: center;
						line-height: 50upx;
						width: 120upx;
						font-size: 20upx;
						white-space: nowrap;
					}
				}
			}
		}
	}

	.chatUsEmpty {
		height: 25upx;
		width: 100%;
	}

	.chatUs {
		clear: both;
		overflow: hidden;
		// width: ;
		padding: 0 90upx;

		image {
			float: left;
			height: 80upx;
			width: 80upx;
		}

		.addr {
			float: left;
			margin-left: 10upx;
			width: calc(100% - 100upx);

			text:nth-child(1) {
				display: block;
				text-align: left;
				font-size: 18upx;
				color: rgba(0, 0, 0, 1);
				line-height: 50upx;
			}

			text:nth-child(2) {
				text-align: left;
				display: block;
				font-size: 14upx;
				color: #666666;
				line-height: 15upx;
			}
		}

		.tels {
			float: left;
			margin-left: 10upx;
			font-size: 18upx;
			line-height: 80upx;
		}
	}
</style>
