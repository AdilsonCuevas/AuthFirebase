const { Router } = require('express');
const routers = Router();
const fire = require('firebase'); 

var errorMessage;
var errorMessage1;


const firebaseConfig = {
    apiKey: "AIzaSyB-ozKJgGrLlOiWIA6wJcyAC5Z7DNppXko",
    authDomain: "tele-medicina04.firebaseapp.com",
    databaseURL: "https://tele-medicina04.firebaseio.com",
    projectId: "tele-medicina04",
    storageBucket: "tele-medicina04.appspot.com",
    messagingSenderId: "34403712275",
    appId: "1:34403712275:web:900e0ade27db51ded36ee6",
    measurementId: "G-B4VCQ7QNCH"
  };

fire.initializeApp(firebaseConfig);
const fb = fire.auth();

routers.get('/', (req, res) => {
    res.render('index');
});

routers.post('/new_contacs', (req, res) => {
    fb.createUserWithEmailAndPassword(req.body.email, req.body.password).catch(function(error) {
        errorMessage = error.message;
        res.render('index', {errorRegistro: errorMessage});
    });
});

routers.post('/contacs_EX', (req, res) => {
    fb.signInWithEmailAndPassword(req.body.email1, req.body.password1).catch(function(error) {
        errorMessage1 = error.message;
        res.render('index', {errorRegistro1: errorMessage1});
      });

    fb.onAuthStateChanged(function(user) {
        if (user) {
          console.log('usuario existente');
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // ...
        } else {
            console.log('no hay usuario');
        }
      });
});




module.exports = routers;