import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB3jxoQ_6B-pUceUWiDPm1S85Bj_pSZurQ",
  authDomain: "divinesparkle-6bf43.firebaseapp.com",
  projectId: "divinesparkle-6bf43",
  storageBucket: "divinesparkle-6bf43.appspot.com",
  messagingSenderId: "1010028404469",
  appId: "1:1010028404469:web:c989c2e03e331d10012fbc"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);