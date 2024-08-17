

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc
} from " https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtxx3Fv7GiaEe1sZKMFEtf9ejY-YU4eps",
  authDomain: "first-project-dae17.firebaseapp.com",
  projectId: "first-project-dae17",
  storageBucket: "first-project-dae17.appspot.com",
  messagingSenderId: "1011078811359",
  appId: "1:1011078811359:web:833d03fc2520bf8c8d236a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log("===>", app);


const db = getFirestore(app);

console.log('===>', db);





let post_button = document.getElementById('post_button')

post_button.addEventListener('click', async function (e) {
  e.preventDefault()
  try {
    let userName = document.getElementById('blog-name').value;
    let blogDate = document.getElementById('blog-date').value;
    let userEmail = document.getElementById('blog-email').value;
    let blogTitle = document.getElementById('blog-title').value;
    let blogDescription = document.getElementById('blog-description').value;


    const docRef = await addDoc(collection(db, "blogs"), {
      userName: userName,
      userEmail: userEmail,
      blogDate: blogDate,
      blogTitle: blogTitle,
      blogDescription: blogDescription
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
})