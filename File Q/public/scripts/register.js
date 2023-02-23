// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDnVY6LQcl1MPYLftH1O-2zuvrXVBGZKi4",
    authDomain: "projet-exhibition-2.firebaseapp.com",
    projectId: "projet-exhibition-2",
    storageBucket: "projet-exhibition-2.appspot.com",
    messagingSenderId: "153514772850",
    appId: "1:153514772850:web:d07b2cb9f88a8aae7e35eb",
    measurementId: "G-WFTEM7RW9S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Variables from the form

const loginName = document.getElementById("loginName");
const loginUsername = document.getElementById("loginUsername");
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const loginPhNumber = document.getElementById("loginPhNumber");
const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const obj = {
        loginName: loginName.value,
        loginUsername: loginUsername.value,
        loginEmail: loginEmail.value,
        loginPassword: loginPassword.value,
        loginPhNumber: loginPhNumber.value,
    };
    createUserWithEmailAndPassword(auth, obj.loginEmail, obj.loginPassword)
        .then((success) => {
            alert("User Created Successfully");
        })
        .catch((error) => {
            alert("error" + error);
        });
    console.log(obj);
});
