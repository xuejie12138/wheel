<template>
    <div class="index">
	    <div class="wrap">
	        <section>
	            <div v-for="(item, index) in brand" :key="index">
	                <ul>
	                    <p :id="index" @click.stop>{{index}}</p>
	                    <li v-for="(value, key) in item" :key="key" @click = "masterList(value.MasterID)">
	                        <img :data-src="value.CoverPhoto" src="../assets/timg.gif">
	                        <span>{{value.Name}}</span>    
	                    </li>
	                </ul>
	            </div>
	        </section>
	    </div>
        <div v-show="anchor" class="anchor">
            <span class="anchor_text">{{anchorVal}}</span> 
        </div>
        <aside  @touchstart = "touchStart"
                @touchmove = "touchMove"
                @touchend = "touchEnd">
            <span v-for="(item, index) in letters" :key="index" @click="mark">{{item}}</span>   
        </aside>
        <MakeList></MakeList>
    </div>
</template>

<script>
    import {mapState, mapMutations, mapActions} from 'vuex';
    import MakeList from './common/masterList'
    import lazyload from '../util/lazyload'
    export default {
        computed: {
            ...mapState({
                letters: state=>state.Index.letters,
                brand: state=>state.Index.brand,
                anchor: state => state.Index.anchor,
                anchorVal: state => state.Index.anchorVal
            })
        },
        components: {
            MakeList
        },
        methods: {
            ...mapActions({
                initState: 'Index/initState',
                masterList: 'Index/masterList'
            }),
            ...mapMutations({
                
            }),
            mark(e) {
                let index = Math.floor((this.pageY-this.marginTop)/this.height);
                let ele = document.getElementById(e.target.innerHTML)
                let top = ele.offsetTop;
                document.querySelector('.wrap').scrollTop = top
            },
            touchStart(e){
                this.$store.state.Index.anchor = true
                this.$store.state.Index.anchorVal = e.target.innerHTML
            },
            touchEnd() {
                 this.$store.state.Index.anchor = false
            },
            touchMove(e) {
            	this.pageY = e.touches[0].pageY
            	let index = Math.floor((this.pageY-this.marginTop)/this.height);
            	if(index<0) {
            		index = 0
            	}
            	if(index>this.letters.length-1){
            		index = this.letters.length - 1;
            	}
                
                this.$store.state.Index.anchorVal = this.letters[index]
                let anchor = document.querySelector('.anchor')
            	let ele = document.getElementById(this.letters[index])
            	let top = ele.offsetTop;
            	document.querySelector('.wrap').scrollTop = top
           },
        },
        mounted() {
            this.initState('.wrap');
        },
   		updated() {
   			//获取每个字母高度
            lazyload('.wrap')
   			this.height = 0.4*window.innerWidth/750*100
   			//获取字母距离顶部的高度
   			this.marginTop = (window.innerHeight - (this.letters.length)*this.height)/2;
   		}
    }
</script>
<style scoped lang="scss">
	.index{
		height: 100%;
	}
	.wrap{
		height:100%;
		overflow-y:scroll;
	}
    .anchor{
        width:1rem;
        height:1rem;
        border-radius:50%;
        position:absolute;
        transition:1s;
        top:50%;
        left:50%;
        background:#ccc;
        display:flex;
        justify-content:center;
        align-items:center;
        transform:translate(-50%,-50%)
    }
    .anchor_text{
        font-size:.36rem;
        color:#f5f5f5;
    }
    aside{
        position: fixed;
        top: 50%;
        right: .1rem;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        span{
        	display:inline-block;
        	height:.35rem;
            font-size: .24rem;
            color: #666;
            font-weight: 500;
            padding: .02rem .2rem;
        }
    }
    ul{
        p{
            font-size: .28rem;
            line-height: .4rem;
            background: #f4f4f4;
            padding-left: .3rem;
            color: #aaa;
        }
        li{
            margin: 0 .3rem;
            height: 1rem;
            box-sizing: border-box;
            border-bottom: 1px solid #ddd;
            display: flex;
            align-items: center;
        }
        img{
            height: .8rem;
        }
        span{
            font-size: .32rem;
            margin-left: .4rem;
        }
    }
</style>
