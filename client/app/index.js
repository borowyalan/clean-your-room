const fetchExcelData = require('./fetchDataModule.js');
const fetch = require('node-fetch');
const chalk = require('chalk');
const notifier = require('node-notifier');

const API = require("../config.js").PUT_ENDPOINT


// due to the heroku free plan limitation, after 30 minutes of inactivity 
// server 'sleeps'. This blocks the .bat script which PUTs the data into the cloud.
// To resolve this, we firstly have to check if it's up, and if not - make it 
// (by sending simple GET request). 
function handleErrors(response){
	if (!response.ok){
		throw Error(response.statusText);
	}
	return response;
}

function putDataToServer(){
	notifier.notify({
		title: 'Zapisywanie ⏳',
		message: 'Oczekiwanie na serwer...',
		icon: './sheets_icon.png',
		wait: true,
		sound: false,
	}); 
	fetchExcelData().then((excelData)=>{
		fetch(API, {
			method: "put",
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			},
			body: excelData
		})
		.then(handleErrors)
		.then(()=>{
			console.log('Data sent to the Cloud');
			notifier.notify({
				title: 'Sukces ✔️',
				message: 'Pomyślnie zaktualizowano',
				icon: './sheets_icon.png'
			  });
		})
		.catch((error)=>{
			console.log(error + "asdasd")
			notifier.notify({
				title: '🤕',
				message: 'Nie można połączyć się z serwerem ',
				icon: './sheets_icon.png'
			});
		})
	})
}

putDataToServer()
