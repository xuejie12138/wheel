import {getDetail} from '@/api/index'
let state = {
	details: {},
	currentYear:'全部'
}

let getters = {
	year(state) {
		if(!state.details.list){
			return []
		}
		let arr = state.details.list.map(item=>{
			return item.market_attribute.year
		})
		let set = new Set(arr)
		window.sessionStorage.setItem('year', [...set])
		return ['全部',...set]
	},
	list(state){
		if(!state.details.list){
			return []
		}
		let merge = (arr) => {
			let obj = {},
				newArr = [];
			arr.forEach(item => {
				let type = `${item.exhaust_str}/${item.max_power_str} ${item.inhale_type}`
				if(newArr.indexOf(type) === -1) {
					newArr.push(type)
					obj[type] = [item]
				}else{
					obj[type].push(item)
				}
			})
			
			// let list = JSON.stringify(state.details.list)
			// window.sessionStorage.setItem('list', list)
			return obj
		}
		let store = (arr) => {
			let year = window.sessionStorage.getItem('year').split(',')
			let newArr = {};
			let list = [];
			let newList = [];
			for(let val in arr) {
				list.push({key:val,list:arr[val]})
			}
			year.forEach(val=>{
				newArr[val] = list
			})
			window.sessionStorage.setItem('list', JSON.stringify(newArr))
		}	
		if(state.currentYear === '全部') {
			let list = merge(state.details.list)
			let getStore = store(list)
			getStore
			return merge(state.details.list)
		}else{
			return merge(state.details.list.filter(item=>{
				return item.market_attribute.year == state.currentYear
			}))
		}
	}
}

let mutations = {
	initDetail:(state,payload) => {
	payload.list.sort((a,b)=>{
			if(a.market_attribute.year != b.market_attribute.year) {
				return b.market_attribute.year - a.market_attribute.year
			}else{
				if(a.exhaust != b.exhaust) {
					return a.exhaust - b.exhaust
				}else {
					return a.horse_power - b.horse_power
				}
			}
		})
		state.details =  payload
	},
	getYear:(state, payload) => {
		// console.log(payload)
		state.currentYear = payload
	}
}

let actions = {
	initDetail: ({commit}, payload) => {
		getDetail(payload).then(body=>{
			commit('initDetail', body.data)
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