
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDpYaYemHpiyqSGxIUfTdCzDVnwPY2Dnxg",

  authDomain: "otp-appointment-64d07.firebaseapp.com",

  projectId: "otp-appointment-64d07",

  storageBucket: "otp-appointment-64d07.appspot.com",

  messagingSenderId: "569326645585",

  appId: "1:569326645585:web:6212ce26c061af1a416370",

  measurementId: "G-QJ0B6N83JG"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)





























// // Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";

// import { getAnalytics } from "firebase/analytics";

// // TODO: Add SDKs for Firebase products that you want to use

// // https://firebase.google.com/docs/web/setup#available-libraries


// // Your web app's Firebase configuration

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {

//   apiKey: "AIzaSyDpYaYemHpiyqSGxIUfTdCzDVnwPY2Dnxg",

//   authDomain: "otp-appointment-64d07.firebaseapp.com",

//   projectId: "otp-appointment-64d07",

//   storageBucket: "otp-appointment-64d07.appspot.com",

//   messagingSenderId: "569326645585",

//   appId: "1:569326645585:web:6212ce26c061af1a416370",

//   measurementId: "G-QJ0B6N83JG"

// };


// // Initialize Firebase

// const app = initializeApp(firebaseConfig);