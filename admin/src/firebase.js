import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAcqGbq-ZxDuoiz49XkB82YOYTV-adgXzs",
  authDomain: "cinema-cf81c.firebaseapp.com",
  projectId: "cinema-cf81c",
  storageBucket: "cinema-cf81c.appspot.com",
  messagingSenderId: "569136184296",
  appId: "1:569136184296:web:0d0ac4a89b74eafcaa425d",
  measurementId: "G-7KCVP65NBM",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
