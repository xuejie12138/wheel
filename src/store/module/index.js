import {getBrandList, masterList} from '@/api/index'
let state = {
	anchor:false,
	anchorVal:'',
	letters: [],
	brand: {},
	makeList: [],
	isMake:false,
	makeActive:''
}


let mutations = {
	initState:(state, payload) => {
		let letters = [];
		let brand = {};
		payload.forEach((val,ind) => {
			let spell = val.Spelling[0]
			if(letters.indexOf(spell) === -1) {
				letters.push(spell)
				brand[spell] = [val]
			}else {
				brand[spell].push(val)
			}
		})
		state.letters = letters
		state.brand = brand
	},
	masterList: (state, payload) => {
		state.makeList = payload
		state.isMake = true
	},
	hideList: (state, payload) => {
		state.isMake = false
	}

}

let actions = {
	initState:({commit}, payload) => {
		// console.log(getBrandList)
		getBrandList().then(body=>{
			// console.log(body)
			if(body.code === 1) {
				commit('initState', body.data)
			}else {
				alert(body.msg)
			}
		})
	},
	masterList:({commit}, payload) => {
		masterList(payload).then(body=>{
			commit('masterList', body.data)
		})
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}