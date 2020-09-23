import * as firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyD8rO-F__6c9g5dnSagQpqib1PCEvYFvYM",
  authDomain: "unity-library.firebaseapp.com",
  databaseURL: "https://unity-library.firebaseio.com",
  projectId: "unity-library",
  storageBucket: "unity-library.appspot.com",
  messagingSenderId: "732132477025",
  appId: "1:732132477025:web:53d67d5cd92d36cc5c8220"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();