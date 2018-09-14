<template>
	<div class="typeList">
		<div class="all-type" @click="getImgs">全部车款</div>
		<div class="car-list">
			<div class="nav-list">
				<span :data-class="currentYear" v-for="(item,index) in year" :key="index" :class="currentYear == item?'active':''" @click="setYear(item)">
				 	{{item}}
				</span>
			</div>
		</div>
		<div class="c-list">
			<div v-for="(item,index) in list" :key="index">
				<p>{{item.key}}</p>
				<ul class="ul_list">
					<li class="list-view" v-for="(val, index) in item.list" @click="getImgs(val.car_id,`${val.market_attribute.year}款 ${val.car_name}`)" :key="index">
						<div>
							<p>{{val.market_attribute.year}}款 {{val.car_name}}</p>
							<p>{{`${val.horse_power}马力${val.gear_num}挡${val.trans_type}`}}</p>
							<p><span>指导价 {{val.market_attribute.official_refer_price}}</span><span>{{val.market_attribute.dealer_price_min}}起</span></p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
	export default {
		data() {
			return {
				year: window.sessionStorage.getItem('year').split(',')
			}
		},
		computed: {
			...mapState({
				currentYear: (state) => state.imgType.currentYear,
				list: (state) => state.imgType.list,
				typeID: (state) => state.image.typeID,
				ColorID: (state) => state.image.ColorID
			}),
		},
		methods: {
			...mapMutations({
				setYear: 'imgType/setYear',
				changType: 'imgType/changType',
				carId: 'imgType/carId',
				setId: 'image/setId',
				
			}),
			...mapActions({
				getImgList: 'image/getImgList',
			}),
			getImgs(id, name) {
				this.$router.back(-1)
				if(Number(id) && name) {
					this.changType(name)
					this.carId(id)
					this.setId({typeID:id})
				}else{
					this.changType('全部车款')
					this.carId()
					this.setId({typeID:null})
				}
				this.getImgList({SerialID: this.$route.query.id, ColorID: this.ColorID, CarID: this.typeID})
				
			}
		},
		mounted() {
			this.setYear(this.year[0])
		},
		updated() {
		}
	}
</script>

<style scoped lass="scss">
	.typeList {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #f4f4f4;
	}
	.all-type {
		margin: .15rem 0;
	    font-size: .34rem;
	    color: #00afff;
	    background: #fff;
	    text-align: center;
	    line-height: .8rem;
	    height: .8rem;
	}
	.nav-list{
		margin-top: .15rem;
	    padding-left: .2rem;
	    font-size: .3rem;
	    line-height: .76rem;
	    height: .76rem;
	    background: #fff;
	    overflow-x: scroll;
	}
	.nav-list span{
		padding-right: .42rem;
	}
	.c-list{
		width: 100%;
		height: 100%;
		overflow-y:scroll;
	}
	.c-list>div>p {
		padding: .1rem .2rem;
		box-sizing:border-box;
		background: #f4f4f4;
		color: #999;
		font-size: .26rem;
	}
	.list-view{
		padding: 0 0.2rem;
		box-sizing:border-box;
		margin-bottom: .2rem;
		background:#fff;
	}

	.list-view button{
	    border: none;
	    outline:none;
	    border-top: 1px solid #eee;
	    width: 100%;
	    height: .8rem;
	    font-size: .32rem;
	    color: #00afff;
	    background: #fff;
	    font-weight: 500;
	}
	.list-view>div>p:nth-child(1){
		padding: .26rem 0 .18rem;
	    font-size: .3rem;
	    line-height: 1;
	    color: #3d3d3d;
	}
	.list-view>div>p:nth-child(2){
		color: #bdbdbd;
    	font-size: .26rem;
	}
	.list-view>div>p:nth-child(3){
		text-align: right;
	    padding-bottom: .1rem;
	    font-size: .24rem;
	    color: #818181;
	}
	.list-view>div>p:nth-child(3) span:nth-child(2){
	    font-size: .3rem;
	    color: #ff2336;
	    margin-left: .1rem;
	}
	.active {
		color: #00afff;
	}
</style>