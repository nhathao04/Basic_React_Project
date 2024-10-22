// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider} from "firebase/auth";
import { getAnalytics  } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0FTCMRJ03NQpnTZlMcgoO7H3Bx-jet_U",
  authDomain: "orchid-26ff0.firebaseapp.com",
  projectId: "orchid-26ff0",
  storageBucket: "orchid-26ff0.appspot.com",
  messagingSenderId: "549233821338",
  appId: "1:549233821338:web:ec5ff4b14449da86bb8123",
  measurementId: "G-0XREYC2ZM3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

export {auth, provider, analytics};