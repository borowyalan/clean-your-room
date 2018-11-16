	$('.loading-background').fadeIn();
	$('.loading-background').removeClass('hide');


fetch('https://bursa-soft.herokuapp.com/api', {
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
			title: 'Imię'
		}, {
			field: 'result',
			title: 'Punkty'
		}],
		data: data
	});
})

function toggleSignIn() {
	if (firebase.auth().currentUser) {
	  // [START signout]
	  firebase.auth().signOut();
	  // [END signout]
	} else {
	  var email = document.getElementById('email').value;
	  var password = document.getElementById('password').value;
	  if (email.length < 4) {
		alert('Please enter an email address.');
		return;
	  }
	  if (password.length < 4) {
		alert('Please enter a password.');
		return;
	  }
	  // Sign in with email and pass.
	  // [START authwithemail]
	  firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
		window.location.replace("index.html")
	  }).catch(function(error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		// [START_EXCLUDE]
		if (errorCode === 'auth/wrong-password') {
		  alert('Wrong password.');
		} else {
		  alert(errorMessage);
		}
		console.log(error);
		document.getElementById('quickstart-sign-in').disabled = false;
		// [END_EXCLUDE]
	  });
	  // [END authwithemail]
	}
	document.getElementById('quickstart-sign-in').disabled = true;
}

function sendEmailVerification() {
	// [START sendemailverification]
	firebase.auth().currentUser.sendEmailVerification().then(function() {
	  // Email Verification sent!
	  // [START_EXCLUDE]
	  alert('Email Verification Sent!');
	  // [END_EXCLUDE]
	});
	// [END sendemailverification]
  }

function initApp() {
	// Listening for auth state changes.
	// [START authstatelistener]
	firebase.auth().onAuthStateChanged(function(user) {
	  // [START_EXCLUDE silent]
	  // [END_EXCLUDE]
	  if (user) {
		// User is signed in.
		var displayName = user.displayName;
		var email = user.email;
		var emailVerified = user.emailVerified;
		var photoURL = user.photoURL;
		var isAnonymous = user.isAnonymous;
		var uid = user.uid;
		var providerData = user.providerData;
		// [START_EXCLUDE]
		document.getElementById('quickstart-sign-in').textContent = 'Sign out';
		if (!emailVerified) {
		  document.getElementById('quickstart-verify-email').disabled = false;
		}
		// [END_EXCLUDE]
	  } else {
		// User is signed out.
		// [START_EXCLUDE]
		document.getElementById('quickstart-sign-in').textContent = 'Sign in';
		// [END_EXCLUDE]
	  }
	  // [START_EXCLUDE silent]
	  document.getElementById('quickstart-sign-in').disabled = false;
	  // [END_EXCLUDE]
	});
	// [END authstatelistener]

	document.getElementById('quickstart-sign-in').addEventListener('click', toggleSignIn, false);
	// document.getElementById('quickstart-password-reset').addEventListener('click', sendPasswordReset, false);
  }

window.onload = function() {
	initApp();
};





