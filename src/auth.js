import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCnFg40stgdBpHtEMzIkk4oooGDuROpI3M",
    authDomain: "movieapp-436df.firebaseapp.com",
    projectId: "movieapp-436df",
    storageBucket: "movieapp-436df.firebasestorage.app",
    messagingSenderId: "194191203111",
    appId: "1:194191203111:web:54a4de0559bc67ed342702",
    measurementId: "G-NXFJQ2G2P8"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut };
