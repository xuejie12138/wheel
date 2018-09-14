let state = {
	currentYear: null,
	list: [],
	typeName: '车款',
	carId: null
}

let mutations = {
	setYear: (state, payload) => {
		if(payload == state.currentYear){
			return false
		}
		state.currentYear = payload
		let list = JSON.parse(window.sessionStorage.getItem('list'))
		state.list = list[payload]
	},
	changType: (state, payload) => {
		state.typeName = payload
	},
	carId: (state, payload) => {
		state.carId = payload
	},
}

let actions = {

}

export default {
	namespaced:true,
	state,
	mutations,
	actions
}