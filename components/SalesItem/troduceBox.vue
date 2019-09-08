<template>
	<view class="box">
		  <view class="lists">
		  	  <view class="item" v-for="v in list" :key='v'>
		  	  	<image :src="v.img" mode="aspectFit"></image>
				<text>{{v.name}}</text>
		  	  </view>
			  <input class="tel" type="text" value=""  v-model="ItemInfo.phone" placeholder="请输入您的手机号码"/>
			  <view class="code_box">
			  	  <input class="pwd" type="text" value="" v-model="ItemInfo.code" placeholder="请输入收到的验证码"/>
				  <view class="getCode" @tap="getCode">{{Timers==60?'获取验证码':'已发送：'+Timers+"s"}}</view>
			  </view>
			  <view class="chatUsEmpty"> </view>
			  <view class="chatUs">
			  	 <image src="../../static/imgs/carImg/6.png" mode="aspectFit"></image>
				 <view class="addr" @tap='goaddr'>
				 	 <text>四川昊廷盛世实业有限公司</text>
					 <text>四川省成都市高新区蜀锦路88号新中泰国际大厦 A座1607室</text>
				 </view>
			  </view>
			    <view class="chatUsEmpty"> </view>
			   <view class="chatUs">
			  	 <image src="../../static/imgs/carImg/2.png" mode="aspectFit"></image>
				 <view class="tels" @tap="callS">
				 	 <text>028-85245456</text>
				 </view>
			  </view>
			  <view class="btn" @tap="btnSub">
			  	立即申请
			  </view>
		  </view>
	</view>
</template>

<script>
	export default {
		props:{
			types:{
				type:String,
				default:''
			}
		},
		data() {
			return {
				list:[
					{name:'额度高',img:'../../static/imgs/carImg/1.png'},
					{name:'放款快',img:'../../static/imgs/carImg/3.png'},
					{name:'服务好',img:'../../static/imgs/carImg/4.png'},
					{name:'便捷高效',img:'../../static/imgs/carImg/5.png'}
				],
				ItemInfo:{
					phone:'',
					code:'',
					loans_id:'',
					template_id:'80615'
				}
			};
		},
			computed:{
			Timers(){
				return 	this.$store.state.Timer
			}
		},
		methods:{
			btnSub(){
				if(this.ItemInfo.phone && this.ItemInfo.code){
					this.ItemInfo.loans_id=this.$props.types;
					uni.setStorageSync('replay_evaluateTotalScores',this.ItemInfo);
						this.$pub_fun.nowReplay(this.ItemInfo,1);
				}else{
					uni.showToast({
						title:'请先完善资料',
						icon:'none'
					})
				}	
			},
			getCode(){
				this.$pub_fun.countTimerDown(this.ItemInfo.phone)
			},
			callS(){
				this.$pub_fun.Call_Tel();
			},	
			goaddr(){
				this.$pub_fun.open_map();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.btn{
		background: #F1D35E;
		color:#fff;
		font-size:26upx;
		text-align: center;
		line-height: 70upx;
		margin: 0 auto;
		width: 250upx;
		border-radius: 50upx;
		margin-top:30upx;
	}
	.box{
		padding:46upx 48upx;
		background: #fff;
		border-radius: 15upx;
		.lists{
			// display: inline-flex;
			.item{
				width: 25%;
				display: inline-block;
				text-align: center;
				image{
					height: 98upx;
					width: 98upx;
					margin:0 auto;
					display: block;
				}
				text{
					margin-top:15upx;
				display: block;
				font-size:24upx;
			}
			}
			.tel{
				border:2upx solid #F1D35E;
				border-radius: 15upx;
				margin:50upx 0;
				height: 75upx;
				line-height: 75upx;
				text-indent: 10upx;
				font-size:22upx;
				padding-left: 15upx;
			}
			.code_box{
				clear: both;
				height: 80upx;
				.pwd{
					border-radius: 15upx;
					border:2upx solid #F1D35E;
					display: inline-block;
					float: left;
					width: 260upx;
					height: 75upx;
					text-indent: 20upx;
					font-size:22upx;
					padding-left: 15upx;
				}
				.getCode{
					border-radius: 15upx;
					background: #F1D35E;
					color:#fff;
					float: right;
					width: 200upx;
					text-align: center;
					line-height: 75upx;
					border:2upx solid #F1D35E;
					font-size:22upx;
				}
			}
			.chatUsEmpty{
				height: 25upx;
				width: 100%;
			}
			.chatUs{
				clear: both;
				overflow: hidden;
				// height: 100upx;
				image{
					float: left;
					height: 80upx;
					width: 80upx;
				}
				.addr{
					float: left;
					margin-left:10upx;
					width: calc(100% - 100upx);
					text:nth-child(1){
						display: block;
						font-size:18upx;
						color:rgba(0,0,0,1);
						line-height:50upx;
					}
					text:nth-child(2){
						display: block;
						font-size:14upx;
						color:#666666;
						line-height:15upx;
					}
				}
				.tels{
					float: left;
					margin-left:10upx;
					font-size:18upx;
					line-height: 80upx;
				}
			}
		}
	}
</style>
