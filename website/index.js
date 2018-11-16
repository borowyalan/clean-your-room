const configObject = require("./config.js")

function initApp() {
	firebase.initializeApp(configObject);
	// Listening for auth state changes.
	// [START authstatelistener]
	firebase.auth().onAuthStateChanged(function(user) {
	  // [START_EXCLUDE silent]
	  // [END_EXCLUDE]
	  var user = firebase.auth().currentUser;
	if(user){
		console.log('you\'re logged in');
	} else {
		// window.location.replace("someUrl")
		console.log(user)
	}
	})
}

window.onload = function(){
initApp();
}