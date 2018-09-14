<template>
<section class="make">
	<div ref = 'make' id="carType" :class="isMake?'car-type active':'car-type'"
		@touchstart="touchstart"
		@touchmove="touchmove"
		@touchend="touchend"
		@click="carList">
		<div @click.stop class="typeList" v-for = "(item, index) in makeList" :key = "index" >
			<p>{{item.GroupName}}</p>
			<ul>
				<li v-for="(value, ind) in item.GroupList " :key="ind" @click = "jumpDetail(value.SerialID)">
					<img :data-src="value.Picture" src="../../assets/timg.gif"/>
					<div>
						<p>{{value.AliasName}}</p>
						<p>{{value.DealerPrice}}</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</section>
</template>

<script>
	import { mapState, mapMutations} from 'vuex'
	import lazyload from '../../util/lazyload'
	export default {
		computed: {
			...mapState({
				makeList: (state)  => state.Index.makeList,
				isMake: (state) => state.Index.isMake
			})
		},
		methods: {
			...mapMutations({
				hideList: 'Index/hideList'
			}),
			touchstart(e) {
				this.pageX = e.touches[0].pageX
			},
			touchmove(e) {
				let pageX = e.touches[0].pageX
				this.pageMove = pageX - this.pageX
				if(this.pageMove > 0){
					this.$refs.make.style = `transform:translate3d(${this.offsetX}px, 0, 0)`;
				}
			},
			touchend(e) {
				this.$refs.make.style = ''
				if(this.pageMove > 50) {
					this.hideList()
					this.pageMove = 0
				}
			},
			jumpDetail(id) {
				// console.log(id)
				this.$router.push({
		            path: '/detail', 
		            query: { 
		                id:id
		            }
		        })
			},
			carList() {
				this.hideList()
			}
		},
		mounted() {
			lazyload('.car-type')
		},
		updated() {
			lazyload('.car-type')
		}
	}
</script>

<style>
	.car-type{
		position: fixed;
	    right: 0;
	    top: 0;
	    width: 75%;
	    height: 100%;
	    overflow: scroll;
	    background: #fff;
	    transform: translate3d(100%, 0, 0);
	    transition: transform .3s linear;
	    box-shadow: -3px 0px 10px 0px rgba(0,0,0,.1);
	}
	.active{
		transform: translate3d(0,0,0);
	}
	.car-type>div>p {
	    margin-left: 1px;
	    font-size: .28rem;
	    line-height: .48rem;
	    background: #f2f2f2;
	    padding-left: .3rem;
	    color: #717171;
	}
	.car-type ul {
	    margin-left: .1rem;
	}
	.car-type li {
		display:flex;
	    height: 1.4rem;
	    box-sizing: border-box;
	    border-bottom: 1px solid #ddd;
	}
	.car-type li img {
	    margin: 0 .1rem 0 .2rem;
	    width: 1.8rem;
	    height: 1.2rem;
	}
	.car-type li div p:first-child {
	    font-size: .34rem;
	    color: #5f687a;
	}
	.car-type li div p:nth-child(2) {
	    margin-top: .1rem;
	    font-size: .28rem;
	    color: red;
	}
</style>