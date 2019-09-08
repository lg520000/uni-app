<template>
	<view>
		<image class="logo"  src="../../static/imgs/logo.png" mode="aspectFit"></image>
		<view class="content">
			<view class="txt">
				“唯远见方能穿越眼前，唯远见方能坚定不移”。昊廷 人不断提升管理水平，加强产品研发以及风险控制的能 力，密切关注客户需求、市场
			</view>
			<image class="pig" src="../../static/imgs/pig.png" mode="aspectFit"></image>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			types:String,
			default:''
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.logo{
		margin: 50upx 0;
		height: 50upx;
		width: 250upx;
	}
	.content{
		background: #fff;
		padding: 50upx 20upx;
		font-size:24upx;
		line-height:48upx;
		border-radius: 15upx;
		position: relative;
		text-align: center;
		.pig{
			position: absolute;
			left: -50upx;
			bottom: -110upx;
			width: 200upx;
			height: 200upx;

		}
	}
</style>
