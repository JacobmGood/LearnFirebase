// NOTE YOU CAN REMOVE THE ANALYTICS IMPORT 
 import { getAuth } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
 import { getFirestore } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

/* Paste  API code here */
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD8Y9Ip1gDLBpm6FngDcj7rls_iIiBqgP0",
    authDomain: "learnwithfirebase-eab46.firebaseapp.com",
    projectId: "learnwithfirebase-eab46",
    storageBucket: "learnwithfirebase-eab46.firebasestorage.app",
    messagingSenderId: "242422180364",
    appId: "1:242422180364:web:da763f0f00819a38cddc29",
    measurementId: "G-JMX16NHVF8"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);

// Additional imports to initialize Firebase 
// NOTE YOU CAN REMOVE THE ANALYTICS variable 
 export const auth = getAuth(app);
 export const db = getFirestore(app);