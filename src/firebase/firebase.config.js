// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId
// };

// const app = initializeApp(firebaseConfig);

// export default app;


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNhVtjpcfLZplzaRPBmd3WzwknzqEE-P4",
  authDomain: "repliq-826e5.firebaseapp.com",
  projectId: "repliq-826e5",
  storageBucket: "repliq-826e5.appspot.com",
  messagingSenderId: "913313405872",
  appId: "1:913313405872:web:d8fcda35fc30abde6b9475"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;