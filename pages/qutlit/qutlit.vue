<template>
	<view class="">
		<view class="videoBox">
			<swiper circular='true' :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item v-for="(v,idx) in list" :key="idx">
					<image :src="v" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="Bigtitle">
			<text></text><text>资格评估</text>
		</view>
		<view class="pages">
			<image class="bg" src="../../static/imgs/qult.png" mode="aspectFill" style="position: relative;z-index: -111;"></image>
			<view class="box">
				<image class="logo" src="../../static/imgs/logo2.png" mode="aspectFit"></image>
				<!-- <view class="title">24小时在线为您服务	</view> -->
				<view class="title2">AI智能资格评估 </view>
				<view class="timeList">
					<image src="../../static/imgs/time.png" mode="aspectFit"></image>
					<text class='t1'>{{systemScore.evaluateTotalScores || 0}}分</text>
					<text class='t2'>{{systemScore.scorePercent||0}}%信用极好</text>
				</view>
				<view class="lists" style="margin-top: 100upx;">
					<view class="titls">职业特征</view>
					<image src="../../static/imgs/box.png" mode="aspectFit"></image>
					<view class="Empty"></view>
					<view class="intbox">
						<view @tap="chooiseTypes(0,0)" :class="ItemData.Job_Type==0?'bg_ck':''">上班族</view>
						<view @tap="chooiseTypes(0,1)" :class="ItemData.Job_Type==1?'bg_ck':''">创业者</view>
					</view>
				</view>
				<!-- 资金类型 -->
				<view class="lists">
					<view class="titls">资金类型</view>
					<image src="../../static/imgs/box.png" mode="aspectFit"></image>
					<view class="Empty"></view>
					<view class="intbox">
						<view @tap="chooiseTypes(1,0)" :class="ItemData.salary_type==0?'bg_ck':''">打卡工资</view>
						<view @tap="chooiseTypes(1,1)" :class="ItemData.salary_type==1?'bg_ck':''">现金流水</view>
					</view>
				</view>
				<!-- 收入类型 -->
				<view class="lists">
					<view class="titls">月收入/月流水</view>
					<image src="../../static/imgs/box.png" mode="aspectFit"></image>
					<view class="Empty"></view>
					<view class="intbox">
						<!-- 	<view class="bg_ck">6000-9000</view> -->
						<view>
							<picker :range="salaryTypes" :value="salaryIndex" @change="salary_Time">
								{{salaryTypes[salaryIndex]}}
								<image class="jiantou" src="../../static/imgs/next.png" mode="aspectFit"></image>
							</picker>
						</view>
					</view>
				</view>
				<!-- 公积金 -->
				<view class="lists">
					<view class="titls">公积金</view>
					<image src="../../static/imgs/box.png" mode="aspectFit"></image>
					<view class="Empty"></view>
					<view class="intbox">
						<view @tap="chooiseTypes(3,0)" :class="ItemData.Accumulation_type==0?'bg_ck':''">无</view>
						<view @tap="chooiseTypes(3,1)" :class="ItemData.Accumulation_type==1?'bg_ck':''">有</view>
					</view>
				</view>
				<!-- 房产情况 -->
				<view class="lists">
					<view class="titls">房产情况</view>
					<image src="../../static/imgs/box.png" mode="aspectFit"></image>
					<view class="Empty"></view>
					<view class="intbox">
						<view @tap="chooiseTypes(11,0)" :class="ItemData.isHouse==0?'bg_ck':''">无</view>
						<view @tap="chooiseTypes(11,1)" :class="ItemData.isHouse==1?'bg_ck':''">有</view>
					</view>
				</view>
				<!-- 房产价值 -->
				<view class="lists" v-if="ItemData.isHouse==1">
					<view class="titls">房产价值</view>
					<image src="../../static/imgs/box.png" mode="aspectFit"></image>
					<view class="Empty"></view>
					<view class="intbox">
						<!-- 	<view class="bg_ck">6000-9000</view> -->
						<view>
							<picker :range="houseTypes" :value="houseIndex" @change="house_Time">
								{{houseTypes[houseIndex]}}
								<image class="jiantou" src="../../static/imgs/next.png" mode="aspectFit"></image>
							</picker>
						</view>
					</view>
				</view>
				<!-- 是否有证 -->
				<view class="lists" v-if="ItemData.isHouse==1">
					<view class="titls">是否有证</view>
					<image src="../../static/imgs/box.png" mode="aspectFit"></image>
					<view class="Empty"></view>
					<view class="intbox">
						<view @tap="chooiseTypes(5,0)" :class="ItemData.can_house_letter==0?'bg_ck':''">无</view>
						<view @tap="chooiseTypes(5,1)" :class="ItemData.can_house_letter==1?'bg_ck':''">有</view>
					</view>
				</view>
				<!-- 按揭 -->
				<view class="lists" v-if="ItemData.isHouse==1">
					<view class="titls">按揭/全款</view>
					<image src="../../static/imgs/box.png" mode="aspectFit"></image>
					<view class="Empty"></view>
					<view class="intbox">
						<view @tap="chooiseTypes(6,0)" :class="ItemData.can_house_ours==0?'bg_ck':''">按揭</view>
						<view @tap="chooiseTypes(6,1)" :class="ItemData.can_house_ours==1?'bg_ck':''">全款</view>
					</view>
				</view>
				<!-- 车产情况 -->
				<view class="lists">
					<view class="titls">车产情况</view>
					<image src="../../static/imgs/box.png" mode="aspectFit"></image>
					<view class="Empty"></view>
					<view class="intbox">
						<view @tap="chooiseTypes(7,0)" :class="ItemData.car_use==0?'bg_ck':''">无</view>
						<view @tap="chooiseTypes(7,1)" :class="ItemData.car_use==1?'bg_ck':''">有</view>
					</view>
				</view>
				<!-- 车价值 -->
				<view class="lists" v-if="ItemData.car_use==1">
					<view class="titls">车产价值</view>
					<image src="../../static/imgs/box.png" mode="aspectFit"></image>
					<view class="Empty"></view>
					<view class="intbox">
						<!-- 	<view class="bg_ck">6000-9000</view> -->
						<view>
							<picker :range="carTypes" :value="carIndex" @change="car_Time">
								{{carTypes[carIndex]}}
								<image class="jiantou" src="../../static/imgs/next.png" mode="aspectFit"></image>
							</picker>
						</view>
					</view>
				</view>
				<!-- 按揭 -->
				<view class="lists" v-if="ItemData.car_use==1">
					<view class="titls">按揭/全款</view>
					<image src="../../static/imgs/box.png" mode="aspectFit"></image>
					<view class="Empty"></view>
					<view class="intbox">
						<view @tap="chooiseTypes(9,0)" :class="ItemData.car_ours==0?'bg_ck':''">按揭</view>
						<view @tap="chooiseTypes(9,1)" :class="ItemData.car_ours==1?'bg_ck':''">全款</view>
					</view>
				</view>
				<!-- 保单 -->
				<view class="lists">
					<view class="titls">保单情况</view>
					<image src="../../static/imgs/box.png" mode="aspectFit"></image>
					<view class="Empty"></view>
					<view class="intbox">
						<view @tap="chooiseTypes(10,0)" :class="ItemData.bao_dan==0?'bg_ck':''">无</view>
						<view @tap="chooiseTypes(10,1)" :class="ItemData.bao_dan==1?'bg_ck':''">有</view>
					</view>
				</view>
				<!-- 保单缴费时间 -->
				<view class="lists" v-if="ItemData.bao_dan==1">
					<view class="titls">保单缴费时间</view>
					<image src="../../static/imgs/box.png" mode="aspectFit"></image>
					<view class="Empty"></view>
					<view class="intbox">
						<view class="" style="background: none;border: 0;">
							<picker @change="baodan_Time" :range="baoTime" :value="baoIndex">{{baoTime[baoIndex]}}
								<image class="jiantou" src="../../static/imgs/next.png" mode="aspectFit"></image>
							</picker>
						</view>
					</view>
				</view>
				<!-- 下一步 -->
				<view class="next" @tap='nextStep'>下一步</view>

			</view>
			<view class="bototmImg">
				<image src="../../static/imgs/golds.png" mode="aspectFit"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				baoTime: ['0-1年', '1-2年', '2-3年', '3-5年', '5年以上'], //保单时间
				baoIndex: 0,
				salaryTypes: ['3000-6000', '6000-9000', '9000以上'], //收入区间
				salaryIndex: 0,
				houseTypes: ['低于10万', '20-50万', '50-100万', '100万以上'], //房区间
				houseIndex: 0,
				carTypes: ['低于10万', '10-15万', '15-20万', '20-30万', '30万以上'], //车区间
				carIndex: 0,
				systemScore: {
					evaluateTotalScores: '',
					scorePercent: ''
				},
				ItemData: {
					Job_Type: 0, //职业类型  1 上班族 2 创业者
					salary_type: 0, //收入类型  1 打卡 2 现金流水
					include_type: '', //收入、流水
					Accumulation_type: 0, //公积金 1 有 2 无
					house_use: '', //房产价值
					isHouse:0, //房产情况
					can_house_letter: 0, //是否有房产证 1有 2无
					can_house_ours: 0, //房 按揭全款  1 按揭 2 全款
					car_use: 0, //车  1 有 2 无
					car_letter: '', //车 价值
					car_ours: 0, //车 按揭全款  1 按揭 2 全款
					bao_dan: '', //保单  1 有 2 无
					bao_dan_time: '', //保单交费时间
				}
			}
		},
		onShow() {
			if (!uni.getStorageSync('token') || uni.getStorageSync('token') == null || uni.getStorageSync('token') == undefined) {
				// uni.reLaunch({
				// 	url:'/pages/Login/Login'
				// })
			} else {
				this.getBannerImg();
				// this.getSystemScore();
				this.evaluatePrivilege();
			}
		},
		methods: {
			evaluatePrivilege() { //实时响应评估
				this.$http.req(this.$url.nearInfo, {}, 'get').then((res) => {
					if (res.data.data.is_join_evaluate == 1) {
						let Obj = res.data.data;
						let ObjData = {
							Job_Type: Obj.work_tpye, //职业类型  1 上班族 2 创业者
							salary_type: Obj.money_tpye, //收入类型  1 打卡 2 现金流水
							include_type: Obj.income, //收入、流水
							Accumulation_type: Obj.is_having_provident_fund, //公积金 1 有 2 无
							house_use: '', //房产价值
							isHouse:Obj.is_having_housing_belongs, //是否有房
							can_house_letter: Obj.is_having_card, //是否有房产证 1有 2无
							can_house_ours: Obj.is_housing_anjie_or_full, //房 按揭全款  1 按揭 2 全款
							car_use: Obj.is_having_car, //车  1 有 2 无
							car_letter: '', //车 价值
							car_ours: Obj.is_car_anjie_or_full, //车 按揭全款  1 按揭 2 全款
							bao_dan: Obj.is_having_chit, //保单  1 有 2 无
							bao_dan_time: '', //保单交费时间
						}
						this.salaryIndex=Obj.income;
						this.houseIndex = Obj.housing_belong; //	是	房产价值	展开
						this.baoIndex = Obj.chit_take_money_time; //是	保单缴费时间	展开
						this.carIndex = Obj.car_belong; //	是	车产价值	展开
						this.ItemData = ObjData;
						this.systemScore.evaluateTotalScores = Obj.wealth_points;
						this.systemScore.scorePercent = Obj.scorePercent;
					} else {}

				})
			},
			getBannerImg() { //轮播图
				this.$http.req(this.$url.banner).then((res) => {
					console.log("轮播图", res);
					if (res.data.code == 200) {
						this.list = res.data.data.banner
					}
				})
			},
			getSystemScore() { // 系统评分
				this.$http.req(this.$url.evaluateScores, {}, 'get').then((res) => {
					console.log("系统评分", res);
					this.systemScore.score = res.data.data.evaluateScores
				})
			},
			nextStep() {
				let ObjData = {
					work_tpye: this.ItemData.Job_Type, //职业类型  1 上班族 2 创业者
					money_tpye: this.ItemData.salary_type, //收入类型  1 打卡 2 现金流水
					income: this.salaryIndex, //收入、流水
					is_having_provident_fund: this.ItemData.Accumulation_type, //公积金 1 有 2 无
					is_having_housing_belongs:this.ItemData.isHouse,//是否有房
					housing_belong: this.houseIndex, //房产价值
					is_having_card: this.ItemData.can_house_letter, //是否有房产证 1有 2无
					is_housing_anjie_or_full: this.ItemData.can_house_ours, //房 按揭全款  1 按揭 2 全款
					is_having_car: this.ItemData.car_use, //车  1 有 2 无
					car_belong: this.carIndex, //车 价值
					is_car_anjie_or_full: this.ItemData.car_ours, //车 按揭全款  1 按揭 2 全款
					is_having_chit: this.ItemData.bao_dan, //保单  1 有 2 无
					chit_take_money_time: this.baoIndex, //保单交费时间
					template_id:'80615'
				}
				uni.setStorageSync('evaluateTotalScores', ObjData)
				uni.navigateTo({
					url: '/pages/qutlit/qutlit2'
				})
			},
			chooiseTypes(idx, n) { //
				if (idx == 0) {
					this.ItemData.Job_Type = n
				}
				if (idx == 1) { //收入类型
					this.ItemData.salary_type = n
				}
				if (idx == 3) { // 公积金 是否有
					this.ItemData.Accumulation_type = n
				}
				if (idx == 5) { //房 是否有证
					this.ItemData.can_house_letter = n
				}
				if (idx == 6) { //房 是否全款
					this.ItemData.can_house_ours = n
				}
				if (idx == 7) { //车 是否有
					this.ItemData.car_use = n
				}
				if (idx == 9) { //车 是否有
					this.ItemData.car_ours = n
				}
				if (idx == 10) { //保单 是否有
					this.ItemData.bao_dan = n
				}
				if(idx == 11 ){
					this.ItemData.isHouse =n
				}
			},
			salary_Time(e) { //选择薪资收入流水
				this.salaryIndex = e.detail.value
			},
			baodan_Time(e) { //选择保单缴费
				this.baoIndex = e.detail.value
			},
			car_Time(e) { //选择车价值
				this.carIndex = e.detail.value
			},
			house_Time(e) { //选择房价值
				this.houseIndex = e.detail.value
			}
		}
	}
</script>

<style scoped lang="scss">
	input {
		color: #FDD640;
		font-size: 24upx;
	}

	.Bigtitle {
		line-height: 50upx;
		background: #000000;
		color: #F1D35E;
		font-size: 24upx;
		padding: 24upx;

		text:nth-child(1) {
			height: 30upx;
			margin: 10upx 0;
			width: 5upx;
			background: #F1D35E;
			display: inline-block;
			float: left;
		}

		text:nth-child(2) {
			margin-left: 15upx;
		}
	}

	.videoBox {
		height: 300upx;
		width: calc(100% - 50upx);
		padding: 25upx;
		background: #000000;
		border-bottom: 1upx solid #E6E6E6;

		swiper {
			height: 100%;
			width: 100%;
		}

		image {
			height: 100%;
			width: 100%;
		}
	}

	.pages {
		height: 4000upx;
		width: 100vw;
		position: relative;
		overflow: hidden;

		.bg {
			position: absolute;
			top: 0;
			width: 100%;
			height: 100%;
		}
	}

	.bototmImg {
		// background: #000000;
		position: absolute;
		height: 616upx;
		width: 100%;
		bottom: 0;
z-index: -1;
		image {
			height: 100%;
			width: 100%;
		}
	}

	.box {
		overflow: hidden;
		width: calc(100% - 200upx);
		padding: 0 100upx;
		position: absolute;
		top: 0;
		text-align: center;
	}

	.logo {
		margin-top: 20upx;
		width: 315upx;
		height: 55upx;
	}

	.title {
		font-size: 18upx;
		color: rgba(253, 214, 64, 1);
	}

	.title2 {
		margin-top: 50upx;
		color: #FDD640;
		font-size: 36upx;
	}

	.timeList {
		margin-top: 20upx;
		position: relative;
		height: 200upx;

		image {
			height: 100%;
			width: 100%;
		}

		.t1 {
			position: absolute;
			top: 60upx;
			left: 0;
			width: 100%;
			font-size: 60upx;
			color: #fff;
			text-align: center;
		}

		.t2 {
			position: absolute;
			bottom: 0;
			left: 0;
			color: #fff;
			font-size: 36upx;
			text-align: center;
			width: 100%;
		}
	}

	.next {
		margin: 50upx auto;
		width: 275upx;
		height: 70upx;
		background: #F1D35E;
		color: #fff;
		text-align: center;
		line-height: 70upx;
		border-radius: 15upx;
		margin-bottom: 0;
	}

	.lists {
		text-align: center;
		width: 100%;
		position: relative;
		margin-top: 50upx;

		.titls {
			position: absolute;
			top: 17upx;
			width: 100%;
			color: #fff;
			text-align: center;
			font-size: 24upx;
		}

		image {
			width: 226upx;
			height: 68upx;
			margin: 0 auto;
		}

		.Empty {
			width: 5upx;
			background: #F1D35E;
			height: 50upx;
			margin: 10upx auto;
			margin-top: -10upx;

		}

		.intbox {
			border-radius: 15upx;
			border: 2upx solid #F1D35E;
			height: 50upx;
			display: flex;
			overflow: hidden;

			input {
				display: inline-block;
				width: calc(100% - 100upx);
			}

			.jiantou {
				display: inline-block;
				height: 30upx;
				float: right;
				width: 40upx;
				color: #fff;
				font-size: 24upx;
				line-height: 50upx;
				margin-top: 10upx;
				margin-right: 10upx;

			}

			.jiantou2 {
				display: inline-block;
				height: 50upx;
				float: right;
				width: 100upx;
				color: #fff;
				font-size: 24upx;
				line-height: 50upx;
			}

			view {
				display: inline-block;
				color: #fff;
				width: calc(calc(100% - 2upx) / 2);
				font-size: 24upx;
				height: 100%;
				flex: 1;
				line-height: 50upx;
			}

			.bg_ck {
				border-right: 2upx solid #F1D35E;
				background: #F1D35E;
			}

		}
	}
</style>
