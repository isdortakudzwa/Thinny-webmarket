import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC3DFfGGVcqp4b685PgbTPvNQIX6rNJTQs",
    authDomain: "my-self-taught-project.firebaseapp.com",
    projectId: "my-self-taught-project",
    storageBucket: "my-self-taught-project.appspot.com",
    messagingSenderId: "7877008625",
    appId: "1:7877008625:web:457abfe4fd58c550cc1d50"
  };

  firebase.initializeApp(firebaseConfig);

  const projectAuth = firebase.auth()

  export default  projectAuth;

