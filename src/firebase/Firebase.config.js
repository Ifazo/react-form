// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGwO5QwRRXr6IWWPZKJXuQyUlTHlNSBfI",
  authDomain: "ifaz-react-app.firebaseapp.com",
  projectId: "ifaz-react-app",
  storageBucket: "ifaz-react-app.appspot.com",
  messagingSenderId: "374724860428",
  appId: "1:374724860428:web:73cfd5f69ae406efae6c29",
  measurementId: "G-TN2F5X7278"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;