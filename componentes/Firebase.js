import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
 
const firebaseConfig = {
  apiKey: "AIzaSyCyhtidVW41aRY0i0v7jj4JTSqhbZaLwek",
  authDomain: "cursos-senac-6303c.firebaseapp.com",
  projectId: "cursos-senac-6303c",
  storageBucket: "cursos-senac-6303c.firebasestorage.app",
  messagingSenderId: "897448786658",
  appId: "1:897448786658:web:9d777ee0f04044c5e77cbb"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };