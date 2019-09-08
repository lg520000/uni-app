import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		Timer: 60,
		TimerRet:false
	},
	mutations: {
		// countdown(state, data) {
		// 	let that = this;
		// 	let Timer = setInterval(() => {
		// 		state.Timer--;
		// 		if (state.Timer <= 0) {
		// 			state.Timer = 60;
		// 		}
		// 	}, 1000);
		// },
	},
	actions: {

	},
	modules: {

	}
})

export default store
