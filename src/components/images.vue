
<template>
<div>
	<div class="images">
		<div class="navTop">
			<p data-hover="hover" @click="imgColor"><span>{{colorName}}</span></p>
			<p data-hover="hover" @click="imgType"><span><em>{{typeName}}</em></span></p>
		</div>
		<div class="img">
			<ul v-for="(item, index) in list" :key="index">
				<li v-for="(val, index) in item.List" :key="index" @click="imgTap(item.Id,index,item.Count)">
					<img :src="val.Url" alt=""/>
				</li>
				<div @click="getImgs(item.Id)">
					<p>{{item.Name}}</p>
					<p>{{item.Count}}张></p>
				</div>
			</ul>
		</div>
	</div>
	<ImgList v-if="isImgs"></ImgList>
	<ImgDetail  v-if="flag" :imgIndex="ind"></ImgDetail>
</div>
	
</template>

<script>
	import {mapState,mapGetters, mapMutations, mapActions} from 'vuex';
	import ImgDetail from './common/imgdetail'
	import ImgList from './common/imgList'
	export default {
		computed: {
			...mapState({
				imgList:(state) => state.image.imgList,
				flag: (state) => state.Photo.flag,
				isImgs: (state) => state.Photo.isImgs,
				ind: (state) => state.Photo.ind,
				typeID: (state) => state.image.typeID,
				ColorID: (state) => state.image.ColorID,
				colorName: (state) => state.imgColor.colorName,
				typeName: (state) => state.imgType.typeName
			}),
			...mapGetters({
				list: 'image/list'
			})
		},
		components: {
			ImgDetail,
			ImgList
		},
		methods: {
			...mapActions({
				photos:'Photo/photos',
				getColorList: 'imgColor/getColorList',
				getImgList: 'image/getImgList',
			}),
			...mapMutations({
				isFlagT: 'Photo/isFlagT',
				isImages: 'Photo/isImages',
				isFlagF: 'Photo/isFlagF',
				resePpage: 'Photo/resePpage'
			}),
			imgTap(id,index, count){
				this.isFlagT({ind:index,count:count})
				this.photos({SerialID:this.$route.query.id,ImageID:id, ColorID: this.ColorID, CarID: this.typeID,Type:'click'})
			},
			getImgs(id){
				this.isImages(true)
				this.photos({SerialID:this.$route.query.id,ImageID:id, ColorID: this.ColorID, CarID: this.typeID,Type:'click'})
			},
			imgColor(id) {
				this.$router.push({
					path:'/imgColor',
					query: {
						id: this.$route.query.id
					}
				})
				// this.getColorList(this.$route.query.id)
			},
			imgType() {
				this.$router.push({
					path:'/typeList',
					query: {
						id: this.$route.query.id
					}
				})
			}
		},
		mounted() {
			this.isImages(false)
			this.isFlagF()
			// console.log(this.ColorID, this.typeID)
			// this.getImgList({SerialID: this.$route.query.id, ColorID: this.ColorID, CarID: this.typeID})
			this.resePpage()
		},
		updated() {
			
		}
	}
</script>

<style scoped>
	.navTop {
	    background: #fff;
	    width: 100%;
	    height: .8rem;
	    align-items: center;
	    box-sizing: border-box;
	    display:flex;
	}
	.navTop p {
	    flex: 1;
	    text-align: center;
	    box-sizing: border-box;
	    color: #454545;
	}
	.navTop p span {
		max-width: 2.6rem;
	    display: inline-block;
	    vertical-align: middle;
	    line-height: 1.25;
	    font-size: .28rem;
	}
	.navTop p:after {
    content: "";
    display: inline-block;
    padding-top: .16rem;
    padding-right: .16rem;
    border-top: 2px solid #ccc;
    border-right: 2px solid #ccc;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
    margin-left: .2rem;
    vertical-align: 16%;
}
	.images{
		width:100%;
		height:100%;
		overflow:hidden;
	}
	.img{
		overflow: hidden;
	    position: absolute;
	    background: #fff;
	    top: .98rem;
	    bottom: 0;
	    overflow-y: scroll;
	    -webkit-overflow-scrolling: touch;
	    border-bottom: .4rem solid #f4f4f4;
	}
	.img ul {
		position:relative;
		height:auto;
		clear:both;
		flex-wrap:wrap;
	}
	.img ul>div{
		position: absolute;
		top:0;
		left:0;
		width: 2.46rem;
	    height: 2.46rem;
	    text-align: center;
    	background: rgba(56,90,130,.5);
    	color:#fff;
	}
	.img ul>div p:first-child {
	    font-size: .28rem;
	    margin-top: .8rem;
	}
	.img ul>div p:last-child {
	    font-size: .26rem;
	}
	.img ul li {
		float:left;
	    margin-right: .04rem;
	    margin-bottom: .06rem;
	    width: 2.46rem;
	    height: 2.46rem;
	    padding: 0;
	}
	.img ul li img {
	    width: 100%;
	    height: 100%;
	    background-size: cover;
	}
</style>