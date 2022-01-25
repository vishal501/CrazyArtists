
import Firebase from 'firebase/compat/app';
import "firebase/compat/database";


const firebaseConfig = {
  apiKey: "AIzaSyC7e7udCB71M3ACeze8V36r_eRvdzO1KLM",
  authDomain: "teachers-dd1e8.firebaseapp.com",
  databaseURL: "https://teachers-dd1e8-default-rtdb.firebaseio.com",
  projectId: "teachers-dd1e8",
  storageBucket: "teachers-dd1e8.appspot.com",
  messagingSenderId: "1072874039121",
  appId: "1:1072874039121:web:390a57fd4ccbe97b58d570",
  measurementId: "G-N0NYRNKBCC"
};

// Initialize Firebase
Firebase.initializeApp(firebaseConfig);

export default Firebase;