import firebase from 'firebase/app';
import 'firebase/firestore';


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA3dp92N_NPcLwjQ9eya_2drEU7DkrdyD8",
    authDomain: "estate-data-trial.firebaseapp.com",
    databaseURL: "https://estate-data-trial-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "estate-data-trial",
    storageBucket: "estate-data-trial.appspot.com",
    messagingSenderId: "202980939492",
    appId: "1:202980939492:web:c5660b327eeae3c9243ef1",
    measurementId: "G-TMTW600HP7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
  
export default firebase