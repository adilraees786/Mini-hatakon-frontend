  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAuth,
 
    signInWithEmailAndPassword,
  
  } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
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

//   console.log('====>', app);
  

  const auth = getAuth(app);

  let login_btn=document.getElementById('login_btn')

login_btn.addEventListener('click',function(){


  let signn_email=document.getElementById('signn_email').value

    let sign_password=document.getElementById('sign_password').value

    signInWithEmailAndPassword(auth, signn_email, sign_password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log('=== log in');
    

    window.location.href = 'dashboard.html';
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });


})