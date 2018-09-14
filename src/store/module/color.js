import {getColorList} from '@/api/index'
let state = {
	colorList: {},
	list:[],
	ind:0,
	colorId:null,
	colorName: '颜色'
}
let getters = {
	year(state) {
		let list = state.colorList
		let arr = []
		for(let a in state.colorList) {
			arr.unshift(a)
		}
		state.list = state.colorList[arr[0]]
		return arr
	}
}
let mutations = {
	getColorList: (state, payload) => {
		state.colorList = {...payload}
	},
	colorId: (state, payload) => {
		state.colorId = payload
	},
	changColorList: (state, payload) => {
		let arr = []
		for(let a in state.colorList) {
			arr.unshift(state.colorList[a])
		}
		state.ind = payload
		state.list = arr[state.ind]
	},
	changName: (state, payload) => {
		state.colorName = payload
	}
}

let actions = {
	getColorList: ({commit}, payload) => {
		getColorList(payload).then(body=>{
			commit('getColorList', body.data)
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