import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1je6s0TBhQpK7uuDQUe_KqKt0Ft4_VpY",
  authDomain: "whatsapp-clone-firebase-e6ab7.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-firebase-e6ab7.firebaseio.com",
  projectId: "whatsapp-clone-firebase-e6ab7",
  storageBucket: "whatsapp-clone-firebase-e6ab7.appspot.com",
  messagingSenderId: "983857111783",
  appId: "1:983857111783:web:56c78cd495bfcb32abb842",
  measurementId: "G-WG864KH476"
};

const firebaseApp =firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;