// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { DebugInstructions } from "react-native/Libraries/NewAppScreen";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCE6ReHB6Zcc7nNaV6czOdGYxMyUSwa0as",
  authDomain: "precise-rune-322521.firebaseapp.com",
  databaseURL: "https://precise-rune-322521-default-rtdb.firebaseio.com",
  projectId: "precise-rune-322521",
  storageBucket: "precise-rune-322521.appspot.com",
  messagingSenderId: "420501347303",
  appId: "1:420501347303:web:1838fbb26159ec289bbb42",
  measurementId: "G-WX3FWQDSDS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default DB;