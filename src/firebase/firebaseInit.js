import firebase from 'firebase/app'
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBsYGZ2B0bUydjbnqSNBpWfgDGcDB_OrbE",
    authDomain: "fir-blog-4898c.firebaseapp.com",
    projectId: "fir-blog-4898c",
    storageBucket: "fir-blog-4898c.appspot.com",
    messagingSenderId: "27925962204",
    appId: "1:27925962204:web:692223d374a1fd6763c319",
    measurementId: "G-2J9TCC741Q"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { timestamp };
  export default firebaseapp.firestore;