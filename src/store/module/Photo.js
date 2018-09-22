import {getImgDetailList} from '@/api/index'
let state = {
	imgList: {},
	flag:false,
	isImgs:false,
	ind:0,
	num: 0,
	page:1
}
let getters = {
	list(state) {
		// console.log(state.imgList)
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
		console.log(payload.list)
		if (payload.type === 'click') {
			state.imgList = payload.data
			state.page = 1
		}else {
			let list = state.imgList.List.concat(payload.data.List)
			console.log(payload.data)
			state.imgList.List = list
			state.page++
		}
		// console.log(state.page)
		
	},
	resePpage(state, payload) {
		state.page = 1
	},
	isFlagT: (state, payload) => {
		// console.log(payload)
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
	photos: ({commit, state}, payload) => {
		getImgDetailList(payload.SerialID,payload.ImageID,payload.ColorID, payload.CarID, state.page).then(res => {
			// console.log(res.data.List)
			commit('photos', {data:res.data, list: res.data.List , type:payload.Type})
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