import {getImgDetailList} from '@/api/index'
let state = {
	imgList: [],
	flag:false,
	isImgs:false,
	ind:0,
	num: 0
}
let getters = {
	list(state) {
		if(!state.imgList.List){
			return [];
		}
		let url = (track) => {
			var str = track.Url.substring(track.Url.indexOf('{0}'))
			track.Url = track.Url.replace(str,`${track.HighSize}.jpg`)
		}
		// console.log(state.imgList.List)
			for(var i=0;i<state.imgList.List.length;i++) {
				url(state.imgList.List[i])
			}
		return state.imgList
	}
}


let mutations = {
	photos: (state, payload) => {
		state.imgList = payload;
		console.log(payload)
	},
	isFlagT: (state, payload) => {
		console.log(payload)
		state.ind = payload.ind;
		state.num = payload.count;
		state.flag = true
	},
	isImages: (state, payload) => {
		state.isImgs = payload
	},
	isFlagF: (state, payload) => {
		// console.log(123)
		state.flag = false
	},
}

let actions = {
	photos: ({commit}, payload) => {
		console.log(payload)
		getImgDetailList(payload.SerialID,payload.ImageID,payload.ColorID?payload.ColorID:'', payload.CarID?payload.CarID:'').then(res => {
			commit('photos', res.data)
		})
	}
}

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}