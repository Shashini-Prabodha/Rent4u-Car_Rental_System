$(document).ready(function(){

	$('[data-bs-chart]').each(function(index, elem) {
		this.chart = new Chart($(elem), $(elem).data('bs-chart'));
	});

});
var yValues = [55, 49, 44, 24, 16,34,15];
var barColors = [
	"#ff6393",
	"#c44bff",
	"#ff6dcc",
	"#4e73df",
	"#04cd98",
	"#ffe53c",
	"#36b9cc"
];
var xValues = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday","Saturday"];

new Chart("myChart", {
	type: "doughnut",
	data: {
		labels: xValues,

		datasets: [{
			backgroundColor: barColors,
			data: yValues,
			hoverOffset: 10
		}]
	},
	options: {
		title: {
			display: true,
			text: ""
		}
	}
});