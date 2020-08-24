import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyCql2MOScSqN5EILncSSswW_c-t9bD4Nj8",
    authDomain: "labscode-d3688.firebaseapp.com",
    databaseURL: "https://labscode-d3688.firebaseio.com",
    projectId: "labscode-d3688",
    storageBucket: "labscode-d3688.appspot.com",
    messagingSenderId: "30532334895",
    appId: "1:30532334895:web:03b522ecdba249e2ef5dda",
    measurementId: "G-1TSSE0SWSH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()

export { db, auth, firebase }