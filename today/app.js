function signUp() {
    var email = document.getElementById("email")
    var password = document.getElementById("password")
  

    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            console.log(user)
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("error",errorMessage)
            // ..
        });


}