import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyAQYyoj5AbsDFO9V_BqcQX6ECHHVYj9nic",
    authDomain: "campusapp-16abc.firebaseapp.com",
    databaseURL: "https://campusapp-16abc.firebaseio.com",
    projectId: "campusapp-16abc",
    storageBucket: "",
    messagingSenderId: "196025847151",
    appId: "1:196025847151:web:aee85a4f92359587"
  };
  firebase.initializeApp(config);

  export default firebase;
