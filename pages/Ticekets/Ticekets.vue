<template>
	<view class="pages">
		<view class="contBody">
			<view class="title_box">
				<image src="../../static/imgs/redpack.png" mode="aspectFit"></image>
				<view class="title_prs">
					<text>￥</text><text>{{infos.courrentCouponMoney || '0'}}</text>
				</view>
			</view>
			<block v-if="infos.is_get_coupon==1">
				<view class="canUse">
				<image :src="infos.qrcode" mode="aspectFit" class="ewm_code"></image>
				<view class="ewm_codeNum">请尽快持二维码到线下门店进行消费</view>
				</view>
				<view class="Empty"></view>
				<view class="rule">
					<text>有效期：</text>
					<text>{{infos.create_time+"-"+infos.use_end_time}}</text>
				</view>
			</block>
			<block v-if="infos.is_get_coupon!=1">
				<view class="canUse">
					<view class="ewm_codeNum" @tap="getCoupon()">马上领取</view>
				</view>
			</block>
			<view class="rule" @tap="Goaddr">
				<text>使用地址：</text>
				<text>四川省成都市高新区蜀锦路88号新中泰国际大厦A座1607室</text>
			</view>
			<view class="rule" @tap="callS">
				<text>联系电话：</text>
				<text>028-85245456</text>
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
		onLoad() {
			this.getInfo();
		},
		methods:{
			getCoupon(){ // 领取优惠券
				this.$http.req(this.$url.getCoupon,{coupon_id:this.infos.couponId},'get').then((res)=>{
					if(res.data.code==200){
						uni.showToast({
							title:'领取成功',
							icon:'none',
							duration:1000
						});
						let that=this;
						setTimeout(()=>{
							that.getInfo();
						},1000)
					}
				});
			},
			getInfo(){  //获取优惠券信息
				this.$http.req(this.$url.saleTicket).then((res)=>{
					this.infos=res.data.data.info
				})
			},
			Goaddr(){
				this.$pub_fun.open_map();
			},
			callS(){
				this.$pub_fun.Call_Tel();
			}
		}
	}
</script>

<style scoped lang="scss">
	.pages{
		background: #F1D35E;
		padding: 40upx 50upx;
		width: calc(100vw - 100upx);
		height:calc( 100vh - 80upx);
		.contBody{
			text-align: center;
			padding:30upx 20upx;
			background: #fff;
			width: calc(100% - 40upx);
			border-radius: 15upx;
			.title_box{
				position: relative;
				overflow: auto;
				margin:0 auto;
				width:474upx;
				height:225upx;
			
				image{	
					width:100%;
					height:100%;
				}
				.title_prs{
					position: absolute;
					top:0;
					width: 100%;
					line-height: 225upx;
					text-align: center;
					text:nth-child(1){
						color:#F1D35E;
						padding-left: 20upx;
						font-size:40upx;
					}
					text:nth-child(2){
						color:#F1D35E;
						margin-left: 20upx;
						font-weight: 700;
						font-size:120upx;
					}
				}
			}
			.canUse{
				margin: 50upx 0 20upx;
				text-align: center;
			}
			.ewm_code{
				height: 248upx ;
				display: inline-block;
				width: 238upx;
				
			}
			.ewm_codeNum{
				text-align: center;
				font-size:28upx;
				color:#333;
			}
			.Empty{
				height: 1upx;
				background:#CCCCCC ;
				width: 100%;
			}
			.rule{
				margin-top:30upx;
				font-size: 24upx;
				color:#000000;
				height: auto;
				overflow: hidden;
				text:nth-child(1){
					width: 150upx;
					display: inline-block;
					text-align: left;
					float: left;
				}
				text:nth-child(2){
					float: left;
					width:calc(100% - 150upx);
					display: inline-block;
					text-align: left;
					word-break: break-all;
				}
			}
		}
	}
</style>
