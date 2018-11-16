const API = require("../config.js").GET_ENDPOINT

$('.loading-background').fadeIn();
$('.loading-background').removeClass('hide');


fetch(API, {
	method: "get",
	headers: {
		"Content-type": "application/json; charset=UTF-8"
	}
})
.then(function(response) {
  return response.json();
})
.then(function(myJson) {
  return myJson
})
.then((data)=>{
	$('.loading-background').fadeOut();
	$('#table').bootstrapTable({
		columns: [{
			field: 'name',
			title: 'Name'
		}, {
			field: 'result',
			title: 'Points'
		}],
		data: data
	});
})







