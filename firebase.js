<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyASClySbVPyDUAYGAJThQ9sBH5HK8ETzgo",
    authDomain: "immi-9e0ca.firebaseapp.com",
    projectId: "immi-9e0ca",
    storageBucket: "immi-9e0ca.firebasestorage.app",
    messagingSenderId: "1054119985815",
    appId: "1:1054119985815:web:60c29fdac46a906a2b9fd2",
    measurementId: "G-TX1QV7923M"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
