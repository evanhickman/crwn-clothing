import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC5aucvfMp7lb0QDfva-9iivGCQ-Mo5g7I",
  authDomain: "crown-db-78f18.firebaseapp.com",
  databaseURL: "https://crown-db-78f18.firebaseio.com",
  projectId: "crown-db-78f18",
  storageBucket: "",
  messagingSenderId: "1086568688176",
  appId: "1:1086568688176:web:640c70146d411d6f"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
