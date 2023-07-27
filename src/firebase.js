import { initializeApp } from "firebase/app";

import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBNoFMKrxxmsM_1CaeolkImhovYgilFmb8",
  authDomain: "login-bba1e.firebaseapp.com",
  databaseURL: "https://login-bba1e-default-rtdb.firebaseio.com",
  projectId: "login-bba1e",
  storageBucket: "login-bba1e.appspot.com",
  messagingSenderId: "792815791089",
  appId: "1:792815791089:web:21ee4e7ab18b6530427250"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)