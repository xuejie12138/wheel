<template>
	<div class="mark" @click = "isFlag">
	<div>
		<swiper :options="swiperOption" ref="mySwiper">
		    <swiper-slide v-for="(item, index) in list.List" :key="index">
		    	<li><img :data-src="item.Url" src="../../assets/loding.gif"/></li>
		    </swiper-slide>
		 </swiper>
		 <div class="page">{{index}}/{{num}}</div>
		 <button class="btn">询问低价</button>
	</div>
	</div>
</template>

<script>
	import {mapState,mapGetters, mapMutations, mapActions} from 'vuex';
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import lazyload from '../../util/lazyload'
	import 'swiper/dist/css/swiper.css'
	export default {
		data() {
	      	return {
	      		index:0,
		        swiperOption: {//以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
		        	notNextTick: true,
		        	initialSlide:this.imgIndex || '',
			        onSlideChangeEnd: (e)=>{
			        	this.activeIndex(e.activeIndex)
				        lazyload('.mark')
			        }
		  		}
	  		}
	    },
	    props: {
			imgIndex:Number
	    },
		computed: {
			...mapState({
				num: state => state.Photo.num
			}),
			...mapGetters({
				list: 'Photo/list'
			})
		},
		components: {
			swiper,
   			swiperSlide
		},
		methods: {
			...mapMutations({
				isFlagF: 'Photo/isFlagF'
			}),
			isFlag() {
				this.isFlagF()
			},
			activeIndex(ind) {

			    this.index = ind+1;
			}
		},
		mounted() {
			this.index = this.imgIndex+1
		},
		updated() {
			// this.index++
			lazyload('.mark')
		}
	}
</script>

<style scoped>
	.mark {
		position: absolute;
		top: 0;
		left: 0;
		background: #000;
		z-Index:999;
		width: 100%;
		height: 100%;
	}
	.mark li {
		width: 100%;
	    height: 100%;
	    display: -webkit-box;
	    display: flex;
	    -webkit-box-pack: center;
	    justify-content: center;
	    -webkit-box-align: center;
	    align-items: center;
	    text-align: center;
	}
	.mark img{
		max-width: 100%;
    	max-height: 100%;		
	}
	.mark>div{
		width: 100%;
		height: 100%;
	}
	.swiper-container, swiper-wrapper, swiper-slide {
		width: 100%;
		height: 100%;
	}
	.btn {
		position: fixed;
	    font-size: .24rem;
	    padding: .08rem .15rem;
	    right: .1rem;
    	bottom: .1rem;
    	color: #fff;
	    background-color: #3aacff;
	    border: none;
	}
	.page{
		position: fixed;
	    font-size: .24rem;
	    right: 50%;
	    transform: translateX(50%);
    	bottom: .2rem;
    	color: #fff;
	}
</style>