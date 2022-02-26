<template>
	<form @submit="onSubmit" class="row row-cols-lg-auto g-3">
			<div class="col">
				<input v-model="searchDay" type="number" min="1" max="31" class="form-control" id="day" placeholder="Day">
			</div>
			<div class="col">
				<select v-model="searchYear" class="form-select" id="month" aria-label="Default select example">
					<option selected>Year</option>
					<option value="2020">2020</option>
					<option value="2021">2021</option>
					<option value="2022">2022</option>
				</select>
			</div>
			<div class="col">
				<select v-model="searchMonth" id="month" class="form-select" aria-label="Default select example">
					<option selected>Month</option>
					<option value="01">January</option>
					<option value="02">February</option>
					<option value="03">March</option>
					<option value="04">April</option>
					<option value="05">May</option>
					<option value="06">June</option>
					<option value="07">July</option>
					<option value="08">August</option>
					<option value="09">September</option>
					<option value="10">October</option>
					<option value="11">November</option>
					<option value="12">December</option>
				</select>
			</div>
			<div class="mb-3">
				<button type="submit" class="btn btn-primary mb-3">Get Stats</button>
			</div>
	</form>
</template>

<script>
export default {
	name:"DailyCasesForm",
	data(){
		return {
			searchYear: "Year",
			searchMonth: "Month",
			searchDay: String
		}
	},
	methods: {
		onSubmit(e){
			e.preventDefault();
			var dateString = "";
			if(this.searchDay < 10){
				dateString= `${this.searchYear}-${this.searchMonth}-0${this.searchDay}`
			}else{
				dateString= `${this.searchYear}-${this.searchMonth}-${this.searchDay}`
			}
			console.log(dateString);
			this.$store.dispatch('getDayCasesDate',dateString);
		}
	},	
}
	
</script>
