<template>
	<h1>
		This is the cases page
	</h1>
	<DailyCasesForm />

	<p>Total cases for {{this.$store.getters.getDate}}: {{this.$store.state.dayCases}}</p>
</template>

<script>
import DailyCasesForm from '../components/DailyCasesForm.vue';

export default{
	name: 'HomeView',
	components: {
		DailyCasesForm,
	},
	mounted() {
		this.$store.dispatch('getDayCasesInitial')
	}

}
</script>
