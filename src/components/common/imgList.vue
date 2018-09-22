<template>
	<div class="list" @scroll="scroll" ref="scroll">
	 	<ul  ref="list">
	 		<li v-for="(item, index) in list.List" @click="imgTap(item.Id,index)">
				<img :data-src="item.Url" :src="item.Url"/>
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
				imgList: state => state.Photo.imgList,
				typeID: (state) => state.image.typeID,
				ColorID: (state) => state.image.ColorID
			}),
			...mapGetters({
				list: 'Photo/list'
			})
		},
		methods: {
			...mapMutations({
				isFlagT: 'Photo/isFlagT'
			}),
			...mapActions({
				photos: 'Photo/photos'
			}),
			imgTap(id,index){
				// console.log(this.list.Count)
				this.isFlagT({ind:index,count:this.list.Count})
			},
			scroll() {
				let scrollTop = this.$refs.scroll.scrollTop;
				let eleHeight =  this.$refs.list.getBoundingClientRect().height;
				if(window.innerHeight + scrollTop + 20 > eleHeight) {
					this.photos({SerialID:this.$route.query.id,ImageID:this.imgList.ID, ColorID: this.ColorID, CarID: this.typeID,Type: 'scroll'})
				}
			}
		},
		mounted() {
			
		},
		updated() {

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
		display:flex;
		flex-wrap:wrap;
	}
	.list ul li {
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