<template>
	<view class="pages">
		<image src="../../static/imgs/qult2.png" mode="aspectFill"></image>
		<view class="topSwiper">
			<image src="../../static/imgs/logo.png" mode="aspectFit" class="logo"></image>
			<view class="Body_box">
				<image src="../../static/imgs/pig.png" mode="aspectFit" class="pig"></image>
				<image src="../../static/imgs/suc.png" mode="aspectFit" class="ret"></image>
				<view class="retTxt">申请成功!</view>
				<view class="retTips">
					尊敬的用户，我们的资深经理人将在两小时与 您取得联系，请保持通话的畅通！
				</view>
				<view class="listBox">
					<view class="item" v-for="(v,i) in list" :key="i">
						<image :src="v.img" mode="aspectFit"></image>
						<text>{{v.name}}</text>
					</view>
				</view>
				<view class="tru">
					<text>昊廷金服</text><text>在提供优质的服务基础上
为客户量身定制最适合的产品</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {

		},
		data() {
			return {
				list:[
					{name:'额度高',img:'../../static/imgs/carImg/1.png'},
					{name:'放款快',img:'../../static/imgs/carImg/3.png'},
					{name:'服务好',img:'../../static/imgs/carImg/4.png'},
					{name:'便捷高效',img:'../../static/imgs/carImg/5.png'}
				]
			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.pages {
		height: 100vh;
		width: 100vw;
		overflow: hidden;
		position: relative;
		overflow-y: scroll;
		image {
			height: 100%;
			width: 100%;
			
		}
	}

	.topSwiper {
			position: absolute;
			top:70upx;
			width: calc(100% - 140upx);
			padding: 0 70upx;
			.logo{
				width: 250upx;
				height: 51upx;
			}
			.Body_box{
				margin-top:60upx;
				background: #fff;
				border-radius: 15upx;
				padding: 20upx 70upx;
				width: calc(100% - 140upx);
				position: relative;
				text-align: center;
				.pig{
					position: absolute;
					top:-105upx;
					height: 210upx;
					width: 210upx;
					right: 0;
				}
				.ret{
					width: 120upx;
					height: 120upx;
					margin:100upx auto 50upx;
					
				}
				.retTxt{
					color:#F1D35E;
					font-size:48upx;
					text-align: center;
					width: 100%;
					margin-bottom: 30upx;
				}
				.retTips{
					color:#666666;
					font-size:24upx;
					text-align: left;
					line-height: 36upx;
				}
				.listBox{
					display: flex;
					margin: 30upx 0;
					.item{
						width: 25%;
						text-align: center;
						image{
							height: 100upx;
							width: 100upx;
						}
						text{
							display: block;
							font-size:24upx;
							color:#060001;
							text-align:center;
						}
					}
				}
				.tru{
					padding-bottom: 30upx;
					text:nth-child(1){
						font-size:36upx;
						color:#F1D35E;
					}
					text:nth-child(2){
						font-size:24upx;
						color:#060001;
						margin-left:5upx;
					}
				}
			}
	}
</style>
