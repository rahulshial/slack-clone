import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBnkvwtCB2T2QLCrjdZe0FMc21IRxNEcp0",
  authDomain: "slack-clone-fb207.firebaseapp.com",
  projectId: "slack-clone-fb207",
  storageBucket: "slack-clone-fb207.appspot.com",
  messagingSenderId: "937467512738",
  appId: "1:937467512738:web:78feb1ee2d98ecc71fd4fb"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;