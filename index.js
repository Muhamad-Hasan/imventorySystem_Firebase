console.log("connected index");
///var email=document.getElementById("login").value;

//console.log(email);
var firebaseRef = firebase.database();
        
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        //alert('login');
        document.getElementById("login").style.display = "none";
        window.location.assign('main.html');
        //console.log(document.getElementById("main"));    
    } else {
        // No user is signed in.
        //document.getElementById("main").style.display= "none";
        //alert("logout");                
        document.getElementById("login").style.display = "block";
        console.log("logout");
        // window.location.assign('login.html')
    }
});

function signin() {
    //alert("run");
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;
    console.log(email  + password);


    
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
}

function login()
    {

        var email=document.getElementById("email").value;
        var password=document.getElementById("pass").value;
        console.log(email+password);
        
        const promise=firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        
        alert("Error :"+errorMessage);
        //promise.then(e => window.location.replace('colddrink.html'));
          
      });
    }

    
    
