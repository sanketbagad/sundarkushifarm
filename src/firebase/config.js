// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9KKpOt_Z9K9WMDKaZiYFgxVol6VyOTKc",
  authDomain: "agri-99cf9.firebaseapp.com",
  projectId: "agri-99cf9",
  storageBucket: "agri-99cf9.appspot.com",
  messagingSenderId: "180712186844",
  appId: "1:180712186844:web:5f2a3749fdf3cb38cea519",
  measurementId: "G-QSD14YJRPF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);