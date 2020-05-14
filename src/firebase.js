import * as firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAAUfwAQaI4ZUJaSLJEB_PJJLDbx3QCeEM",
    authDomain: "scedule-react.firebaseapp.com",
    databaseURL: "https://scedule-react.firebaseio.com",
    projectId: "scedule-react",
    storageBucket: "scedule-react.appspot.com",
    messagingSenderId: "78901530011",
    appId: "1:78901530011:web:690d1d12534a958334253e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase