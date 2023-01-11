// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyBNEQXvBxOKCDEuE4Lr8ie6AESWDolsuVA",
    authDomain: "student-feedback-system-75d62.firebaseapp.com",
    projectId: "student-feedback-system-75d62",
    storageBucket: "student-feedback-system-75d62.appspot.com",
    messagingSenderId: "735686858248",
    appId: "1:735686858248:web:2917e544d6250533f063bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;