<template>
	<div class="detailList">
		<div class="content">
			<div class="img" @click="image(details.SerialID)">
				<img :src="details.Picture"/> 
				<span class="count">{{details.pic_group_count}}张照片</span>
			</div> 
			<div class="info">
				<p>{{details.market_attribute&&details.market_attribute.dealer_price}}</p> 
				<p>指导价 {{details.market_attribute&&details.market_attribute.official_refer_price}}</p> 
				<div class="action active">
					<button data-hover="hover">{{details.BottomEntranceTitle}}</button>
				</div>
			</div>
			<div class="car-list">
				<div class="c-type">
					<span :data-class="currentYear" v-for="(item,index) in year" :key="index" :class="currentYear == item?'active':item" @click="setYear">
					 	{{item}}
					</span>
				</div>
				<div class="c-list">
					<div v-for="(item,index) in list" :key="index">
						<p>{{index}}</p>
						<ul class="ul_list">
							<li class="list-view" v-for="(val, index) in item" :key="index">
								<div>
									<p>{{val.car_name}}</p>
									<p>{{`${val.horse_power}马力${val.gear_num}挡${val.trans_type}`}}</p>
									<p><span>指导价 {{val.market_attribute.official_refer_price}}</span><span>{{val.market_attribute.dealer_price_min}}起</span></p>
								</div>
								<button>{{details.BottomEntranceTitle}}</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="footer">
			<button>{{details.BottomEntranceTitle}}</button>
		</div>
	</div>
</template>

<script>
	import {mapState,mapGetters, mapMutations, mapActions} from 'vuex'
	export default {
		computed: {
			...mapState({
				details: (state)  => state.detail.details,
				currentYear: (state) => state.detail.currentYear,
				typeID: (state) => state.image.typeID,
				ColorID: (state) => state.image.ColorID,
				colorName: (state) => state.imgColor.colorName,
				typeName: (state) => state.imgType.typeName
			}),
			...mapGetters({
				year: 'detail/year',
				list: 'detail/list'
			})
		},
		methods: {
			...mapActions({
				initDetail: 'detail/initDetail',
				getImgList: 'image/getImgList',
			}),
			...mapMutations({
				getYear: 'detail/getYear',
				setId: 'image/setId',
				changName: 'imgColor/changName',
				changType: 'imgType/changType',
			}),
			setYear(e) {
				this.getYear(e.target.innerText.trim())
			},
			image(id) {
				this.$router.push({
		            path: '/image', 
		            query: { 
		                id:id
		            }
		        }),
		       this.changName('颜色')
		       this.changType('车款')
		       this.setId({typeID:null, ColorID: null})
		       this.getImgList({SerialID: this.$route.query.id, ColorID: this.ColorID, CarID: this.typeID})
			}
		},
		mounted() {
			this.initDetail(this.$route.query.id)

		},
		updated() {
		}
	}


</script>

<style scoped>
	.detailList{
		width:100%;
		height:100%;
		display:flex;
		flex-direction:column;
		font-size:.28rem;
		overflow:hidden;
		background:#f4f4f4;
	}
	.count {
		position:absolute;
	    bottom: .3rem;
	    right: .3rem;
	    color: #fff;
	    padding: 1px .1rem;
	    border-radius: .2rem;
	    background: rgba(0,0,0,.6);
	    font-size: .24rem;
	}
	.content {
		flex:1;
		overflow-y:scroll;
	}
	.footer{
		height:1rem;
		background:#3aacff;
	}
	.img {
	    position: relative;
	    height: 3.29rem;
	    overflow: hidden;
	}
	.img img {
	    width: 100%;
	    top: 50%;
	    -webkit-transform: translateY(-50%);
	    transform: translateY(-50%);
	    position: absolute;
	}
	.info {
	    padding: .36rem .2rem .3rem;
	    background: #fff;
	    position: relative;
	}
	.info p {
	    max-width: 3.4rem;
	    overflow: hidden;
	    text-overflow: ellipsis;
	}
	.info p:first-child {
	    font-size: .36rem;
	    color: red;
	    font-weight: 500;
	}
	.info p:first-child span {
	    font-size: .32rem;
	    font-weight: 400;
	}
	.info p:first-child {
	    font-size: .36rem;
	    color: red;
	    font-weight: 500;
	}
	.info p:nth-child(2) {
	    font-size: .26rem;
	    color: silver;
	}
	.info p {
	    max-width: 3.4rem;
	    overflow: hidden;
	    text-overflow: ellipsis;
	}
	.info .action {
	    padding-top: .2rem;
	    -webkit-box-pack: justify;
	    justify-content: space-between;
	    width: 50%;
	    position: absolute;
	    right: .1rem;
	    top: .22rem;
	}
	.info .action button:last-child {
	    background: #00afff;
	    color: #fff;
	}

	.info .action button {
		display:inherit;
	    border-radius: .1rem;
	    font-size: .32rem;
	    height: .7rem;
	    width: 3.45rem;
	    border: none;
	    box-sizing: border-box;
	}
	.c-type {
	    border-top: .15rem solid #f4f4f4;
	    padding: 0 .3rem;
	    font-size: .32rem;
	    height: .77rem;
	    line-height: .77rem;
	    background: #fff;
	}
	.c-type span {
	    padding-right: .46rem;
	}
	.c-list>div>p {
		padding: .1rem .2rem;
		box-sizing:border-box;
		background: #f4f4f4;
		color: #999;
	}
	.ul_list>.list-view:last-child{
		margin-bottom: 0;
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
	.footer>button{
	    width: 100%;
	    background: #3aacff;
	    height: 1rem;
	    color: #fff;
	    border-width:0;
	    font-size:.32rem;
	}
	.active{
		color: #3aacff;
	}
</style>