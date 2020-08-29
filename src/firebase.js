/** @format */
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAb1x0_G5yNUTJbSuM1H8Cq6_nFbD7Y-6c",
  authDomain: "whatsapp-clone-66d89.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-66d89.firebaseio.com",
  projectId: "whatsapp-clone-66d89",
  storageBucket: "whatsapp-clone-66d89.appspot.com",
  messagingSenderId: "120441471894",
  appId: "1:120441471894:web:74f709433f965bd0e793b7",
  measurementId: "G-B1LTJ7K6D3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { provider, auth };
export default db;
