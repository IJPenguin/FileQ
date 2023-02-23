// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import {
    getAuth,
    signInWithEmailAndPassword,
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
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const loginBtn = document.getElementById("loginBtn");
let username = '';

const login = (e) => {
    e.preventDefault();
    const obj = {
        loginEmail: loginEmail.value,
        loginPassword: loginPassword.value,
    };
    username = obj.loginEmail.split('@')[0];
    localStorage.setItem('username', username);
    signInWithEmailAndPassword(auth, obj.loginEmail, obj.loginPassword)
        .then((userCredential) => {
            alert("User Logged In Successfully");
            window.location.href = "filesystem.html";
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert("error" + errorMessage);
        });
};

// QR CODE GENERATOR AND QR LOGIN

sessionStorage.setItem("sessionId", Math.random().toString(36).slice(2));
window.onload = () => {
    const qrcode = new QRCode("qrcode", {
        text: sessionStorage.getItem("sessionId"),
        width: 300,
        height: 300,
    });
    console.log(sessionStorage.getItem("sessionId"));
};

const qrLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("User Logged In Successfully");
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert("error" + errorMessage);
        });
};

const lag = document.getElementById("lag");

const lagin = () => {
    setTimeout((loginEmail.value = "tanmay@gmail.com"), 1000);
    setTimeout((loginPassword.value = "qwerty"), 1000);
    setTimeout(loginBtn.click(), 1000);
};

lag.addEventListener("click", lagin);
loginBtn.addEventListener("click", login);
