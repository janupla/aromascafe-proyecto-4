import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCaFwoxKVQx3Ti2-iw9uXUCyg3jdRduBA0",
    authDomain: "cafe-proyecto-4.firebaseapp.com",
    projectId: "cafe-proyecto-4",
    storageBucket: "cafe-proyecto-4.appspot.com",
    messagingSenderId: "843260500961",
    appId: "1:843260500961:web:15a7c34ffef14a8d3c10a0"

};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp)