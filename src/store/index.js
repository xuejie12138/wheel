import Vue from 'vue'
import VueX from 'vuex'

import Index from './module/index'
import detail from './module/detail'
import image from './module/image'
import Photo from './module/Photo'
import login from './module/login'
import imgList from './module/imgList'
import imgColor from './module/color'
import imgType from './module/imgType'

import createLogger from 'vuex/dist/logger'

Vue.use(VueX)

export default new VueX.Store({
	modules:{
		Index,
		detail,
		image,
		Photo,
		login,
		imgList,
		imgColor,
		imgType
	},
	plugins:[createLogger()]
})