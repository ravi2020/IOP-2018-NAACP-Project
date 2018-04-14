//var firebase = require("firebase");

(function() {
const config = {
  apiKey: "AIzaSyBH6zRL7f5CjpUhcHNz14v6hjx7UQKMaYs",
    authDomain: "naacp-1d0e7.firebaseapp.com",
    databaseURL: "https://naacp-1d0e7.firebaseio.com",
    projectId: "naacp-1d0e7",
    storageBucket: "naacp-1d0e7.appspot.com",
    messagingSenderId: "405172211339"
};

firebase.initializeApp(config);

const emailText = document.getElementById('email');
const passwordText = document.getElementById('psw');
const signInButton = document.getElementById('signInButton');
const createAccountBtn = document.getElementById('createAccountBtn');

signInButton.addEventListner('click', e => {

	const email = emailText.value;
	const password = emailText.value;
	const auth = firebase.auth();

	const promise = auth.signInWithEmailAndPassword(email, password);
	promise.catch(e => console.log(e.message));
});

createAccountBtn.addEventListner('click', e => {

	const email = emailText.value;
	const password = emailText.value;
	const auth = firebase.auth();

	const promise = auth.createUserWithEmailAndPassword(email, password);
	promise.catch(e => console.log(e.message));
})

	// Add signout


	firebase.auth().onAuthStateChanged(firebaseUser => {
		if(firebaseUser) {
			console.log(firebaseUser);
		} else {
			console.log('Not Logged In');
		}
	})

}());


// firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//   var errorCode = error.code;
//   var errorMessage = error.message;
// });

// firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
//   var errorCode = error.code;
//   var errorMessage = error.message;
// });

// firebase.auth().signOut().then(function() {
// }).catch(function(error) {
// });
