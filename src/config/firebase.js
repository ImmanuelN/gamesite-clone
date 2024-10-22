import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAVPCaxuctQRmuXbtsMLr1-WyDQW8gaDBI",
  authDomain: "gamehub-3c4b6.firebaseapp.com",
  projectId: "gamehub-3c4b6",
  storageBucket: "gamehub-3c4b6.appspot.com",
  messagingSenderId: "1054216591438",
  appId: "1:1054216591438:web:45cb9ecd323139f3924b1f",
  measurementId: "G-MF01HB4X83"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export {storage};