import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyCh6brjG63-oe1CmqY9uf3hfOizmeIGW0g",
    authDomain: "events-on-time.firebaseapp.com",
    projectId: "events-on-time",
    storageBucket: "events-on-time.appspot.com",
    messagingSenderId: "478256429739",
    appId: "1:478256429739:web:7c46d3652e59a9f2d655ee",
    measurementId: "G-3P2CD8BK32"
};
  

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);