import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAuSSJKKdXQLqHfZliFchxNjhcgB12kOwI",
  authDomain: "show-wise.firebaseapp.com",
  projectId: "show-wise",
  storageBucket: "show-wise.appspot.com",
  messagingSenderId: "934024901351",
  appId: "1:934024901351:web:8d61a822d02f74fd1da842",
  measurementId: "G-SQZNB20VG3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
