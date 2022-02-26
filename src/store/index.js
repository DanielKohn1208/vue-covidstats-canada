import { createStore } from 'vuex'

export default createStore({
  state: {
		dayCases:"...loading",
		casesYear:"",
		casesDay:"",
		casesMonth:"",

  },
  getters: {
		getDate(state){
			return `${state.casesYear}-${state.casesMonth}-${state.casesDay}`
		}
  },
  mutations: {
		setDayCases(state, {cases ,year, month,day}){
			console.log(cases);
			state.dayCases = cases
			state.casesYear = year
			state.casesMonth = month
			state.casesDay = day
		}
  },
  actions: {
		async getDayCasesInitial( { commit }){
			const response = await fetch('https://api.opencovid.ca')
				.then(response => response.json());
			const date = response.version;
			const year = date.substring(0,4);
			const month = date.substring(5,7);
			const day = date.substring(8,10);
			const cases = response.summary[0].cases
			console.log(cases);
			commit("setDayCases",{cases , year, month, day}) 
		},
		async getDayCasesDate({commit},dateString) {
			var url = `https://api.opencovid.ca/timeseries?date=${dateString}&loc=canada`;
			const response = await fetch(url)
				.then(response => response.json());
			if(response.cases.length != 1)
			{
				alert('invalid date chosen')
			}
			const cases = response.cases[0].cases;

			console.log(dateString);
			const year = dateString.substring(0,4);
			const month = dateString.substring(5,7);
			const day = dateString.substring(8,10);
			commit('setDayCases',{cases,year,month,day});
			
			
		}
	},

},)
