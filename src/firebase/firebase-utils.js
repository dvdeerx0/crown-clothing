import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAIiwrts2qC6WRuyGXvHgc5j_f7R993rdI",
  authDomain: "ztm-crown-clothing-db.firebaseapp.com",
  databaseURL: "https://ztm-crown-clothing-db.firebaseio.com",
  projectId: "ztm-crown-clothing-db",
  storageBucket: "",
  messagingSenderId: "119166718155",
  appId: "1:119166718155:web:3d524067cf3364af"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;