<template>
	<view class="pages">
		<image src="../../static/imgs/carImg/bg.png" mode="aspectFill"></image>
		<view class="bodys"> 
			<titleBox :types="types"></titleBox>
			<view class="bigEmpty"></view>
			<contactBox :types="types"></contactBox>
			<view class="bigEmpty2"></view>
			<troduceBox :types="types"></troduceBox>
		</view>
	</view>
</template>

<script>
	import titleBox from '@/components/SalesItem/titleBox';
	import contactBox from '@/components/SalesItem/contactBox';
	import troduceBox from '@/components/SalesItem/troduceBox';
	export default {
		components:{
			titleBox,contactBox,troduceBox
		},
		
		data() {
			return {
				types:''
			}
		},
		onLoad(e) {
			this.types=e.types
		},
		methods:{
			getCode(){
	
			}
		}
	}
</script>

<style scoped lang="scss">
	.pages{
		position: relative;
		height: 2200upx;
		width: 100vw;
		overflow: hidden;
		image{
			height: 100%;
			width: 100%;
		}
	}
	.bodys{
		position: absolute;
		top:0;
		padding: 0 70upx;
		width: calc(100% - 140upx);
		.bigEmpty{
		height: 120upx;
		width: 100%;
	}
	.bigEmpty2{
		height: 80upx;
	}
	}
	
</style>
