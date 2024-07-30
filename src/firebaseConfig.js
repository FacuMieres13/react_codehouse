import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyCLmKKwaHSvZztViQI6oRE_qiCwh12Od4w",
    authDomain: "eoka-store.firebaseapp.com",
    projectId: "eoka-store",
    storageBucket: "eoka-store.appspot.com",
    messagingSenderId: "273552661152",
    appId: "1:273552661152:web:a815287f4bd924d28147c5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);