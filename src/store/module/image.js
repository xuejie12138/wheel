import {getImgList} from '../../api/index'
let state = {
	imgList: [],
	list: [],
	ColorID: null,
	typeID: null
}

let getters = {
	list(state) {
		let url = (track) => {
			var str = track.Url.substring(track.Url.indexOf('{0}'))
			track.Url = track.Url.replace(str,`${track.LowSize}.jpg`)
		}
			for(var i=0;i<state.imgList.length;i++) {
				for(var j=0; j<state.imgList[i].List.length; j++) {
					url(state.imgList[i].List[j])
				}
			}
		return state.imgList
	}
}

let mutations = {
	obtainList: (state, payload) => {
		state.imgList = [...payload]
	},
	setId: (state, payload) => {
		for(let key in payload) {
			state[key] = payload[key]
		}
		// console.log(state.typeID)
	}

}

let actions = {
	getImgList: ({commit,state}, payload) => {
		console.log(payload)
		getImgList(payload.SerialID, payload.ColorID, payload.CarID).then(res=>{
			commit('obtainList', res.data)
		})
	}
}

export default {
	namespaced:true,
	state,
	getters,
	mutations,
	actions
}