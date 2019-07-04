import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
  apiKey: "AIzaSyC4mOsW3uGdYuB-QwdetDdBNIRc4EuPJZM",
    authDomain: "bootcamp-piaic-5fe83.firebaseapp.com",
    databaseURL: "https://bootcamp-piaic-5fe83.firebaseio.com",
    projectId: "bootcamp-piaic-5fe83",
    storageBucket: "bootcamp-piaic-5fe83.appspot.com",
    messagingSenderId: "831622014858",
    appId: "1:831622014858:web:0678b23593f3b602"
  };
  firebase.initializeApp(config);

  export default firebase;
