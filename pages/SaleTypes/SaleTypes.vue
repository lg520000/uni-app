<template>
	<view class="pages">
		<image src="../../static/imgs/carImg/bg.png" mode="aspectFill"></image>
		<view class="topSwiper">
			<text  @tap="chooiseIndex(idx)" v-for="(v,idx) in listImg" :key="v">{{v.name}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		components: {

		},
		data() {
			return {
				listImg: [{
						name: '车主贷'
					},
					{
						name: '信用贷'
					},
					{
						name: '房抵贷'
					},
					{
						name: '项目投融贷'
					}
				],
			}
		},
		methods: {
			chooiseIndex(n) {
				uni.navigateTo({
					url:'/pages/SaleAct/SaleAct?types='+(Number(n) + 1)
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.pages {
		height: 100vh;
		width: 100vw;
		overflow: hidden;
position: relative;
		image {
			height: 100%;
			width: 100%;
			
		}
	}

	.topSwiper {
		width:calc( 100% - 100upx);
		padding: 0 50upx;
		position: absolute;
		top: 50%;
		margin-top: -220upx;
		z-index: 5;
		height: 440upx;
		text-align: center;
		text {
			width: calc(calc(100% - 200upx) / 2);
			display: inline-block;
			height: 200upx;
			text-align: center;
			border-radius: 20upx;
			margin-bottom: 20upx;
			background:linear-gradient(left top,#F4E570,#E99F00);
			color:#fff;
			text-align: center;
			line-height: 200upx;
			font-size:32upx;
			font-weight: 600;
		}
		text:nth-child(2n) {
			margin-left: 20upx;
		}
	}
</style>
