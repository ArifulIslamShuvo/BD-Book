import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2tGFxY2XPzMaPoe2ld98NXIUlnb9PVB4",
  authDomain: "bd-book-c1c35.firebaseapp.com",
  projectId: "bd-book-c1c35",
  storageBucket: "bd-book-c1c35.appspot.com",
  messagingSenderId: "693766936469",
  appId: "1:693766936469:web:76018b590be2f9b493c89c",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
