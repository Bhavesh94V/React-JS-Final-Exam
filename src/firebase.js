// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAmXNZim4O468usAWzmcwUC_PRAaunD9g4",
    authDomain: "movie-app-62823.firebaseapp.com",
    projectId: "movie-app-62823",
    storageBucket: "movie-app-62823.firebasestorage.app",
    messagingSenderId: "729648775285",
    appId: "1:729648775285:web:16d323e034fa9b478bf83c",
    measurementId: "G-TQ8Z7943LJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);