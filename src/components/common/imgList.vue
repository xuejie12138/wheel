<template>
	<div class="list" ref="list">
	 	<ul>
	 		<li v-for="(item, index) in list.List" @click="imgTap(item.Id,index)">
				<img :data-src="item.Url" src=""/>
	 		</li>
	 	</ul>
	</div>
</template>

<script>
	import {mapState,mapGetters, mapMutations, mapActions} from 'vuex';
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
		computed: {
			...mapState({
				imgList: state => state.Photo.imgList
			}),
			...mapGetters({
				list: 'Photo/list'
			})
		},
		methods: {
			...mapMutations({
				isFlagT: 'Photo/isFlagT'
			}),
			imgTap(id,index){
				// console.log(this.list.Count)
				this.isFlagT({ind:index,count:this.list.Count})
			},
		},
		mounted() {
			console.log(this.imgList)

		},
		updated() {
			console.log(this.$refs)
			window.addEventListener('scroll',function(){
			 	console.log(456)
			 })
		}
	}
</script>

<style scoped>
	.list{
		position: absolute;
		top: 0;
		left: 0;
		background: #fff;
		width: 100%;
		height: 100%;
		overflow-y: scroll;
	}
	.list ul {
		position:relative;
		height:auto;
		clear:both;
		flex-wrap:wrap;
	}
	.list ul>div{
		position: absolute;
		top:0;
		left:0;
		width: 2.46rem;
	    height: 2.46rem;
	    text-align: center;
    	background: rgba(56,90,130,.5);
    	color:#fff;
	}
	.list ul>div p:first-child {
	    font-size: .28rem;
	    margin-top: .8rem;
	}
	.list ul>div p:last-child {
	    font-size: .26rem;
	}
	.list ul li {
		float:left;
	    margin-right: .04rem;
	    margin-bottom: .06rem;
	    width: 2.46rem;
	    height: 2.46rem;
	    padding: 0;
	    display:flex;
	    justify-content:center;
	    align-items:center;
	}
	.list ul li img {
		background:#fff;
	    width: 100%;
	    height: 100%;
	    background-size: cover;
	}
</style>