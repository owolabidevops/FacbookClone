import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyCloo5b6q8GtYFTov5DMBcB4r5bzH0hhf4",
    authDomain: "facebookclone-e0359.firebaseapp.com",
    databaseURL: "https://facebookclone-e0359.firebaseio.com",
    projectId: "facebookclone-e0359",
    storageBucket: "facebookclone-e0359.appspot.com",
    messagingSenderId: "309654924866",
    appId: "1:309654924866:web:edb33cd2e9806e0f9247db",
    measurementId: "G-WWY43WGVZE"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth= firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider}
  export default db;