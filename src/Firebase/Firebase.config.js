// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:process.env.REACT_APP_apiKey,
//   authDomain:process.env.REACT_APP_authDomain,
//   projectId:process.env.REACT_APP_projectId,
//   storageBucket:process.env.REACT_APP_storageBucket ,
//   messagingSenderId:process.env.REACT_APP_messagingSenderId,
//   appId:process.env.REACT_APP_appId
// };

const firebaseConfig = {
  apiKey: "AIzaSyCoStdOfwp4OR9LijEqUK2LTs0XwHl2Lik",
  authDomain: "drbelalvai.firebaseapp.com",
  projectId: "drbelalvai",
  storageBucket: "drbelalvai.appspot.com",
  messagingSenderId: "1082738028069",
  appId: "1:1082738028069:web:641c9250253de148db59cc"
};





// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default (app)