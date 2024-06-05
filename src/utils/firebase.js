// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5JC2Ik12jJpWU1Uh10Vzg8i6hGDGQj_o",
  authDomain: "next-blog-6e27e.firebaseapp.com",
  projectId: "next-blog-6e27e",
  storageBucket: "next-blog-6e27e.appspot.com",
  messagingSenderId: "80808202246",
  appId: "1:80808202246:web:c81723c22feadea430b387",
  measurementId: "G-ZSPTVFJY31",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics =
  app.name && typeof window !== "undefined" ? getAnalytics(app) : null;
